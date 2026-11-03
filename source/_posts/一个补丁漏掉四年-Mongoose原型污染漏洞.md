---
title: 一个补丁漏掉的入口：记 Mongoose 原型污染漏洞（GHSA-6972-9mcm-vhwj）
date: 2026-11-03 23:30:00
categories:
  - 安全
tags:
  - 安全研究
  - 原型污染
  - Mongoose
  - Node.js
  - GHSA
---

### 前言

2026 年 10 月，我给 Mongoose 报告了一个原型污染漏洞。它是"补丁漏修"的典型样本：2022 年官方修过同类问题，但只修了其中一个入口，另一个入口一直没被防护，在 6、7、8、9 四条维护线上存活了大约四年。

这篇记录写清楚三件事：漏洞是怎么找到的、为什么它值得修、以及修复长什么样。

### 背景：Mongoose 是什么

Mongoose 是 Node.js 里最主流的 MongoDB 对象建模库（ODM）。它用 `Schema` 声明数据结构，编译成 `Model`，业务代码用 Model 做增删改查。

- GitHub：<https://github.com/Automattic/mongoose>（star 约 2.7 万）
- npm 月下载量：约 2500 万（`api.npmjs.org` 实测，2026-10）
- 维护者：Valeri Karpov（`vkarpov15`），托管在 Automattic 组织下

`Schema` 上有两类字段：

- **真实字段**：`schema.path('a.b', ...)` / `schema.add(...)`
- **虚拟字段**：`schema.virtual('a.b')`，不存库的派生属性

而虚拟字段和多层嵌套路径，都支持用点号分隔的路径字符串。

### 漏洞机制

`Schema.prototype.virtual()` 内部用 `reduce` 从 `this.tree` 开始逐段下钻，创建嵌套对象：

```js
virtuals[name] = parts.reduce(function(mem, part, i) {
  mem[part] || (mem[part] = (i === parts.length - 1)
    ? new VirtualType(options, name)
    : {});
  return mem[part];
}, this.tree);
```

问题在于：它**没有校验路径片段**。当 `name` 里包含 `__proto__`、`constructor`、`prototype` 这类片段时，`mem[part]` 会沿原型链解析，写入就落到 `Object.prototype` 或 `Function.prototype` 上，而且是 **own + enumerable**。

```js
const mongoose = require('mongoose');
const schema = new mongoose.Schema({});

schema.virtual('__proto__.polluted');
({}).polluted;                                   // VirtualType 实例
Object.prototype.hasOwnProperty('polluted');     // true

schema.virtual('constructor.prototype.opol');
({}).opol;                                       // true

schema.virtual('hasOwnProperty.__proto__.fpol');
(function () {}).fpol;                           // Function.prototype 被污染
```

### 为什么是"补丁漏修"

2022 年的 CVE-2022-2564 / CVE-2022-24304 就是同一类问题：`Schema` 路径接受 `__proto__` 导致原型污染。当年的修复给 `path()` / `add()` 加了 `specialProperties` 检查——查看修复历史，这两个函数里都有类似：

```js
if (utils.specialProperties.has(last)) {
  throw new MongooseError('Cannot set special property `' + last + '` on a schema');
}
```

但 `virtual()` 在同一份文件里，却始终没有拿到这套校验。

我的切入方式很朴素：**拿到一个已知的漏洞类别，枚举所有接受"路径字符串"的 API 入口，逐个试。** `virtual()` 是唯一漏掉的那个。

这也解释了为什么它能活四年：安全审计看的是"有没有 CVE 补丁"，而"补丁是不是覆盖了同一类的全部入口"很少被复查。

### 影响

- 影响范围：6.x / 7.x / 8.x / 9.x 全部维护线
- 触发前提：攻击者能影响传给 `schema.virtual()` 的字段名
- 典型场景：运行时动态构建 Schema 的系统（CMS 表单构建器、低代码平台、schema-as-code）

危害不在"数据被改"，而在 **属性存在性判断被污染**：

```js
if ('isAdmin' in user) { ... }              // 永远 true
if (user.role !== undefined) { ... }        // 被污染的属性"存在"
for (const k in obj) { ... }                // 多出不应有的键
```

对 `Function.prototype` 的污染则是服务端 JS 里的经典 gadget 原语，实际危害取决于下游代码。

### 修复

官方于 2026-10-22 合并修复，提交 `74df7769`：

```diff
+  const parts = name.split('.');
+  for (const part of parts) {
+    if (utils.specialProperties.has(part)) {
+      throw new MongooseError('Cannot set special property `' + part + '` on a schema');
+    }
+  }
```

测试用例覆盖了我报告里的三条路径：

```js
for (const name of ['__proto__.polluted', 'constructor.prototype.polluted', 'hasOwnProperty.__proto__.polluted']) {
  assert.throws(() => schema.virtual(name), /Cannot set special property/);
}
```

修复随 `9.11.4` 发布（2026-10-23），advice 也已更新为 `^6.13.12 || ^7.8.13 || ^8.24.7 || ^9.11.4`。

### 证据链（全部可核验）

| 环节 | 链接 |
|---|---|
| 安全公告（Credits：Linus-Shyu / Analyst） | <https://github.com/Automattic/mongoose/security/advisories/GHSA-6972-9mcm-vhwj> |
| 修复提交 `74df7769` | <https://github.com/Automattic/mongoose/commit/74df7769b5a8d89c4413b764029911ee915ea467> |
| 发布版本 `9.11.4` | <https://github.com/Automattic/mongoose/releases/tag/9.11.4> |
| 同批次对照（sanitizeFilter 相关） | <https://github.com/Automattic/mongoose/security/advisories/GHSA-gg4r-jv3p-qx3c> |

时间线：

```
2026-10-22  维护者提交修复 74df7769
2026-10-23  9.11.4 发布（npm latest 同步）
2026-11-02  advisory 公开，署名 Linus-Shyu (Analyst)
```

### 小结

这个漏洞的评级是 Moderate（CVSS 6.5），前提条件也明确，不是"任何 mongoose 应用都能被打"的那种问题。但它让我确认了一件事：

> 修一个入口不等于修完一类问题。看到「已修复原型污染」，值得再问一句：所有入口都查了吗？

对做安全研究的人来说，这比单次找到一个点更有复利——**变体分析（variant analysis）是可持续的方法论，而不是运气。**

### 参考

- GHSA-6972-9mcm-vhwj：<https://github.com/Automattic/mongoose/security/advisories/GHSA-6972-9mcm-vhwj>
- CVE-2022-2564：<https://github.com/advisories/GHSA-f825-f98c-gj3g>
- CVE-2022-24304：<https://github.com/advisories/GHSA-h8hf-x3f4-xwgp>
- 修复提交：<https://github.com/Automattic/mongoose/commit/74df7769b5a8d89c4413b764029911ee915ea467>
</content>

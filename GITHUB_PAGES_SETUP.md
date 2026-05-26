# GitHub Pages 配置指南

## 问题
访问 `https://linusshyu.github.io/feelflow/` 或 `https://linusshyu.github.io/starfetch/` 时显示 404 错误。

## 解决方案

### 1. 启用 GitHub Pages

1. 打开 GitHub 仓库：`https://github.com/Linus-Shyu/Linus-Shyu.github.io`
2. 点击 **Settings** (设置)
3. 在左侧菜单中找到 **Pages** (页面)
4. 在 **Source** (源) 部分：
   - 选择 **Deploy from a branch** (从分支部署)
   - **Branch** 选择 `master`
   - **Folder** 选择 `/docs`**
5. 点击 **Save** (保存)

### 2. 等待部署

- GitHub Pages 通常需要 1-5 分钟来构建和部署
- 部署完成后，你可以在 Settings > Pages 页面看到绿色的部署成功消息
- 访问地址会显示在 Pages 设置页面的顶部

### 3. 访问地址

配置完成后，你的网站可以通过以下地址访问：

- **FeelFlow**: `https://linusshyu.github.io/feelflow/`
- **StarFetch**: `https://linusshyu.github.io/starfetch/`

### 4. 如果使用自定义域名

如果你的 `docs/CNAME` 文件中已经有自定义域名，你需要在 DNS 设置中配置：
- 添加 CNAME 记录指向 `linusshyu.github.io`

### 5. 检查部署状态

如果部署有问题，可以：
1. 检查 Settings > Pages > Build and deployment
2. 查看 Actions 标签页中的构建日志
3. 确保所有文件都已推送到 `master` 分支的 `docs/` 目录

## 文件结构确认

当前的文件结构应该是：

```
docs/
├── feelflow/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── starfetch/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── i18n.js
```

文件已在正确位置，只需要在 GitHub 设置中启用 Pages 即可。

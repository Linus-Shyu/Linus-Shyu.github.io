# Linus Shyu 的 Hexo 博客（https://linusshyu.dev）

自建 Hexo 博客，使用 3-hexo 主题，部署在 GitHub Pages（自定义域名 `linusshyu.dev`，主分支 `master`）。

## 线上访问
- 博客：<https://linusshyu.dev>
- 仓库：<https://github.com/Linus-Shyu/Linus-Shyu.github.io>

## 快速开始
```bash
npm install          # 安装依赖
npm run server       # 本地预览，默认 http://localhost:4000
npm run build        # 生成静态文件
npm run deploy       # 构建 + 质量校验 + 刷新 docs/（不含 git 推送）
```

## 写作与发布流程
1) 在 `source/_posts/` 新建 Markdown 文章。  
2) `npm run server` 本地预览版式、图片、代码高亮。  
3) `npm run deploy` 执行 `hexo generate`、质量校验，并把 `public/` 同步进 `docs/`。  
4) 手动提交并推送 `docs/`：

```bash
git status --short docs   # 先确认改动范围合理：应只有新文章对应的 HTML 与索引页
git add docs
git commit -m "Publish: <文章标题>"
git push origin master
```

> **重要：发布由 `docs/` 直接驱动，没有 CI 构建。**
> GitHub Pages 直接发布本仓库的 `docs/` 目录（自 `6ec1fc6` 起已移除 `pages.yml` 自动构建）。
> 因此**只推 Markdown 源码线上不会更新**，必须 `npm run deploy` 后把 `docs/` 一起推送。
> 第 4 步若发现 `docs/privacy` 或其他子站目录被删除，请停下排查，不要推送。

## 网站目录（集中配置）

About 页的「网站目录 / Site Map」由 **`source/_data/site_directory.yml`** 统一维护，构建时自动渲染。新增或修改子站时只改这一处，然后执行 `npm run build`。

## 目录结构
- `source/`：文章源文件（Markdown）
- `source/_data/site_directory.yml`：全站子站目录列表
- `themes/3-hexo/`：主题及自定义
- `docs/`：最终发布目录（GitHub Pages 直接读取，**必须提交**）
- `bin/prepare-pages.js`：将 `public/` 同步到 `docs/`，并保留 `CNAME` 与 `PRESERVE_DIRS` 中的独立子站（含 `privacy`）
- `xbot-dashboard/`：独立子站源文件，由 `prepare-pages.js` 复制进 `docs/xbot-dashboard/`
- `.github/workflows/xbot-dashboard-quality.yml`：Dashboard 质量门禁（仅检查，不负责发布）

## X Bot Dashboard

- 页面：<https://linusshyu.dev/xbot-dashboard/>
- 源文件：`xbot-dashboard/`
- 发布目录：`docs/xbot-dashboard/`
- 数据文件：`xbot-dashboard/panel.json` 与 `docs/xbot-dashboard/panel.json`（约 3 KB 的精简 v2 面板数据），由 `Linus-Shyu/x_bot` 的 `growth maintenance` workflow 每 2 小时自动生成、校验并同步更新；面板页面每 5 分钟自动拉取刷新，无需人工操作。

## 自定义域名
- `docs/CNAME` 固定为 `linusshyu.dev`，无需每次手动设置。若需更换域名，直接修改该文件。

## 常见问题
- 部署后仍见旧内容：确认已提交推送 `docs/`（没有 CI 自动构建），再等待 Pages 完成部署并清理浏览器缓存。
- 推了文章线上没变化：见「写作与发布流程」——只推 `source/` 不会触发构建，必须连 `docs/` 一起推。
- `docs/` 里某个子站目录被删了：检查 `bin/prepare-pages.js` 的 `PRESERVE_DIRS` 是否包含该目录。
- `npm install` 报 `EPERM`/缓存权限错误：执行 `sudo chown -R $(id -u):$(id -g) ~/.npm`，或临时加 `--cache "$PWD/.npm-cache"`。
- 环境保护阻止部署：仓库 Settings → Environments → `github-pages`，允许 `master`。
- 主题子模块问题：主题已内置，无需额外子模块。

## 贡献
- 欢迎提交 Issue/PR 讨论主题定制、性能优化或写作建议。

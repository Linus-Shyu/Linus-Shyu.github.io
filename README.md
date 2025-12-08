# Linus Shyu 的 Hexo 博客（linusshyu.dev）

自建 Hexo 博客，使用 3-hexo 主题，部署在 GitHub Pages 自定义域名 `linusshyu.dev`，主分支为 `master`。

## 快速开始
1. 安装依赖
   ```bash
   npm install
   ```
2. 本地预览（默认 <http://localhost:4000>）
   ```bash
   npm run server
   ```
3. 生成静态文件
   ```bash
   npm run build
   ```
4. 发布到 GitHub Pages（输出到 `docs/`，自动携带 `.nojekyll` 和 `CNAME`）
   ```bash
   npm run deploy
   ```

## 写作流程
1. 新建文章：在 `source/_posts/` 下创建 Markdown 文件（建议使用现有模板）。
2. 本地预览：`npm run server`，在浏览器检查版式与图片。
3. 构建与发布：`npm run deploy` 会：
   - `hexo generate` 生成到 `public/`
   - `node scripts/prepare-pages.js` 将 `public/` 内容移动到 `public/docs/` 并写入 `.nojekyll`
   - `hexo deploy` 推送到 GitHub Pages（`master` 分支）

## 目录说明
- `source/`：文章源文件（Markdown）。
- `themes/3-hexo/`：主题及自定义。
- `docs/`：最终发布目录（GitHub Pages 读取这里）。
- `.github/workflows/pages.yml`：Pages 部署工作流，监听 `master`。

## 自定义域名
- `docs/CNAME` 已配置 `linusshyu.dev`，无需每次手动选择域名。
- 若切换域名，修改 `docs/CNAME` 即可。

## 常见问题
- **页面仍显示旧页脚文案**：清理浏览器缓存，等待 Pages 重新部署完成。
- **Pages 构建被拒绝（环境保护）**：到仓库 Settings → Environments → `github-pages`，允许 `master` 分支。
- **子模块缺失导致检出失败**：主题已内置到仓库，无需额外子模块。

## 推广与访问
- 访问博客：<https://linusshyu.dev>
- GitHub 仓库：<https://github.com/Linus-Shyu/Linus-Shyu.github.io>

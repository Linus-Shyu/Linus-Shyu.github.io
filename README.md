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
npm run deploy       # 构建 + 准备 Pages 目录 + 推送
```

## 写作与发布流程
1) 在 `source/_posts/` 新建 Markdown 文章。  
2) `npm run server` 本地预览版式、图片、代码高亮。  
3) `npm run deploy` 执行：
   - `hexo generate` → 输出到 `public/`
   - `node scripts/prepare-pages.js` → 将 `public/` 移动为 `public/docs/` 并写入 `.nojekyll`
   - `hexo deploy` → 推送到 GitHub Pages（`master`）

## 目录结构
- `source/`：文章源文件（Markdown）
- `themes/3-hexo/`：主题及自定义
- `docs/`：最终发布目录（GitHub Pages 读取）
- `.github/workflows/pages.yml`：Pages 部署工作流（监听 `master`）
- `scripts/prepare-pages.js`：部署前移动与补充 `.nojekyll`

## 自定义域名
- `docs/CNAME` 固定为 `linusshyu.dev`，无需每次手动设置。若需更换域名，直接修改该文件。

## 常见问题
- 部署后仍见旧内容：等待 Pages 完成部署并清理浏览器缓存。
- 环境保护阻止部署：仓库 Settings → Environments → `github-pages`，允许 `master`。
- 主题子模块问题：主题已内置，无需额外子模块。

## 贡献
- 欢迎提交 Issue/PR 讨论主题定制、性能优化或写作建议。

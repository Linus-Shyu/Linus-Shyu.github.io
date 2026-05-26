# FeelFlow 网站部署说明

## ✅ 已完成的步骤

1. ✅ Git 仓库已初始化
2. ✅ 已连接到远程仓库：`https://github.com/Linus-Shyu/Linus-Shyu.github.io.git`
3. ✅ FeelFlow 网站文件已添加到 `docs/feelflow/` 文件夹（正确位置！）
4. ✅ 更改已提交到本地 master 分支

**重要**：文件已移动到 `docs/feelflow/` 目录，因为你的 GitHub Pages 配置为从 `docs/` 目录读取。

## 🚀 推送步骤

### 方法一：使用命令行推送

```bash
cd /Users/linusshyu/Desktop/FeelFlow-Website
git push origin master
```

如果提示需要身份验证：
- 你可能需要输入 GitHub 用户名和密码（或 Personal Access Token）
- 或者配置 SSH 密钥使用 SSH 方式推送

### 方法二：使用 SSH（推荐）

如果你已配置 SSH 密钥，可以切换到 SSH 方式：

```bash
cd /Users/linusshyu/Desktop/FeelFlow-Website
git remote set-url origin git@github.com:Linus-Shyu/Linus-Shyu.github.io.git
git push origin master
```

### 方法三：使用 GitHub Desktop

1. 打开 GitHub Desktop
2. 添加本地仓库：`/Users/linusshyu/Desktop/FeelFlow-Website`
3. 点击 "Push origin" 按钮

## 📍 访问地址

推送成功后，你的 FeelFlow 网站可以通过以下地址访问：

**GitHub Pages 地址：**
- `https://linusshyu.github.io/feelflow/`

**自定义域名（如果配置了）：**
- `https://linusshyu.dev/feelflow/`

**注意**：由于文件在 `docs/feelflow/` 目录，访问路径是正确的。

## 📝 注意事项

1. **文件结构**：所有文件都在 `docs/feelflow/` 文件夹中，包括：
   - `docs/feelflow/index.html`
   - `docs/feelflow/styles.css`
   - `docs/feelflow/script.js`
   - `docs/feelflow/assets/images/`

2. **路径问题**：由于网站位于子目录，所有资源路径（CSS、JS、图片）都使用相对路径，应该可以正常工作。

3. **GitHub Pages 配置**：你的仓库配置为从 `docs/` 目录读取，所以文件必须放在 `docs/feelflow/` 而不是根目录的 `feelflow/`。

3. **GitHub Pages 自动部署**：推送后，GitHub Pages 会自动重新部署（通常需要 1-5 分钟）。

## 🔍 验证部署

推送后等待几分钟，然后访问：
- `https://linusshyu.github.io/feelflow/` 或
- `https://linusshyu.dev/feelflow/`

检查：
- ✅ 网站是否正常显示
- ✅ 样式是否正确加载
- ✅ 图片是否正常显示
- ✅ 所有链接是否正常工作

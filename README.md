# CYBER//BLOG

一个赛博朋克风格的个人博客，基于 VitePress 构建，零管理后台，写 Markdown 即更新。

**在线访问：** [futao-byte.github.io](https://futao-byte.github.io)

## 快速开始

### 克隆并安装

```bash
git clone https://github.com/futao-byte/futao-byte.github.io.git
cd futao-byte.github.io
npm install
```

### 本地预览

```bash
npm run docs:dev
```

浏览器打开 http://localhost:5173 即可看到博客。

## 撰写新文章

1. 在 `docs/posts/` 目录下新建 `.md` 文件。
2. 添加 `title` 和 `date` 字段，格式如下：

```yaml
---
title: "我的新文章"
date: 2026-06-01
---
```

文章正文...

3. 保存后，首页会自动显示新文章卡片。

## 插入图片

- **本地图片**：将图片放入 `docs/public/images/` 目录，然后在 Markdown 中使用：
  ```markdown
  ![描述](/images/my-image.png)
  ```
- **图床链接**：直接使用图片完整 URL：
  ```markdown
  ![描述](https://picsum.photos/id/104/800/400)
  ```

## 数学公式

支持 LaTeX 语法，行内使用 `$...$`，块级使用 `$$...$$`。示例：

```latex
$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$
```

## 部署到 GitHub Pages

### 方法一：自动部署（推荐，使用 npm 脚本）

```bash
# 1. 构建并复制到根目录
npm run deploy

# 2. 提交所有文件并推送
git add .
git commit -m "Deploy blog update"
git push origin main
```

### 方法二：手动操作

```bash
# 1. 构建
npm run docs:build

# 2. 将构建产物复制到仓库根目录
cp -r docs/.vitepress/dist/* .

# 3. 提交并推送
git add .
git commit -m "Deploy blog"
git push origin main
```

### 配置 GitHub Pages

1. 进入仓库 **Settings > Pages**（左侧菜单）。
2. 在 **Build and deployment** 部分：
   - **Source** 选择 **Deploy from a branch**
   - **Branch** 选择 `main`，目录选择 `/ (root)`
3. 点击 **Save**。
4. 等待几分钟，访问 `https://futao-byte.github.io` 即可看到博客。

## .gitignore 建议

在项目根目录创建 `.gitignore` 文件，内容如下：

```
node_modules/
docs/.vitepress/cache/
docs/.vitepress/dist/
```

**注意：** 不要忽略根目录的 HTML/CSS/JS 文件（这些是构建产物，GitHub Pages 需要它们）。

## 自定义

- 修改主题色彩、字体等：编辑 `docs/.vitepress/theme/style.css`。
- 修改站点名称和导航：编辑 `docs/.vitepress/config.js`。

霓虹之夜，开始书写。

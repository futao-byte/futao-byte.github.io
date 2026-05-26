import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: 'CYBER//BLOG',
  description: 'A cyberpunk personal blog',
  base: '/', // 用户页面仓库，根路径就是 /
  outDir: '.vitepress/dist', // 构建输出目录
  markdown: {
    config: (md) => {
      md.use(mathjax3, {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']]
        }
      })
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
})

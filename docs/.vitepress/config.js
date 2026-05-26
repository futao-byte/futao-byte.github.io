import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CYBER BLOG',
  description: 'Neon-drenched personal blog',

  themeConfig: {
    siteTitle: 'CYBER BLOG',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/first-post' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname' }
    ]
  },

  markdown: {
    config(md) {
      const katex = require('markdown-it-katex')
      md.use(katex)
    }
  }
})

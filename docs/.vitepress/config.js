import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CYBER BLOG",
  description: "Cyberpunk Personal Blog",

  themeConfig: {
    siteTitle: "NEON//BLOG",

    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/" }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ]
  }
})

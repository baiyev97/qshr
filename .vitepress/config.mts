import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "七三的博客",
  description: "部署网站",
  head: [
    ['link',{rel:'icon',href:'/imgs/favicon.ico'}],// 添加 favicon
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '算法', link: '/markdown-examples' },
          { text: 'Python', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/baiyev97' }
    ]
  }
})

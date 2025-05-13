import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "七三的博客",
  description: "部署网站",

  head: [
    ['link', { rel: 'icon', href: '/imgs/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Python',
        collapsed: true,
        items: [
          { text: '选择', link: '/python/pythontest' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '数组',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '链表',
        collapsed: true,
        items: [
          { text: '树', link: '/algorithm/tree' },
          { text: '图', link: '/algorithm/graph' }
        ]
      },
      {
        text: '哈希表',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '字符串',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '栈与队列',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '二叉树',
        collapsed: true,
        items: [
          { text: '树', link: '/algorithm/tree' },
          { text: '图', link: '/algorithm/graph' }
        ]
      },
      {
        text: '回溯',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '贪心',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
      {
        text: '动态规划',
        collapsed: true,
        items: [
          { text: '字符串', link: '/algorithm/string' },
          { text: '数组', link: '/algorithm/array' },
          { text: '链表', link: '/algorithm/list' }
        ]
      },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/baiyev97' }
    ]
  }
})

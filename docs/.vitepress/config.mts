import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Random Talk",
  description: "While experiencing it so true, remember it.｜历经的过往，权当作笑谈罢了。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '随笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '写在最前面',
        items: [
          { text: '题记', link: '/Bonjour/Bonjour' },
          { text: '更新计划', link: '/Bonjour/Updates' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FengzihangCode' }
    ]
  }
})

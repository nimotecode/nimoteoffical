import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NIMOTECODE',
  description: 'A lightweight remote IDE for developers',
  base: '/',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Support', link: '/support' },
          { text: 'Privacy', link: '/privacy' },
          { text: 'Terms',   link: '/terms'   }
        ]
      }
    },

    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/', 
      themeConfig: {
        nav: [
          { text: '支持',     link: '/zh/support' },
          { text: '隐私政策', link: '/zh/privacy' },
          { text: '服务条款', link: '/zh/terms' }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nimotecode/nimote_issues' }
    ],

    footer: {
      message: '© 2026 NimoteCode. All rights reserved.'
    }
  }
})
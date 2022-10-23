const { description } = require('../../package')

module.exports = {

  base: '/vue-js-cron/vue2/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue-js-cron Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Vue v3',
        link: 'https://abichinger.github.io/vue-js-cron/'
      },
      {
        text: 'Demo',
        link: '/demo',
      },
      {
        text: 'Guide',
        link: '/guide/getting-started',
      },
      {
        text: 'API',
        link: '/api/core',
      },
      {
        text: 'Github',
        link: 'https://github.com/abichinger/vue-js-cron'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'getting-started',
            'custom-periods',
            'custom-fields'
          ]
        }
      ],
      '/api/': [
        {
          title: 'Core',
          collapsable: false,
          children: [
            'core',
            'util',
            'locale'
          ]
        },
        {
          title: 'Light',
          collapsable: false,
          children: [
            'light',
          ]
        },
        {
          title: 'Vuetify',
          collapsable: false,
          children: [
            'vuetify',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

var itemsFoo = [
    { text: 'Introduction', link: '/introduction' },
    { text: 'xetting Started', link: '/getting-started' }
  ]

export default {
    title: 'VitePressx',
    description: 'Just playing around.',
    themeConfig: {
        sidebar: [
          {
            text: 'Guide',
            items: itemsFoo
          }
        ]
      }
  }

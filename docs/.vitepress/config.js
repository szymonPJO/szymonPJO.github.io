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
        ],
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/articlesTest/' },
          { text: 'External', link: 'https://google.com' },
          {
            text: 'Dropdown Menu',
            items: [
              { text: 'Item A', link: '/item-1' },
              { text: 'Item B', link: '/item-2' },
              { text: 'Item C', link: '/item-3' }
            ]
          }
        ],
      },
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog',
    },
    srcDir: './src',
  }

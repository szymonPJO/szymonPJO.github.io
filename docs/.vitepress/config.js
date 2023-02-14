export default {
    title: 'Szymon Ostrowski',
    description: 'Just playing around.',
    themeConfig: {
        // sidebar: [
        //   {
        //     text: 'Foo',
        //     items: [
        //       { text: 'Bar', link: '/bar' },
        //       { text: 'Baz Started', link: '/baz' }
        //     ]
        //   }
        // ],
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/articlesTest/' },
          { text: 'About', link: 'https://google.com' },
          // {
          //   text: 'Dropdown Menu',
          //   items: [
          //     { text: 'Item A', link: '/item-1' },
          //     { text: 'Item B', link: '/item-2' },
          //     { text: 'Item C', link: '/item-3' }
          //   ]
          // }
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/clark-cui" },
          { icon: "instagram", link: "/" },
          { icon: "youtube", link: "/" },
          { icon: "linkedin", link: "/" },  
        ],
      },
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog',
    },
    srcDir: './src',
  }

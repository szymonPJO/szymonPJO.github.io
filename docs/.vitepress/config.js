import { getPosts } from "./theme/utils";

export default {
  title: "Szymon Ostrowski",
  description: "Just playing around.",
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
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/index" },
      { text: "About", link: "https://google.com" },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    posts: await getPosts(),
    socialLinks: [
      { icon: "github", link: "https://github.com/szymonPJO" },
      { icon: "instagram", link: "/" },
      { icon: "youtube", link: "/" },
      { icon: "linkedin", link: "/" },
    ],
  },
  srcDir: "./files",
};

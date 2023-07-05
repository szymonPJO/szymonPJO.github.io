import { getPosts } from "./theme/utils";

export default {
  title: "Szymon Ostrowski",
  description: "SPJO blog home",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/index" },
    ],
    posts: await getPosts(),
    socialLinks: [
      { icon: "github", link: "https://github.com/szymonPJO" },
      { icon: "instagram", link: "/404" },
    ],
  },
  srcDir: "./files",
};

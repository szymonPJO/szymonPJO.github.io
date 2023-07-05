import { getPosts } from "./theme/utils";

export default {
  title: "Szymon Ostrowski",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/index" },
      { text: "About", link: "https://google.com" },
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

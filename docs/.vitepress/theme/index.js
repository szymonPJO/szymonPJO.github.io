import DefaultTheme from "vitepress/theme";
import MyLayout from "./BlogLayout.vue";
import "./index.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
  },
};
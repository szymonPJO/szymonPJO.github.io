import Layout from './components/customWidget.vue'


export default {
    Layout,
  enhanceApp({ app }) {
    app.use({
    //   registerComponents: true,
    })
  },
}
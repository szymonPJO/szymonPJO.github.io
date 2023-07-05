<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import { useData, onContentUpdated } from "vitepress";
import { ref } from "vue";
const { Layout } = DefaultTheme;
const { frontmatter } = useData();

const titleText = ref("");
const dateText = ref("");
onContentUpdated(() => {
  titleText.value = frontmatter.value.title ?? "MISSED TITLE !";
  dateText.value = frontmatter.value.date ?? "MISSED DATE !";
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <p class="path">Blog / {{ titleText }}</p>
      <p class="date">{{ dateText }}</p>
      <div class="vp-doc">
        <h1>{{ titleText }}</h1>
      </div>
    </template>
    <template #doc-after> </template>
  </Layout>
</template>

<style scoped></style>
<style>
.path {
  font-weight: 2000;
  font-size: xx-small;
  opacity: 0.4;
}

.date {
  font-weight: 2000;
  font-size: small;
}

/* .title {
} */
</style>

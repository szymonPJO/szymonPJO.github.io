<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;

import { useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-before>
        <p class="date">{{ frontmatter.date}}</p>
        <div class="vp-doc">
          <h1>{{ frontmatter.title}}</h1>
        </div>
      </template>
    <template #doc-after> </template>
  </Layout>
</template>

<style scoped></style>
<style>
.date {
  font-weight: 2000;
  font-size: small;
}
.title {
}
</style>

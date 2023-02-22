<script lang="ts" setup>
  import DefaultTheme from "vitepress/theme";
  const { Layout } = DefaultTheme;
</script>
<style scoped></style>

<template>
    <Layout>
        
      <template #doc-before>
        <p class="data">{{ $frontmatter.data }}</p>
      </template>
      <template #doc-after>
        <h1>Test2!</h1>
      </template>
    </Layout>
</template>

<style>
.data{
  font-weight: 200;
  font-size: small;
}
</style>
<script lang="ts" setup>
  import DefaultTheme from "vitepress/theme";
  const { Layout } = DefaultTheme;
</script>
<style scoped></style>

<template>
    <div>
            <h1>Hello World!</h1>
            <p>data: {{ $frontmatter.data }}</p>
        </div>
    <Layout>
        
      <template #doc-before>
        <h1>Hello World!</h1>
      </template>
      <template #doc-after>
        <h1>Hello World!</h1>
      </template>
    </Layout>
</template>

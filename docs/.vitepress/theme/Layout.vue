<script lang="ts" setup>
  import DefaultTheme from "vitepress/theme";
  const { Layout } = DefaultTheme;
</script>
<style scoped></style>

<template>
    <Layout>
        
      <template #doc-before>
        <h1>Test1!</h1>
      </template>
      <template #doc-after>
        <h1>Test2!</h1>
      </template>
    </Layout>
</template>

<script lang="ts" setup>
  import DefaultTheme from "vitepress/theme";
  const { Layout } = DefaultTheme;

  interface frontmatter {
  date: string
}
</script>
<style scoped></style>

<template>
    <Layout>
        
      <template #doc-before>
        <p class="date">{{ $frontmatter.date}}</p>
        <div class="vp-doc">
          <h1>{{ $frontmatter.title}}</h1>
        </div>
      </template>
      <template #doc-after>
      </template>
    </Layout>
</template>

<style>
.date{
  font-weight: 200;
  font-size: small;
}
.title {
}
</style>
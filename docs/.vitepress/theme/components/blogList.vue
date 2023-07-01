<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { ref } from "vue";
const { theme } = useData();
let postsAll = theme.value.posts || [];
// let posts = theme.value.posts;
let posts = ref([]);
let wartoscTestowa = "faesdf TEST";
</script>

<template>
  <div class="date">{{ postsAll.length }}</div>
  <div class="list">
    <a class="article" v-for="post in postsAll" :href="post.regularPath">
      <div class="[DEV]pth">PATH: {{ post.regularPath }}</div>
      <div class="date">DATA: {{ post.frontMatter.date }}</div>
      <div class="title">TITEL: {{ post.frontMatter.title }}</div>
      <!-- <div class="hl">REF: {{ post.frontMatter.title }}</div> -->
      <br />
    </a>
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
}
</style>

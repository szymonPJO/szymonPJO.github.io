<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { ref } from "vue";
import { PostDetails } from "./../utils";
const PAGE_SIZE = 3;
const { theme } = useData();
let dataPosts = theme.value.posts || [];
let postsCount = dataPosts.length;

let listPageCount = (postsCount + (PAGE_SIZE - 1)) / PAGE_SIZE;
listPageCount = Math.floor(listPageCount);
let listPageCurrent = ref(1);

// pagination
let pages: any[][] = new Array(listPageCount);
let _postsOnPage = PAGE_SIZE;
for (let i = 0; i < listPageCount; i++) {
  let listPage = new Array(PAGE_SIZE);

  if (((i + 1) * PAGE_SIZE) > postsCount) {
    _postsOnPage = postsCount % PAGE_SIZE;
  }
  for (let j = 0; j < _postsOnPage; j++) {
    listPage[j] = dataPosts[(i * PAGE_SIZE) + j];
  }
  pages[i] = listPage;
}

let pagePosts = ref<PostDetails[]>([]);

// click pagination
const go = (i) => {
  listPageCurrent.value = i;
  pagePosts.value = pages[listPageCurrent.value - 1].filter(Boolean);
};
go(1);

</script>

<template>
  <div class="flexContainer">
    <div class="cnter">
      <h1 class="titleBlog">Blog</h1>
      <div class="descriptionBlog" Blog>
        Wpisy o różnej tematyce lub udostępnienia treści, <br />
        które uważam za wartościowe
      </div>
      <div class="list">
        <a class="article" v-for="post in pagePosts" :href="post.regularPath">
          <div class="titleArticle">{{ post.frontMatter.title }}</div>
          <div class="date">{{ post.frontMatter.date }}</div>
          <div class="description">{{ post.frontMatter.description }}</div>
          <!-- <br /> -->
        </a>
      </div>
      <div class="pagination">
        <button class="left" v-if="listPageCurrent > 1" @click="go(listPageCurrent - 1)">
          Previous page
        </button>
        <div v-if="listPageCount > 1">{{ `${listPageCurrent}/${listPageCount}` }}</div>
        <button class="right" v-if="listPageCurrent < listPageCount" @click="go(listPageCurrent + 1)">
          Next page
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
div .flexContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cnter {
  width: 50%;
}

.titleBlog {
  margin: 30px;
  font-size: 2rem;
  text-align: center;
}

.descriptionBlog {
  size: 10px;
  font-weight: 300;
  text-align: center;
}

.article {
  /* text-align: start; */
  margin-top: 10px;
  border: 1px solid var(--vp-c-text-2);
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  min-height: 100px;
}

.titleArticle {
  font-size: 1.4em;
}

.description {
  /* font-size: 1em; */
  color: var(--vp-c-text-2);
  font-weight: 300;
}

.list {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pagination {
  /* Box model */
  position: relative;
  /* width: 85%; */
  max-width: 600px;
  margin: 20px auto;

  /* Flexbox */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Visual */
  /* background-color: black; */
}

.pagination button {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--vp-c-text-2);
  padding: 10px;
  background-color: rgba(127, 127, 127, 0.2);
}

.left {
  position: absolute;
  left: 0;
}

.right {
  position: absolute;
  right: 0;
}
</style>

<!-- .vitepress/theme/Layout.vue -->

<script>
export default {
  props: {
    data: {
      type: String,
      required: true,
    }
    }
}
</script>

<template>
  <h1>Custom Layout! "{{ data }}"</h1>

  <!-- this is where markdown content will be rendered -->
  <Content />
</template>
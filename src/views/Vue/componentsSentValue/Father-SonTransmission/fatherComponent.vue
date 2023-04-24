<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></BlogPost>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SonComponent from "@/views/Vue/componentsSentValue/Father-SonTransmission/sonComponent.vue";

// 父组件将 fontSize 传递给子组件
const postFontSize = ref(1);

const posts = [
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
];

const postsItem = ref(posts);
</script>

<style scoped></style>

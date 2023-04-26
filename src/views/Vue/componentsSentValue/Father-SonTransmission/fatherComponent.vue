<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <div style="width: 400px;height: 160px;margin: 0 auto">
      <h2 class="padding20">数据双向传递：</h2>
      <h3 class="padding20"> 1、父组件将字体大小传递给子组件 </h3>
      <h3 class="padding20"> 2、子组件将点击事件上传给父组件，父组件改变字体大小 </h3>
    </div>

    <son-component
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    >
    </son-component>

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
  { id: 3, title: "Why Vue is so fun" }
];

const postsItem = ref(posts);
</script>

<style scoped>
.padding20 {
    padding: 10px;
    text-align: left;
}
</style>

<template>
  <div :style="{fontsize:fontSize+ 'em'}">
    <son-component
      v-for="item in postsItem"
      :key="item.id"
      :title="item.title"
      @enlarge-text="fontSize +=0.1"
    ></son-component>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SonComponent from "@/Vue/componentsSentValue/Father-SonTransmission/sonComponent.vue";

// 父组件将 fontSize 传递给子组件
const fontSize = ref(1);

const posts = [
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" }
];

const postsItem = ref(posts);


</script>

<style scoped>

</style>

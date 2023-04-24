<template>
  <div class="wrapper">
    <sonComponent style="font-size: 30px" :count="count"></sonComponent>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import SonComponent from "@/views/Vue/componentsSentValue/father2SonDemo1/sonComponent.vue";

/**
 * 2秒后，子父组件数据改变，子组件发生相应变化
 */

const count = ref(0);

setTimeout(() => {
  count.value = 100;
}, 2000);
</script>

<style scoped></style>

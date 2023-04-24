<template>
  <son :count="count"></son>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Son from "@/views/Vue/组件之间传值/父>子 1/son.vue";

const count = ref(0);

setTimeout(() => {
  count.value = 100;
}, 2000);
</script>

<style scoped></style>

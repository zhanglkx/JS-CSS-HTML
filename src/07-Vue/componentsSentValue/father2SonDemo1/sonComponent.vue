<template>
  <div>
    <button>点击{{ count.count }}</button>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";

const count = defineProps(["count"]);

watchEffect(() => {
  console.log("props.count === ", count);
});
</script>

<style scoped></style>

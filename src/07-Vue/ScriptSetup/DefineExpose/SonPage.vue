<template>
  <div>
    <div>{{ num }}</div>
    <div>{{ msg }}</div>
    <div>---------------</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

function childFn() {
  console.log("我是子组件");
}

const msg = "Hello World";
const num = ref(0);
// 对外暴露出去内部的属性
defineExpose({ //
  msg,
  num,
  childFn
});
</script>

<style scoped>

</style>

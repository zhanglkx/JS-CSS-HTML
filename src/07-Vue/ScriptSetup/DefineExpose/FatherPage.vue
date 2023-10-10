<template>
  <div>
    <SonPage ref="val"></SonPage>
    <br>
    <div>{{ val.msg }}</div>
    <div>{{ val.num }}</div>
    <a-button size="large" type="primary" @click="handle">点击按钮</a-button>
  </div>
</template>


<script setup>
import SonPage from "@/07-Vue/ScriptSetup/DefineExpose/SonPage.vue";
import { onMounted, ref } from "vue";

// const val = ref(null); 注意，默认值不能为null
const val = ref(""); ///注意，默认值不能为null
// const val = ref(1); 1也可以

// onMounted(() => {
//   console.log(val.value);
// });

const handle = () => {
  console.log("handle");
  val.value.childFn();
};

// const handle = I.value.childFn;

function test() {
  console.log(val.value.msg); // Hello World
}

</script>
<style scoped>

</style>

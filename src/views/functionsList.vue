<template>
  <div class="wrapper">

    <router-link to="/Snake/subComponent">11</router-link>
    <router-view></router-view>

    <ul class="list">
      <li class="list_li" v-for="(item, index) in 100" :key="index">
        <a-button
          style="height: 100%; border-radius: 10px"
          block
          type="primary"
          @click="jump"
        >
          {{ item }}
        </a-button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const jump = () => {
  // router.push({ name: "subComponent" }); 命名路由方式
  router.push({ path: '/Snake/subComponent' });//编程导航方式
};
</script>

<style scoped>
.wrapper {
    width: 80%;
    margin: 0 auto;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    list-style: none;
}

.list .list_li {
    width: 200px;
    height: 90px;
    background: #4ba946;
    margin: 25px;
    border-radius: 20px;
}

.login-container {
    background-image: linear-gradient(to right, #4876ff, #4966ff);
    animation: hueRotate 10s infinite alternate;
}
</style>

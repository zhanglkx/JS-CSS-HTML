<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/functionsList">functionsList</router-link>
      |
      <router-link to="/metaLearn/1">动态路由</router-link>
    </nav>
    <div class="fixed-button">
      <a-button
        class="backStyle"
        @click="pageBack"
      >返回
      </a-button>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fixed-button {
  position: fixed;
  top: 30px;
  left: 30px;
}
</style>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
/**
 * 路由返回
 */
const pageBack = () => {
  router.back();
};


</script>

<template>
  <!--  为组件提供统一的全局化配置。-->
  <a-config-provider>
    <!--spin是loading-->
    <a-spin :spinning="spinning" tip="Loading...">
      <a-layout id="components-layout">
        <!--侧边栏-->
        <PageSider :collapsed="collapsed" />
        <!--右侧区域-->
        <a-layout>
          <!--头部视图-->
          <PageHeader :collapsed="collapsed" @toggle-collapsed="collapsed = !collapsed" />
          <!--面包蟹-->
          <BreadCrumb />
          <!--内容区域-->
          <a-layout-content :style="{ margin: '2px 16px', padding: '24px', background: '#fff', minHeight: '280px', }">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-spin>
  </a-config-provider>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import store from "./store";
import PageHeader from "./components/layout/PageHeader.vue";
import PageSider from "./components/layout/Sider/PageSider.vue";
import BreadCrumb from "@/components/layout/BreadCrumb.vue";

const router = useRouter();

const spinning = computed(() => {
  return store.state.spinning;
});

let collapsed = ref(false);

</script>

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

#components-layout {
  min-height: 100vh;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}

</style>


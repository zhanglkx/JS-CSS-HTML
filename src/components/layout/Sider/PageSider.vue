<template>
  <a-layout-sider
    breakpoint="lg"
    :collapsed-width="collapsedWidth"
    :trigger="null"
    :collapsed="collapsed"
    @breakpoint="onBreakpoint"
    class="sider"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline" v-model="selectedKeys">
      <template v-for="item in navs">
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="{ name: item.name}">
            <!--判断有没有icon，有则显示-->
            <span v-if="item.meta.icon" class="anticon"><i :class="item.meta.icon"></i></span>
            <span>{{ item.meta.title }}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" :collapsed="collapsed" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router";
import SubMenu from "./SubMenu";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PageSider",
  components: {
    SubMenu
  },
  props: {
    collapsed: Boolean
  },
  setup() {
    const navs = ref(routes);
    console.log(navs.value)
    let collapsedWidth = ref(80);
    const route = useRoute();
    let selectedKeys = ref([route.fullPath]);

    watch(
      () => route,
      (route) => {
        selectedKeys.value = [route.fullPath];
      },
      {
        immediate: true,
        deep: true
      }
    );

    const onBreakpoint = () => {
      if (window.innerWidth > 650) {
        collapsedWidth.value = 80;
      } else {
        collapsedWidth.value = 0;
      }
    };

    return { navs, collapsedWidth, selectedKeys, onBreakpoint };
  }
};
</script>

<style lang="scss">
.ffffffff {
  border-radius: 50%;
  background-color: red;
}

.sider {
  i.fa {
    font-size: 16px;
    position: relative;
    vertical-align: text-top;
  }
}
</style>

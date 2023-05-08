<template>
  <a-breadcrumb :style="{ padding: '24px', paddingBottom: '0', }">
    <template v-if="matched.length > 0">
      <a-breadcrumb-item v-for="item in matched" :key="item.path"><a href="javascript:;" @click="jumped(item.path)">
        {{ item.meta.title }}
      </a>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script>
import { watch, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "BreadCrumb",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      matched: route.matched
    });

    watch(
      () => route,//构建一个函数获取useRoute()
      (route) => {
        state.matched = route.matched;//监听变动之后的操作 获取路由的matched数组并显示到面包屑上
      },
      { //用来配置是否立即执行监听和深度变动
        immediate: true,
        deep: true
      }
    );

    const jumped = (path) => {
      router.push({
        path: path
      });
    };

    return { ...toRefs(state), jumped };
  }
};
</script>

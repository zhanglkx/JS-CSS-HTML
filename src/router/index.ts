import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/functionsList",
    name: "functionsList",
    meta: { title: "功能列表" },
    redirect: "/Snake/subComponent",
    component: () => import("../views/functionsList.vue"),
    children: [
      {
        path: "/Snake/subComponent",
        name: "subComponent",
        component: () => import("@/views/component/subComponent.vue")
      },
      {
        path: "/transmission/farther2Son",
        name: "farther2Son",
        component: () => import("@/views/Vue/componentsSentValue/Father-SonTransmission/fatherComponent.vue")
      },
      {
        path: "/transmission/farther2SonValue",
        name: "farther2SonValue",
        component: () => import("@/views/Vue/componentsSentValue/father2SonDemo1/fartherComponent.vue")
      },
      {
        path: "/Vue/mixinDirectory",
        name: "mixinDirectory",
        component: () => import("@/views/Vue/mixinDirectory/mixinLearn.vue")
      },
      {
        path: "/component/charts/echartsMinimizeDemo",
        name: "echartsMinimizeDemo",
        component: () => import("@/views/component/charts/lineChart/basicLineChart.vue")
      }
    ]
  },
  {
    path: "/metaLearn/:postId",
    name: "metaLearn",
    component: () => import("@/views/V-router/metaLearn.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // 匹配当前路由的 RouterLink 默认的 CSS class。如果没有提供，则会使用
  linkActiveClass: "router-active",
  routes
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
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
    component: () => import("../views/functionsList.vue"),
    children: [
      {
        path: "/贪吃蛇/subComponent",
        name: "subComponent",
        component: () => import("@/views/01demos/贪吃蛇/subRouter/subComponent.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // 匹配当前路由的 RouterLink 默认的 CSS class。如果没有提供，则会使用
  linkActiveClass: "router-active",
  routes
});

export default router;

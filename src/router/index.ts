import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "关于" },
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
        meta: { title: "子功能" },
        component: () => import("@/views/component/subComponent.vue")
      },
      {
        path: "/transmission/farther2Son",
        name: "farther2Son",
        meta: { title: "父子传值" },
        component: () => import("@/07-Vue/componentsSentValue/Father-SonTransmission/fatherComponent.vue")
      },
      {
        path: "/transmission/farther2SonValue",
        name: "farther2SonValue",
        meta: { title: "父子传值" },
        component: () => import("@/07-Vue/componentsSentValue/father2SonDemo1/fartherComponent.vue")
      },
      {
        path: "/Vue/mixinDirectory",
        name: "mixinDirectory",
        meta: { title: "mixin" },
        component: () => import("@/07-Vue/mixinDirectory/mixinLearn.vue")
      },
      {
        path: "/component/charts/echartsMinimizeDemo",
        name: "echartsMinimizeDemo",
        meta: { title: "echartsDemo" },
        component: () => import("@/views/pages/charts/lineChart/basicLineChart.vue")
      },
      {
        path: "/demos/CSSEffect/borderEffect",
        name: "borderEffect",
        meta: { title: "CSS特效" },
        component: () => import("@/views/pages/borderEffectInCSS/borderEffect.vue")
      },
      {
        path: "/Vue/State/Watch",
        name: "watchFun",
        meta: { title: "watch练习" },
        component: () => import("@/views/pages/watch/WatchFun.vue")
      },
      {
        path: "/Vue/State/Computed",
        name: "Computed",
        meta: { title: "Computed练习" },
        component: () => import("@/views/pages/computed/ComputedLearn.vue")
      },
      {
        path: "/demos/CSSEffect/WaterDropLogin",
        name: "WaterDropLogin2",
        meta: { title: "水滴登录界面" },
        component: () => import("@/views/pages/WaterDropLogin/waterDropLogin.vue")
      },
      {
        path: "/demos/JavaScript/LyricsScroll",
        name: "LyricsScroll",
        meta: { title: "歌词滚动" },
        component: () => import("@/views/pages/LyricsScroll/LyricsScroll.vue")
      }
    ]
  },
  // {
  //   path: "/metaLearn/:postId",
  //   name: "metaLearn",
  //   meta: { title: "metaLearn" },
  //   component: () => import("@/views/V-router/metaLearn.vue")
  // }
];


 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // 匹配当前路由的 RouterLink 默认的 CSS class。如果没有提供，则会使用
  linkActiveClass: "router-active",
  routes
});

 

export default router;

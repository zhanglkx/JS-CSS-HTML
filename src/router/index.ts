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
    component: () =>
      import("../views/AboutView.vue")
  },

  {
    path: "/functionsList",
    name: "functionsList",
    component: () =>
      import("../views/functionsList.vue"),
    children: [
      {
        path: "/mixin",
        name: "mixin",
        component: () =>
          import("../Vue/mixinDirectory/mixinLearn.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

// 静态路由表
export const constantRoutes = [{
  path: "/login",
  name: "login",
  component: () => import("../views/login/login.vue")
}
];

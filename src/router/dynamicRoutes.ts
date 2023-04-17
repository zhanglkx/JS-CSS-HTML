import MContent from "@/components/MContent.vue";

/**
 * 动态路由配置
 */
export const dynamicRoutes = [{
  path: "system",
  name: "system",
  component: MContent,
  meta: { title: "系统设置" },
  children: [
    {
      path: "userInfo",
      name: "userInfo",
      component: () => import("../views/system/userInfo.vue"),
      meta: { title: "用户信息设置" }
    },
    {
      path: "roleInfo",
      name: "roleInfo",
      component: () => import("../views/system/roleInfo.vue"),
      meta: { title: "角色信息设置" }
    }
  ]
},
  {
    path: "/authSettings",
    name: "authSettings",
    component: MContent,
    meta: { title: "权限设置" },
    children: [
      {
        path: "roleAuth",
        name: "roleAuth",
        component: () => import("../views/authSettings/roleAuth.vue"),
        meta: { title: "角色权限设置" }
      }
    ]
  },
  {
    path: "/article",
    name: "article",
    component: MContent,
    meta: { title: "文章管理" },
    children: [
      {
        path: "article",
        name: "article",
        component: () => import("../views/article/article.vue"),
        meta: { title: "文章分类管理" }
      },
      {
        path: "articleContent",
        name: "articleContent",
        component: () => import("../views/article/articleContent.vue"),
        meta: { title: "文章内容管理" }
      }]
  }];

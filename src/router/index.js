import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: {title: '发发发'}
    },
    {
        path: '/meta',
        name: 'meta',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/V-router/metaLearn.vue'),
        meta: {
            title: '功能授权',
            keepAlive: false,
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

/* 第二步：在路由守卫router.beforeEach中设置如下代码 */
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    console.log(from, next);
    if (to.meta.title) {
        document.title = to.meta.title
    }
})

export default router

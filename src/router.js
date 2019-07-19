import Vue from "vue";
import Router from "vue-router";
import dashboard from "@/views/dashboard";
import iView from 'iview';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "主页",
            component: dashboard
        },
        {
            path: "/article",
            name: "文章",
            component: () => import("@/views/article"),
        },
        {
            path: '/article/info',
            name: "查看",
            component: () => import("@/views/article/Info")
        },
        {
            path: '/archive',
            name: "归档",
            component: () => import("@/views/archive")
        },
        {
            path: '/material',
            name: "资料",
            component: () => import("@/views/material")
        },
        {
            path: '/about',
            name: "关于",
            component: () => import("@/views/about")
        },
        {
            // 会匹配所有路径
            path: '*',
            component: () => import("@/components/error/404.vue")
        }
    ]
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});

export default router

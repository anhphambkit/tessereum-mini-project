import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "List User",
      // route level code-splitting
      // this generates a separate chunk (articles.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
      import(/* webpackChunkName: "User List" */ "@/views/user/index.vue")
    },
    {
      path: "/user/:id",
      name: "User Detail",
      // route level code-splitting
      // this generates a separate chunk (articles.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
      import(/* webpackChunkName: "User Detail" */ "@/views/user/detail.vue")
    },
    {
      path: "/user/create",
      name: "Create User",
      // route level code-splitting
      // this generates a separate chunk (articles.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
      import(/* webpackChunkName: "Create User" */ "@/views/user/create.vue")
    },
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
});

export default router;

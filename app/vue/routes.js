export default [
    {
        path: "",
        name: "home",
        component: () => import("App/modules/home/views/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("App/modules/auth/layouts/Login.vue")
    }
]
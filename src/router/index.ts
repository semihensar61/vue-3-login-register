import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/success-register",
      name: "SuccessRegister",
      component: () => import("../views/SuccessRegisterView.vue")
    },
    {
      path: "/success-login",
      name: "SuccessLogin",
      component: () => import("../views/SuccessLoginView.vue")
    },
  ],
});

export default router;

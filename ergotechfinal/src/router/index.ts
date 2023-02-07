import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../components/Home.vue"
import RelatorioRouter from "@/components/RelatorioView.vue"
import LoginViewVue from "@/views/LoginView.vue";

/* import LoginView from "@/views/LoginView.vue"
import SignUpView from "@/views/SignUpView.vue" */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      component: RelatorioRouter,
    },
    {
      path: "/login",
      name: "login",
      component: LoginViewVue,
    }
  ],
});

export default router;
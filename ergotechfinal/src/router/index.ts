import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../components/Home.vue"
import RelatorioRouter from "@/components/RelatorioView.vue"
import LoginViewVue from "@/views/LoginView.vue";
import MainAppVue from "@/MainApp.vue";

/* import LoginView from "@/views/LoginView.vue"
import SignUpView from "@/views/SignUpView.vue" */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: ()=>import ("@/components/Home.vue"),
        rightSidebar: ()=>import ("@/MainApp.vue"),
        leftSidebar: ()=>import ("@/MenuApp.vue")
      }
    },
    {
      path: "/about",
      name: "about",
      component: ()=> import ("@/components/RelatorioView.vue")
    },
    {
      path: "/login",
      name: "login",
      component: ()=>import ("@/views/LoginView.vue")
    }
  ],
});

export default router;
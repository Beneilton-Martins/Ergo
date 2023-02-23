import { createRouter, createWebHistory } from "vue-router"
import LoginVue from "@/views/Login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: ()=> import("@/views/HomeView.vue"),
        rightSidebar: ()=> import("@/RightSidebar.vue"),
        leftSidebar: ()=> import("@/MenuApp.vue")
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginVue
    },
    {
      path: "/register",
      name: "register",
      component: ()=>import ("@/views/SignUpView.vue")
    }
  ],
});

export default router;
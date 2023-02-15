import { createRouter, createWebHistory } from "vue-router"
import HomeViewVue from "../components/Home.vue"
import RightSideBarVue from "@/RightSidebar.vue"
import LeftSideBarVue from "@/MenuApp.vue"

/* import LoginView from "@/views/LoginView.vue"
import SignUpView from "@/views/SignUpView.vue" */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeViewVue,
        rightSidebar: RightSideBarVue,
        leftSidebar: LeftSideBarVue
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
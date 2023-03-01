import { createRouter, createWebHistory } from "vue-router"
import LoginVue from "@/views/Login.vue"
import { component } from "v-viewer";
import SidebarVue from "@/components/Upload/Sidebar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginVue
    },
    {
      path: "/ergotech",
      name: "ergotech",
      components: {
        default: () => import("@/views/HomeView.vue"),
        rightSidebar: () => import("@/RightSidebar.vue"),
        leftSidebar: () => import("@/MenuApp.vue")
      }
    },
    {
      path: "/sidebar",
      name: "sidebar",
      component: SidebarVue
    },
  ],
});

export default router;
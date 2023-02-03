import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/main.css";

import MainApp from "./MainApp.vue";
import PlayerApp from "./PlayerApp.vue";

import router from "./router";

import VueViewer from "v-viewer";
import 'viewerjs/dist/viewer.css'

import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
const mainapp = createApp(MainApp);
mainapp.use(VueViewer)
mainapp.use(vueAwesomeSidebar)
mainapp.use(createPinia());
mainapp.use(router);
mainapp.mount("#main-app");

const playerapp = createApp(PlayerApp);
playerapp.use(VueViewer)
playerapp.use(vueAwesomeSidebar)
playerapp.use(createPinia());
playerapp.use(router);
playerapp.mount("#player-app");



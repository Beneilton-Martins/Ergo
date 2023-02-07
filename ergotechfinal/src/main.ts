import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import MainApp from "./MainApp.vue";
import PlayerApp from "./PlayerApp.vue";

import router from "./router";

import VueViewer from "v-viewer";
import 'viewerjs/dist/viewer.css'

const mainapp = createApp(MainApp);
mainapp.use(createPinia());
mainapp.use(router);
mainapp.mount("#main-app");

const playerapp = createApp(PlayerApp);
playerapp.use(VueViewer)
playerapp.use(createPinia());
playerapp.mount("#player-app");



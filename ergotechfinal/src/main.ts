import "./assets/main.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'

import MainApp from "./MainApp.vue"
import PlayerApp from "./PlayerApp.vue"
import MenuApp from "./MenuApp.vue"

import router from "./router"

import VueViewer from "v-viewer"
import 'viewerjs/dist/viewer.css'

const mainapp = createApp(MainApp)
mainapp.use(createPinia())
mainapp.use(router)
mainapp.mount("#main-app")

// Aplicação que contém o viewerjs e a timeline
const playerapp = createApp(PlayerApp)
playerapp.use(VueViewer)
playerapp.use(createPinia())
playerapp.use(router)
playerapp.mount("#player-app")

const menuapp = createApp(MenuApp)
menuapp.use(createPinia())
menuapp.use(router)
menuapp.mount("#menu-app")
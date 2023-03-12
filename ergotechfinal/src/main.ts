import "./assets/main.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { defineStore } from "pinia"
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css"

import PlayerApp from "./PlayerApp.vue"

import router from "./router"

import VueViewer from "v-viewer"
import 'viewerjs/dist/viewer.css'

export const loginInform = defineStore("main", {
    state: () => ({
        dados: {

        }
    }),
    actions: {
        setDados(valor: any) {
            this.dados = valor
        }
    }
})

// Aplicação que contém o viewerjs e a timeline
const playerapp = createApp(PlayerApp)
playerapp.use(VueViewer)
playerapp.use(createPinia())
playerapp.use(router)
playerapp.mount("#player-app")
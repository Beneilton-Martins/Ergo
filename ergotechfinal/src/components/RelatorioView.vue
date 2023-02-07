<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from "./state.m.js"
export default {
  data() {
    return {
      link: "RelatorioBracos.png",
      link2: "RelatorioDorso.png",
      link3: "RelatorioPernas.png"
    }
  },
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }, methods: {
    getImageURL(nome) {
      const new_url = new URL(`/relatorios/outputOwasAtv2Tarefa1/${nome}`, import.meta.url).href
      return new_url
    }
  }
}
</script>

<template>
  <div>
    <router-link to="/">
      <button class="submit">Voltar</button>
    </router-link>
  </div>
  <div class="line">
    <div class="imgs" style="width 40%">
      <img :src="getImageURL(link)" width="500" height="400" />
      <img :src="getImageURL(link2)" width="500" height="400" />

    </div>
    <div>
      <img class="kkkk" :src="getImageURL(link3)" width="520" height="420" />
    </div>
  </div>
</template>

<style scoped>
.kkkk {
  align-items: center;
}

.line {
  height: 90%;
  align-items: center;
}

.imgs {
  display: inline-flex;
}

.submit {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}
</style>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import VueViewer, { component } from "v-viewer"
import type  Viewer  from "viewerjs"

import MovimentButton from "./Buttons/MovimentButton.vue"
import CargaButton from "./Buttons/CargaButton.vue"
import BracoButton2 from "./Buttons/BracoButton.vue"
import DorsoButton2 from "./Buttons/DorsoButton.vue"
import PernaButton2 from "./Buttons/PernaButton.vue"

const sourceImages = ref([])
const base = Math.floor(Math.random() * 60) + 10

VueViewer.setDefaults({
  zIndexInline: 0,
})

export default defineComponent({
  name: "Home",
  el: "#player-app",
  components: {
    Viewer: component,
    MovimentButton,
    CargaButton,
    BracoButton2,
    DorsoButton2,
    PernaButton2,
},
  setup() {
    let $viewer: Viewer
    const state = reactive({
      form: {
        view: 2,
        zoom: -0.1,
        zoomTo: 0.8,
        rotate: 90,
        rotateTo: 180,
        scaleX: 1,
        scaleY: 1,
      },
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        colors: ["#FFB200"],
      },
      options: {
        inline: true,
        navbar: true,
        toolbar: {
          prev: function() {
            $viewer.prev(true);
          },

          play: true,

          next: function() {
            $viewer.next(true);
          },
        },
        button: false,
        title: false,
        zoomable: false,
        zIndexInline:0,
        movable: false,
        transition: false,
        interval: 100,
        /*
        tooltip: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        transition: false,
        fullscreen: false,
        keyboard: false, 
        */
        url: 'data-source',
      },
      atividade: '',
      Tinicial: 1,
      Tfinal: 600,
      images: sourceImages,
      Atividade: "",
      tempoiniTi:1,
      tempofim:10,
      selected: '',
      selected2: '',
      series: [{
          name: 'Peso',
          data: generateData(sourceImages.value.length, {
            min: 0,
            max: 90
          })
        }
      ],
    })
    function inited(viewer: Viewer) {
      $viewer = viewer
    }
    function atualizarImagens(this: any){
      const newsourceImages =[]

      if (this.Tinicial !== undefined){
        for (let i = parseInt(this.Tinicial); i < parseInt(this.Tfinal); i = i + 15) {
          newsourceImages.push({
            thumbnail: `ImageCapture${i}.png`,
            source: `ImageCapture${i}.png`,
            alt: `Image: ${base + i}`,
          })
        }

      sourceImages.value = newsourceImages
      console.log(sourceImages.value.length)
      }
    }
    function atualizarSeries(this:any){
      const newserie = [{
          name: 'Peso',
          data: generateData(sourceImages.value.length, {
            min: 0,
            max: 90
          })
        }

      ]
      this.series.value = newserie
      return newserie
    }
    function generateData(count: number, yrange: { max: number; min: number; }) {
      console.log(count)
      var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
    function getImageURL(nome: any) {
      const new_url = new URL(`/Data_Images/${nome}`, import.meta.url).href
      return new_url
    }
    function remove() {
      state.images.pop()
    }
    function view() {
      if (state.form.view >= 0 && state.form.view < state.images.length)
        $viewer.view(state.form.view)
    }
    function zoom(value: number) {
      $viewer.zoom(value || state.form.zoom)
    }
    function zoomTo() {
      $viewer.zoomTo(state.form.zoomTo)
    }
    function rotate(value: number) {
      $viewer.rotate(value || state.form.rotate)
    }
    function rotateTo() {
      $viewer.rotateTo(state.form.rotateTo)
    }
    function scaleX(value: number) {
      if (value) {
        $viewer.scaleX(value)
      }
      else {
        state.form.scaleX = -state.form.scaleX
        $viewer.scaleX(state.form.scaleX)
      }
    }
    function scaleY(value: number) {
      if (value) {
        $viewer.scaleY(value)
      }
      else {
        state.form.scaleY = -state.form.scaleY
        $viewer.scaleY(state.form.scaleY)
      }
    }
    function move(x: number, y: number) {
      $viewer.move(x, y)
    }
    function prev() {
      $viewer.prev()
    }
    function next() {
      $viewer.next()
    }
    function play() {
      $viewer.play()
    }
    function stop() {
      $viewer.stop()
    }
    function show() {
      $viewer.show()
    }
    function full() {
      $viewer.full()
    }
    function tooltip() {
      $viewer.tooltip()
    }
    function reset() {
      $viewer.reset()
    }
    function toggleInline(inline: boolean) {
      state.options.inline = inline
    }
    return {
      ...toRefs(state),
      inited,
      remove,
      view,
      zoom,
      zoomTo,
      rotate,
      rotateTo,
      scaleX,
      scaleY,
      move,
      prev,
      next,
      play,
      stop,
      show,
      full,
      tooltip,
      reset,
      toggleInline,
      getImageURL,
      atualizarImagens,
      generateData,
      atualizarSeries,
    }
  },
  computed: {
    teste: () => {
      const count = sourceImages.value.length;
      const yrange = {
        min: 0,
        max: 900
      }
      console.log(count)
      var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
  },
  created(){
    if (this.Tinicial !== undefined){
      for (let i = this.Tinicial; i < this.Tfinal; i = i + 15) {
        sourceImages.value.push<[]>(
        {
          thumbnail: `ImageCapture${i}.png`,
          source: `ImageCapture${i}.png`,
          alt: `Image: ${base + i}`,
        })
      }
    }
    console.log(sourceImages.value.length)
  },
})
</script>

<template>
  <div class="linha">
    <div class="resize">
      <div class="viewer-wrapper">
        <viewer ref="viewer" 
          :options="options" 
          :images="images" 
          rebuild
          class="viewer"
          @inited="inited">
          <template #default="scope">
            <div v-for="{ source, thumbnail, alt} in scope.images" 
              key="source" class="image-wrapper">
              <img class="image" 
                :src="getImageURL(thumbnail)" 
                :data-source="getImageURL(source)"
                :alt="alt"
              >
            </div>
          </template>
        </viewer>
    </div>
    </div>
    <div class="coluna1">
  <!--<div class="field">
        <div id="div-input" class="methods">
          Tempo:
          <input placeholder="Digite o tempo inical (s)" 
            v-model="Tinicial" 
            class="input" 
            type="text"
            style="width: 210px"
          >
          <input placeholder="Digite o tempo final (s)" 
            v-model="Tfinal" 
            class="input" 
            type="text"
            style="width: 210px"
          >
          <button class="submit" @click="atualizarImagens()"> Atualizar</button>
        </div>
      </div> --> 
        <div class="columns">
          <button class="movimento">Movimento</button>
          <div class="column" >
            <MovimentButton v-for="(i, idx) in images" :image="idx*15"/>
          </div>
        </div>
        <div class="columns">
          <button>Carga</button>
          <div class="column" >
            <CargaButton v-for="(i, idx) in images" :image="idx"/>
         </div>
        </div>
        <div class="columns">
          <button>Braco</button>
          <div class="column" >
            <BracoButton2 v-for="(i, idx) in images" :image="idx"/>
          </div>
        </div>
        <div class="columns">
          <button>Dorso</button>
          <div class="column" >
            <DorsoButton2 v-for="(i, idx) in images" :image="idx"/>
          </div>
        </div>
        <div class="columns">
          <button>Perna</button>
          <div class="column" >
          <PernaButton2 v-for="(i, idx) in images" :image="idx"/>
          </div>
        </div>
    </div>
    <div class="coluna2">
    </div>
  </div>
</template>

<style scoped lang="scss" >
.resize {
  display: flex;
  width: 100%;
  height: transform();
  align-items: center;
  border-radius: 20px;
  overflow:hidden;
  box-sizing: border-box;
  margin-bottom: 5px;
  /* resize: vertical; */
}
.viewer-wrapper { //controla o viewer no geral
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 20px;
  overflow:hidden;
  background-color: #ffffff00;
  box-sizing: border-box;
  margin-left: 40px;
  margin-right: 40px;
  /* box-shadow: 0px 0px 0px 1px green; */
}
.viewer {
  border-radius: 20px;
  align-items: center;
  align-content: center;
  display: flex;
  height: 60vh;
  background-color:#ffffff00;
  box-sizing: border-box;
  overflow: hidden;
  .images {
    display: flex;
  }
  .image {
    display: none;
  }
}
.linha  {
  display: flex;
  flex-flow: row wrap;
  height: 100%;
}
.coluna1  { 
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  background-color: #cccccc;
  border-radius: 20px;
  text-align: start;
  overflow-x: scroll;
  box-sizing: border-box;
  border-left: solid 40px;
  border-right: solid 40px;
  border-color: #cccccc;
  /* box-shadow: 0px 0px 0px 1px green; */
}
.coluna2  {
  position: absolute;
  float: right;
  overflow: hidden;
}
.field  {
  text-align: center;
}
.column {
  display: inline-flex;
  width: 100%;
}

button {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

</style>
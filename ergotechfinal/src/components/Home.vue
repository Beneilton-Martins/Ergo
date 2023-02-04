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
          <p>Movimento</p>
          <div class="column" >
            <MovimentButton v-for="(i, idx) in images" :image="idx*15"/>
          </div>
        </div>
        <div class="columns">
          <p>Carga</p>
          <div class="column" >
            <CargaButton v-for="(i, idx) in images" :image="idx"/>
         </div>
        </div>
        <div class="columns">
          <p>Braco</p>
          <div class="column" >
            <BracoButton2 v-for="(i, idx) in images" :image="idx"/>
          </div>
        </div>
        <div class="columns">
          <p>Dorso</p>
          <div class="column" >
            <DorsoButton2 v-for="(i, idx) in images" :image="idx"/>
          </div>
        </div>
        <div class="columns">
          <p>Perna</p>
          <div class="column" >
          <PernaButton2 v-for="(i, idx) in images" :image="idx"/>
          </div>
        </div>
    </div>
    <div class="coluna2">
      <!-- <router-link to="/about"> 
        <button class="submit">RELATORIO</button> 
      </router-link> -->
      <!-- <div class="legendas"> 
        <div>
          <h1>Legendas</h1>
          <hr/>
          <br/>
          <div class="pai">
              <p>Movimento</p>
              <div><button style='background-color:rgb(1,40,146)'>Sem Movimento</button></div>
              <div><button style='background-color:rgb(225,165,25)'>Com Movimento</button></div>
          </div>
          <br/>
          <div class="pai">
              <p>Carga</p>
              <div><button style='background-color:rgb(1,40,146)'>10kg &lt; Carga &lt; 20kg</button></div>
              <div><button style='background-color:rgb(225,165,25)'>Carga &lt; 10kg</button></div>
              <div><button style='background-color:rgb(195,189,55)'>Carga > 20kg</button></div>
          </div>
          <br/>
          <div class="pai">
              <p>Bracos</p>
              <div><button style='background-color:rgb(1,40,146)'>Nenhum Braço Levantado </button></div>
              <div><button style='background-color:rgb(225,165,25)'>Um Braço Levantado</button></div>
              <div><button style='background-color:rgb(195,189,55)'>Dois Braços Levantados</button></div>
          </div>
          <br/>
          <div class="pai">
            <p>Dorso</p>
            <div><button style='background-color:rgb(1,40,146)'>Dorso Reto</button></div>
            <div><button style='background-color:rgb(225,165,25)'>Dorso Inclinado</button></div>
            <div><button style='background-color:rgb(195,189,55)'>Dorso Reto e Torcido</button></div>
            <div><button style='background-color:rgb(195,55,185)'>Dorso Inclinado e Torcido </button></div>
          </div>
          <br/>
          <div class="pai">
            <p>Pernas</p>
            <div><button style='background-color:rgb(1,40,146)'>Duas Pernas Retas</button></div>
            <div><button style='background-color:rgb(225,165,25)'>Uma Perna Reta</button></div>
            <div><button style='background-color:rgb(195,189,55)'>Duas Pernas Flexionadas</button></div>
            <div><button style='background-color:rgb(195,55,185)'>Uma Perna Flexionada </button></div>
            <div><button style='background-color:rgb(195,169,255)'>Uma Perna Ajoelhada</button></div>
            <div><button style='background-color:rgb(195,117,55)'>Em Movimento</button></div>
            <div><button style='background-color:rgb(1,146,174)'>Duas Pernas Suspensas</button></div>
          </div>
          <br/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss" >
.viewer-wrapper {
  display: flex;
  width: 100%;
  height: 50vh;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
}
.viewer {
  border-radius: 20px;
  align-items: center;
  align-content: center;
  display: flex;
  height: 100vh;
  background: rgb(23, 23, 23);
  .images {
    display: flex;
    border-radius: 20px;
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
  justify-content: space-evenly;
  background-color: rgba(58, 58, 58);
  border-radius: 20px;
  text-align: center;
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
  overflow-x: scroll;
  width: 100%;
}
.div-input  {
  text-align: center;
}
.input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
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
.legendas {
  right: 0px;
  background-color: rgb(255, 255, 255);
  width: 280px;
  height: 100%;
  padding: 25px;
  border: 1px solid rgb(218, 218, 218);
  // margin: 25px;
  position: fixed;
  top: 1px;
  bottom: 1px;
}
.pai>div>button {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
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
</style>
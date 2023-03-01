<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { component } from "v-viewer"
import type Viewer from "viewerjs"

import MovimentButton from "./Buttons/MovimentButton.vue"
import CargaButton from "./Buttons/CargaButton.vue"
import BracoButton2 from "./Buttons/BracoButton.vue"
import DorsoButton2 from "./Buttons/DorsoButton.vue"
import PernaButton2 from "./Buttons/PernaButton.vue"

const sourceImages = ref([])
const base = Math.floor(Math.random() * 60) + 10
const frameTimes = 2
const imgsValue = 50
/* const frameTimes2 = 15 */

export default defineComponent({
  props: {
    posturas: String,
    imagens: String
  },
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
          prev: function () {
            $viewer.prev(true);
          },

          play: true,

          next: function () {
            $viewer.next(true);
          },
        },
        button: false,
        title: false,
        zoomable: false,
        zIndexInline: 0,
        movable: false,
        transition: false,
        interval: 50,
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
      Tfinal: imgsValue,
      images: sourceImages,
      Atividade: "",
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
    function atualizarImagens(this: any) {
      const newsourceImages = []
      if (this.Tinicial !== undefined) {
        for (let i = parseInt(this.Tinicial); i < parseInt(this.Tfinal); i = i + frameTimes) {
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
    function atualizarSeries(this: any) {
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
  created() {
    if (this.Tinicial !== undefined) {
      for (let i = this.Tinicial; i < this.Tfinal; i = i + frameTimes) {
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
  <div class="row">
    <div class="resize">
      <div class="viewer-wrapper">
        <viewer ref="viewer" :options="options" :images="images" rebuild class="viewer" @inited="inited">
          <template #default="scope">
            <div v-for="{ source, thumbnail, alt } in scope.images" key="source" class="image-wrapper">
              <img class="image" :src="getImageURL(thumbnail)" :data-source="getImageURL(source)" :alt="alt">
            </div>
          </template>
        </viewer>
      </div>
    </div>
    <div class="container-columns">
      <div class="column-two">
        <div class="columns">
          <div class="column">
            <MovimentButton v-for="(i, idx) in images" :image="(idx + 1) * 15" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <CargaButton v-for="(i, idx) in images" :image="idx" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <BracoButton2 v-for="(i, idx) in images" :image="idx" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <DorsoButton2 v-for="(i, idx) in images" :image="idx" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <PernaButton2 v-for="(i, idx) in images" :image="idx" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
}

.resize {
  margin-top: 10px;
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100% - 180.35px);
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  border-color: #000000;
}

.viewer-wrapper {
  //controla o viewer no geral
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 40px;
  margin-right: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.viewer {
  border-radius: 20px;
  align-items: center;
  display: flex;
  height: 70vh;
  background: #eff8ff;
  box-sizing: border-box;
  overflow: hidden;

  .images {
    display: flex;
  }

  .image {
    display: none;
  }
}

.row {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  height: 100%;
  align-content: space-between;
  // justify-content: center;
  align-items: stretch;
  background-color: #ffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);

}

.container-columns {
  display: grid;
  align-content: stretch;
  min-height: 170.34px;
  background-color: #ffffff;

}

.column-two {
  display: flex;
  max-height: 170.34px;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  background: #ffffff;
  text-align: start;
  overflow-x: scroll;
  box-sizing: border-box;
  border-top: solid 10px;
  border-bottom: solid 10px;
  border-left: solid 40px;
  border-right: solid 40px;
  border-color: #ffffff;
  position: relative;
  justify-content: space-between;
}

.field {
  text-align: center;
}

.column {
  display: inline-flex;
  width: 100%;
  user-select: none;
}

button {
  font-weight: normal;
  font-size: 15px;
  color: #ffff;
  background-color: #0071bd;
  border: solid #0071bd 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  transition: 419ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: default;
  user-select: none;
}

.time-field {
  display: flex;
  margin-bottom: 0px;
}

h3.time {
  margin: 0;
}
</style>
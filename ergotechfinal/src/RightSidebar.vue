<script setup lang="ts">
import SubtitleButtons from "./components/Buttons/SubtitleButtons.vue"
import { ref } from "vue"

let Tinicial = ref("1")
let Tfinal = ref("50")

const spacer = "."
</script>

<template>
  <div class="time-field">
    <div class="div-input">
      <button class="time-corp">
        <h3 class="time"> Tempo </h3>
      </button>
      <input 
        placeholder="Digite o tempo inical (s)" 
        v-model="Tinicial"
        class="input" 
        type="text" 
        style="width: 210px"
      >
      <input 
        placeholder="Digite o tempo final (s)" 
        v-model="Tfinal" 
        class="input" 
        type="text" 
        style="width: 210px"
      >
    </div>
    <div class="buttons-flex">
      <button 
        class="submit-button" 
        @click="atualizarImagens()"> Atualizar 
      </button>
      <button 
        class="submit-button" 
        @click="atualizarImages()"> Relatório 
      </button>
    </div>
  </div>
  <div class="main-subtitles-div">
    <h1>Legendas</h1>
    <div class="subtitles">
      <div class="dropdown">
        <button>Deslocamento</button>
        <div class="dropdown-content">
          <SubtitleButtons :color="'#012892'" :subtitle="spacer" />
          <button class="text-subtitle"> Sem Deslocamento </button>
          <br>
          <SubtitleButtons :color="'#E1A519'" :subtitle="spacer" />
          <button class="text-subtitle"> Em Deslocamento </button>
          <br>
        </div>
      </div>
      <div class="dropdown">
        <button>Carga</button>
        <div class="dropdown-content">
          <SubtitleButtons :color="'#012892'" :subtitle="spacer" />
          <button class="text-subtitle"> 10kg &lt; Carga &lt; 20kg </button>
          <br>
          <SubtitleButtons :color="'#E1A519'" :subtitle="spacer" />
          <button class="text-subtitle"> Carga &lt; 10kg </button>
          <br>
          <SubtitleButtons :color="'#C3C637'" :subtitle="spacer" />
          <button class="text-subtitle"> Carga > 20kg </button>
          <br>
        </div>
      </div>
      <div class="dropdown">
        <button>Braços</button>
        <div class="dropdown-content">
          <SubtitleButtons :color="'#012892'" :subtitle="spacer" />
          <button class="text-subtitle"> Nenhum Braço Levantado </button>
          <br>
          <SubtitleButtons :color="'#E1A519'" :subtitle="spacer" />
          <button class="text-subtitle"> Um Braço Levantado </button>
          <br>
          <SubtitleButtons :color="'#C3C637'" :subtitle="spacer" />
          <button class="text-subtitle"> Dois Braços Levantados </button>
          <br>
        </div>
      </div>
      <div class="dropdown">
        <button>Dorso</button>
        <div class="dropdown-content">
          <SubtitleButtons :color="'#012892'" :subtitle="spacer" />
          <button class="text-subtitle"> Dorso Reto </button>
          <br>
          <SubtitleButtons :color="'#E1A519'" :subtitle="spacer" />
          <button class="text-subtitle"> Dorso Inclinado </button>
          <br>
          <SubtitleButtons :color="'#C3C637'" :subtitle="spacer" />
          <button class="text-subtitle"> Dorso Reto e Torcido </button>
          <br>
          <SubtitleButtons :color="'#C337B9'" :subtitle="spacer" />
          <button class="text-subtitle"> Dorso Inclinado e Torcido </button>
          <br>
        </div>
      </div>
      <div class="dropdown">
        <button>Pernas</button>
        <div class="dropdown-content">
          <SubtitleButtons :color="'#012892'" :subtitle="spacer" />
          <button class="text-subtitle"> Duas Pernas Retas </button>
          <br>
          <SubtitleButtons :color="'#E1A519'" :subtitle="spacer" />
          <button class="text-subtitle"> Uma Perna Reta </button>
          <br>
          <SubtitleButtons :color="'#C3C637'" :subtitle="spacer" />
          <button class="text-subtitle"> Duas Pernas Flexionadas </button>
          <br>
          <SubtitleButtons :color="'#C337B9'" :subtitle="spacer" />
          <button class="text-subtitle"> Uma Perna Flexionada </button>
          <br>
          <SubtitleButtons :color="'#C3A9FF'" :subtitle="spacer" />
          <button class="text-subtitle"> Uma Perna Ajoelhada </button>
          <br>
          <SubtitleButtons :color="'#0192AE'" :subtitle="spacer" />
          <button class="text-subtitle"> Duas Pernas Suspensas </button>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.time-corp {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 5px;
  padding-top: 5px;
  margin: 0px -100px;
  margin-top: -7px;
  background-color: #005994;
  border: none;
  overflow: hidden;
  text-transform: uppercase;
  user-select: none;
}

.time {
  color: white;
  font-weight: bold;
  user-select: none;
  padding: 0px;
  margin: 0px;
}

.text-subtitle {
  background-color: white;
  font-size: 15px;
  margin-left: 3px;
  padding-bottom: 3px;
  padding-top: 3px;
  color: #ffff;
  background-color: #0071bd;
  border: solid #0071bd 1px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
  border-radius: 15px;
  transition: 419ms;
  transform: translateY(0);
  cursor: default;
  margin-bottom: 3px;
  margin-top: 3px;
}

.dropdown>button {
  font-weight: 250;
  font-size: 15px;
  color: #ffff;
  background-color: #0071bd;
  padding: 5px 30px;
  border: solid #0071bd 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  transition: 419ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 3px;
  margin-top: 3px;
  user-select: none;
}

.dropdown>button:hover {
  transition: 419ms;
  padding: 7px 21px;
  transform: translateY(-0px);
  background-color: #ffff;
  color: #0071bd;
  border: solid 1px #0071bd;
  user-select: none;
}

.main-subtitles-div {
  display: flex;
  user-select: none;
}

h1 {
  text-align: center;
  padding-bottom: 5px;
  padding-top: 2px;
  color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  margin-bottom: 0px;
  background-color: #005994;
  user-select: none;
}

.dropdown-content {
  display: none;
  position: relative;
  min-width: 160px;
  user-select: none;
  /*background-color: #0071bd;*/
}

.dropdown:hover .dropdown-content {
  display: block;
  user-select: none;
}

div {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0);
  height: auto;
  border-radius: 20px;
  user-select: none;
}

button:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
  user-select: none;
}

.menubar {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  height: 100%;
  align-items: center;
  user-select: none;
}

.time-field {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding-top: 7px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #ffff;
  overflow: hidden;
  user-select: none;

}

.buttons-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding-bottom: 10px;
  user-select: none;
}

.div-input {
  display: flex;
  text-align: center;
  align-items: center;
  align-items: stretch;
  user-select: none;
}

.div-input,
.time {
  color: rgb(255, 255, 255);
  user-select: none;
  padding: 0px;
}

.submit-button {
  /* Botoes relatorio e atualizar*/
  margin-left: 10px;
  margin-right: 10px;
  color: black;
  user-select: none;
  font-weight: normal;
  font-size: 18px;
  color: #ffff;
  background-color: #0071bd;
  border: solid #0071bd 1px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
  border-radius: 10px;
  transition: 419ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: default;
  margin-bottom: 3px;
  margin-top: 3px;
}

.input[type=text],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #005994;
  border-radius: 4px;
  box-sizing: border-box;
  user-select: none;
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
  user-select: none;
}

.subtitles {
  display: flex;
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
  align-items: stretch;
  user-select: none;
}
</style>
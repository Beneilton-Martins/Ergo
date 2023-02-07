<script setup>
import SubtitleButtons from './components/Buttons/SubtitleButtons.vue';

const spacer = "."
</script>

<template>
  <div class="time-field">
    <div class="div-input">
      <button class="tempo">Tempo</button>
      <input placeholder="Digite o tempo inical (s)" v-model="Tinicial" class="input" type="text" style="width: 210px">
      <input placeholder="Digite o tempo final (s)" v-model="Tfinal" class="input" type="text" style="width: 210px">
    </div>
    <div class="buttons-flex">
      <button class="submit" @click="atualizarImagens()">Atualizar</button>
      <button class="submit" @click="atualizarImages()">Relatório</button>
    </div>
  </div>
  <div class="pai">
    <h1>Legendas</h1>
    <div class="subtitles">
      <div class="dropdown">
        <button>Movimento</button>
        <div class="dropdown-content">
          <SubtitleButtons :color="'#012892'" :subtitle="spacer" />
          <button class="text-subtitle"> Sem Movimento </button>
          <br>
          <SubtitleButtons :color="'#E1A519'" :subtitle="spacer" />
          <button class="text-subtitle"> Com Movimento </button>
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
          <SubtitleButtons :color="'#C37537'" :subtitle="spacer" />
          <button class="text-subtitle"> Em Movimento </button>
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
.text-subtitle {
}

.dropdown>button {
  font-weight: 250;
  font-size: 15px;
  color: #fff;
  background-color: #48cae4;
  padding: 10px 30px;
  padding-right: 50px;
  border: solid #48cae4 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 20px;
  transition : 419ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}
.dropdown>button:hover{
  transition : 419ms;
  padding: 10px 21px;
  transform : translateY(-0px);
  background-color: #fff;
  color: #00b4d8;
  border: solid 1px #00b4d8;
}

.pai {
  display: flex;
}

h1 {
  text-align: center;
  padding-bottom: 5px;
  color: black;
  background-color: #f8f8f8;
}

.dropdown-content {
  display: none;
  position: relative;
  min-width: 160px;
  background-color: #f8f8f800;

}

.dropdown:hover .dropdown-content {
  display: block;
}

div {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0);
  height: auto;
  border-radius: 20px;
}

button:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.menubar {
  display: flex;
  box-shadow: 0px 0px 0px 1px rgb(34, 174, 255);
  height: 100%;
  align-items: center;
}

.time-field {
  display: flex;
  box-shadow: 0px 0px 0px 1px rgb(34, 174, 255);
  padding-top: 7px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #ffff;
}

.buttons-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding-bottom: 10px;
}

.div-input {
  display: flex;
  text-align: center;
  align-items: center;
}

.div-input,.tempo {
  color: black;
}

.submit { /* Botoes relatorio e atualizar*/
  margin-left: 20px;
  margin-right: 20px;
  color: black;
}

.input[type=text],
select {
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

.subtitles {
  display: flex;
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
  align-items: stretch;
}
</style>
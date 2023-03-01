<script setup>
function dropdownContent() {
  if (displayValue.value === true) {
    displayComp.value = "block"
    console.log("boolean", displayValue.value)
    displayValue.value = false
  } else {
    displayValue.value = true
    displayComp.value = "none"
    console.log("boolean2", displayValue.value)
  }
}
</script>

<template>
  <div class="time-field">
    <div class="div-input">
      <button class="tempo">Tempo</button>
      <input placeholder="Digite o tempo inical (s)" v-model="Tinicial" class="input" type="text" style="width: 210px">
      <input placeholder="Digite o tempo final (s)" v-model="Tfinal" class="input" type="text" style="width: 210px">
    </div>
    <div class="buttons-flex">
      <button class="submit" @click="atualizarImagens()"> Atualizar</button>
      <button class="submit" @click="atualizarImages()">Relatório</button>
    </div>
  </div>
  <div class="pai">
    <h1>Legendas</h1>
    <div class="legendas">
      <div class="dropdown">
        <button>Movimento</button>
        <div class="dropdown-content">
          <div><button style='background-color:rgb(1,40,146)'>Sem Movimento</button></div>
          <div><button style='background-color:rgb(225,165,25)'>Com Movimento</button></div>
        </div>
      </div>
      <div class="dropdown">
        <button>Carga</button>
        <div class="dropdown-content">
          <div><button style='background-color:rgb(1,40,146)'>10kg &lt; Carga &lt; 20kg</button></div>
          <div><button style='background-color:rgb(225,165,25)'>Carga &lt; 10kg</button></div>
          <div><button style='background-color:rgb(195,189,55)'>Carga > 20kg</button></div>
        </div>
      </div>
      <div class="dropdown">
        <button>Bracos</button>
        <div class="dropdown-content">
          <div><button style='background-color:rgb(1,40,146)'>Nenhum Braço Levantado </button></div>
          <div><button style='background-color:rgb(225,165,25)'>Um Braço Levantado</button></div>
          <div><button style='background-color:rgb(195,189,55)'>Dois Braços Levantados</button></div>
        </div>
      </div>
      <div class="dropdown">
        <button>Dorso</button>
        <div class="dropdown-content">
          <div><button style='background-color:rgb(1,40,146)'>Dorso Reto</button></div>
          <div><button style='background-color:rgb(225,165,25)'>Dorso Inclinado</button></div>
          <div><button style='background-color:rgb(195,189,55)'>Dorso Reto e Torcido</button></div>
          <div><button style='background-color:rgb(195,55,185)'>Dorso Inclinado e Torcido </button></div>
        </div>
      </div>
      <div class="dropdown">
        <button>Pernas</button>
        <div class="dropdown-content">
          <div><button style='background-color:rgb(1,40,146)'>Duas Pernas Retas</button></div>
          <div><button style='background-color:rgb(225,165,25)'>Uma Perna Reta</button></div>
          <div><button style='background-color:rgb(195,189,55)'>Duas Pernas Flexionadas</button></div>
          <div><button style='background-color:rgb(195,55,185)'>Uma Perna Flexionada </button></div>
          <div><button style='background-color:rgb(195,169,255)'>Uma Perna Ajoelhada</button></div>
          <div><button style='background-color:rgb(195,117,55)'>Em Movimento</button></div>
          <div><button style='background-color:rgb(1,146,174)'>Duas Pernas Suspensas</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown>button {
  color: rgb(0, 0, 0);
}

h1 {
  text-align: center;
  padding-bottom: 5px;
  color: black;
  background-color: #f8f8f8;
}

button {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: 15px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.dropdown-content {
  display: none;
  position: relative;
  min-width: 160px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

div {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
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

.div-input,
.tempo {
  color: black;
}

.submit {
  /*butoes relatorio e atualizar*/
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

.legendas {
  display: flex;
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
  align-items: stretch;

}</style>
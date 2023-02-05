<script setup>

</script>

<template>
    <div class="field">
        <div class="div-input">
            <button>Tempo</button>
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
        </div>
        <div class="buttons-flex">
            <button class="submit" @click="atualizarImagens()"> Atualizar</button>
            <button class="submit" @click="atualizarImages()">Relatório</button>
        </div>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    background-color: rgb(43, 43, 43);
    width: 100%;
    height: 60vh;
    border-radius: 20px;
    max-width: 100%;
    min-width: 100%;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
}
.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}
.field {
    display: flex;
}
.buttons-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding-bottom: 10px;
}
.div-input  {
  display: flex;
  text-align: center;
}
.submit {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 20px;
  margin-left: 1px;
  margin-right: 1px;
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
</style>
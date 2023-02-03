<script setup lang="ts">

import Home from '../components/Home.vue';
import Menu from '../components/Menu.vue';
import Legenda from "../components//Legends/Legenda.vue";

export default(){
   components:{
      Home,
      Menu,
      Legenda
   }
};

</script>

<template>
   <div class="linha">
      <div class="coluna-menu"><Menu/></div>
      <div class="coluna-viewer"><Home/></div>
      <Legenda/>
   </div>
</template>

<style scoped>

</style>
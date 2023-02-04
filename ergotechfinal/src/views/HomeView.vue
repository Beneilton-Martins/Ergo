<script setup lang="ts">
import Menu from "../components/Menu.vue";

export default(){
   components:{
      Home,
      Menu,
     
   }
};
</script>

<template>
   <div class="linha">
      <div class="coluna-menu"><Menu/></div>
   </div>
</template>

<style scoped>

</style>
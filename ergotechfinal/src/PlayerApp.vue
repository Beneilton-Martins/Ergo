<script setup lang="ts">
import { component } from "v-viewer";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import  Menu  from "./components/Menu.vue";
/* import HomeView from "./views/HomeView.vue"; */

</script>

<template>
  <header>
    <!-- <aside>
      <Menu></Menu>
   </aside> -->
    <!-- <img
      class="logo"
      alt="Vue logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->
    <div class="wrapper">
      <Header msg="ErgoTech" />

      <!-- <nav>
        <RouterLink to="/">Inicio</RouterLink>
      </nav> -->
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
.header{
  display: flex;
  align-items: center;
  align-content: center;
}

</style>
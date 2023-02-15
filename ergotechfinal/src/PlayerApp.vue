<script setup lang="ts">

</script>

<template>
  <div class="container">
      <div id="menu-app">
        <router-view class="left-sidebar" name="leftSidebar"></router-view>
      </div>
      <div id="player-app">
        <router-view class="main-player"></router-view>
      </div>
      <div id="rightsidebar">
        <router-view class="right-sidebar" name="rightSidebar"></router-view>
      </div>
  </div>
</template>

<style scoped>
/* Contém as outras divs da aplicação*/
 .container {
  display: grid;
  grid-template-columns:15% 65.703% auto;
  height: 100vh;
  width: 100vw;
  background: #eff8ff;
  user-select: none;
}

#menu-app {
  display: flex;
  padding-right: 16.5px;
  padding-top: 5px;
  padding-left: 16.5px;
  padding-bottom: 5px;
  max-width: 100%;
  margin: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: normal;
  max-height: 100vh;
  border-radius: 20px;
/*   background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
} 

/* Contém o viwerjs*/
 #player-app {
  padding-right: 16.5px;
  padding-top: 5px;
  padding-left: 16.5px;
  padding-bottom: 5px;
  max-width: 100%;
  margin: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: normal;
  max-height: 100vh;
  border-radius: 20px;
/*   background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
} 

/* Contém o menu e etc..*/
 #rightsidebar {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding-top: 1px;
  padding-left: 10px;
  padding-bottom: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0px;
  font-weight: normal;
  max-height: 100vh;
  border-radius: 20px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
}

</style>
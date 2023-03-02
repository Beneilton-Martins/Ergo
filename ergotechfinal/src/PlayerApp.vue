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
  grid-template-columns: 16% 64.819% auto;
  height: 100vh;
  width: 100vw;
  background: #eff8ff;
  user-select: none;
}

.left-sidebar {
  user-select: none;
}

.main-player {
  user-select: none;
}

.right-sidebar {
  user-select: none;
}

#menu-app {
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 100%;
  margin-right: -21.5px;
  margin: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: normal;
  max-height: 100vh;
  border-radius: 20px;
  user-select: none;
  margin-left: 5px;
}

/* Contém o viwerjs*/
#player-app {
  z-index: 1;
  padding-right: 15px;
  padding-top: 5px;
  padding-left: 0px;
  padding-bottom: 5px;
  max-width: 100%;
  margin: 5px;
  margin-left: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: normal;
  max-height: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  /*   background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
  user-select: none;
}

/* Contém o menu e etc..*/
#rightsidebar {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-right: 10px;
  padding-top: 1px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0px;
  font-weight: normal;
  max-height: 100vh;
  border-radius: 20px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
}

template {
  user-select: none;
}
</style>
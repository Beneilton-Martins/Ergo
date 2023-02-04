<template>
  <VueAwesomeSideBar
    vueRouterEnabel
    menuType="simple"
    white
    :menu="testMenu"
    :miniMenu="miniMenu"
    :collapsed="collapsed"
    :autoCollapse="600"
    
  ></VueAwesomeSideBar>
 
</template>

<script setup lang="ts">

import { ref } from 'vue';

const collapsed = ref(false)
const miniMenu = ref(false)
  
  const testMenu = [
    {
    name: 'Anselmo Cardoso de Paiva',
    icon: { text: '' , class: 'material-icons-outlined' },
    },
    {
    LineShow:true
    },
    {
      name: 'Empresas',
      icon: { class: 'material-icons-outlined', text: '' },
      children: [
      {
        name:"SESI",
        children:[{
          name: 'Aula de dança',
        children: [
        {
          name: 'Dança 1',
          href:'/'
        },
        {
          name: 'Dança 2',
          href: '/homeCopy'
        },
        ],}]
     
      },
      {
        name: 'UFMA',
        children:[{
          name: 'Tarefa 1',
        children: [
        {
          name: 'Atividade 1',
          // href:'/'
        },
        {
          name: 'Atividade 2',
          // href: '/homeCopy'
        },
        ],}]
      },
      
    ]
  },
]
</script>

<style scoped lang="scss">
.hello {
  position: absolute;
  left: 50%;
}
.hello2 {
  position: absolute;
  left: 60%;
}
* {
  font-family: 'Inter';
}
body {
  margin: 0;
}

#index{
  z-index: 4;
}

</style>
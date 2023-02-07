<template>
  <div class="solid">
    <h5><span>{{image}}</span></h5>
      <div @mouseenter="changecolor" class="div-movimento"
        :class="{ 'div-hover-movimento': hover }"
      ></div>
  </div>    
</template>
  
<script>
  export default {
    data() {
      return {
        hover: false,
      }
    },
    props:{
        image: Number
    },
    methods: {
      changecolor(e) {
        if(e.buttons==1){
          this.hover = !this.hover
        }
      }
    }
  };
</script>
  
<style>
  .div-movimento {
    display:flex;
    flex-direction: row;
    margin-right:1px;
    border-radius: 2px;
    border-color: black;
    margin-top: 5px;
    background-color: #012892;
    min-width: 30px;
    min-height: 25px;
  }
  
  .div-hover-movimento {
    background-color: #FFA519;
  }
</style>
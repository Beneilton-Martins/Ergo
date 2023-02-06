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
      color:"#012892",
    }
  },
  props:{
    image: Number
  },
  methods: {
    changecolor(e) {
      if(e.buttons == 1){
        if(this.color=="#012892") {
          this.color="#FFA519"
        }else {
          this.color="#C3BD19"
        }
        this.hover = !this.hover
      }
    }
  }
}
</script>
  
<style scoped>
.div-movimento {
  display:flex;
  flex-direction: row;
  margin-top: 0px;
  background-color: v-bind(color);
  border-radius: 3px;
  min-width: 29px;
  min-height: 15px;
  border: solid 1px white;
  margin-bottom: 4px;
}
</style>
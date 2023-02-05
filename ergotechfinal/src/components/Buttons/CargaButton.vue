<template>
  <div @mouseenter="changecolor" class="div-carga"></div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      color:"#012892",
    }
  },
  props: {
    image: Number
  },
  methods: {
    changecolor(e) {
      if(e.buttons == 1){
        if(this.color=="#012892") {
          this.color="#FFA519"
        } else if(this.color=="#FFA519") {
          this.color="#C3BD19"
        } else {
          this.color="#012892"
        }
        this.hover = !this.hover
      }
    }
  }
};
</script>

<style scoped>
.div-carga {
  display:flex;
  flex-direction: row;
  margin-right:1px;
  margin-top: 5px;
  background-color: v-bind(color);
  border-radius: 3px;
  min-width: 30px;
  min-height: 15px;
  box-shadow: 0px 0px 0px 1px rgb(255, 255, 255);
}
</style>
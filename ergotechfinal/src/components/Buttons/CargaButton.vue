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
  props:{
    image: Number
  },
  methods: {
    changecolor(e) {
      if(e.buttons == 1){
        if(this.color=="#012892"){
            this.color="#FFA519"
        }else if(this.color=="#FFA519"){
            this.color="#C3BD19"
        }else{
            this.color="#012892"
        }
        this.hover = !this.hover
      }
    }
  }
};
</script>

<style scoped>
.div-carga{
    display:flex;
    flex-direction: row;
    margin-right:1px;
    border-radius: 2px;
    margin-top: 5px;
    background-color: v-bind(color);
    min-width: 30px;
    min-height: 25px;
}

.separator h5{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }

  .seperator h5::before,
  .seperator h5::after {
    content: "";
    display: block;
    flex-grow: 1;
    height: 1px;
    background: #ccc;
  }

  .seperator h5 span {
  padding: 0 2em;
  }
</style>
<template>    

<div class="div-braco"></div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      color:"#012892",
      json: [1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1,
             1, 1, 1, 2, 1, 1, 1, 1, 2, 3, 2, 2, 
             2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 
             3, 3, 3, 3, 2, 3, 2, 3, 2, 1, 1, 3, 
             3, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1,
             3, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 
             1, 1, 3, 3, 3, 3, 1, 1],
    }
  },
  props:{
    image: Number
  },
  methods: {
    changecolor() {
      if(this.json[this.image]==1) {
        this.color="#012892"
      } else if(this.json[this.image]==2) {
        this.color="#FFA519"
      } else {
        this.color="#C3BD19"
      }
      this.hover = !this.hover
    }
  },
  mounted(){
    this.changecolor()
  }
};
</script>

<style scoped>
.div-braco {
  display:flex;
  flex-direction: row;
  margin-top: 1px;
  background-color: v-bind(color);
  border-radius: 3px;
  min-width: 29px;
  min-height: 15px;
  border: solid 1px white;
  user-select: none;
}
</style>
<template>    
    <!-- <div class="seperator"> -->
        <!-- <h5><span>{{image}}</span></h5> -->
            <div class="div-braco"
    ></div>
<!-- </div> -->
</template>

<script>
export default {

data() {
  return {
    hover: false,
    color:"#012892",
    json: [1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 3, 2, 2, 2, 2, 1,
     1, 1, 1, 2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1
     , 3, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1],
  }
},
props:{
    image: Number
},
methods: {
    changecolor() {
        if(this.json[this.image]==1){
            
            this.color="#012892"
        }else if(this.json[this.image]==2){
            
            this.color="#FFA519"
        }else{
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
.div-braco{
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
    min-width: 30px;
  }

  .seperator h5::before,
  .seperator h5::after {
    content: "";
    display: block;
    flex-grow: 1;
    height: 1px;
    background: #ccc;
    min-width: 30px;
  }

  .seperator h5 span {
    padding: 0 2em;
    min-width: 30px;
    min-height: 25px;
  }
</style>
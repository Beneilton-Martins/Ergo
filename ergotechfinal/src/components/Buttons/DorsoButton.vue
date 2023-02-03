<template>    
    <!-- <div class="seperator"> -->
        <!-- <h5><span>{{image}}</span></h5> -->
            <div class="div-dorso"
    ></div>
<!-- </div> -->
</template>

<script>
export default {

data() {
  return {
    hover: false,
    color:"#012892",
    json: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2
    , 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1
    , 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
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

        }else if(this.json[this.image]==3){
            this.color="#C3BD19"

        }else{
            this.color="#C337B9"
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
.div-dorso{
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
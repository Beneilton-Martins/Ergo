<template>
  <div @mouseenter="changecolor" class="div-carga"></div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      color: "#012892",
    }
  },
  props: {
    image: Number
  },
  methods: {
    changecolor(e) {
      if (e.buttons == 1) {
        if (this.color == "#012892") {
          this.color = "#FFA519"
        } else if (this.color == "#FFA519") {
          this.color = "#C3BD19"
        } else {
          this.color = "#012892"
        }
        this.hover = !this.hover
      }
    }
  }
};
</script>

<style scoped>
.div-carga {
  display: flex;
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
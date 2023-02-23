<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
    <h3>
      Landpage teste para aplicação web do projeto ErgoTech
    </h3>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
div {
  text-align: center;
  display: block;
  align-items: center;
  align-self: center;
  align-content: center;
  border-radius: 5px;
  background-color: #ffffff;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -1;
  align-items: center;
  color: black
}

h3 {
  font-size: 1.2rem;
  align-items: center;
}

@media (min-width: 2048px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
  }
}
</style>
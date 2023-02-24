<script setup lang="ts">
import HomeVue from "@/components/Home.vue"
import { loginInform } from "@/main";

const props = defineProps<{
  dados: string
}>()


</script>

<template>
   <HomeVue :dados="props.dados"/>

</template>

<style scoped>

</style>
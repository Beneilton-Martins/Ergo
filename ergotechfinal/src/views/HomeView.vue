<script setup lang="ts">
import HomeVue from "@/components/Home.vue"

const props = defineProps<{
  dados: string
}>()
</script>

<template>
   <HomeVue :dados="props.dados"/>
</template>

<style scoped>

</style>
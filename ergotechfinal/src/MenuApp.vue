<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
    { id: 1, label: "New-Menu" },
    { id: 2, label: "#itens" },
    { id: 3, label: "#itens" },
    { id: 4, label: "#itens" },
    { id: 5, label: "#itens" },
    { id: 6, label: "#itens" },
    { id: 7, label: "#itens" },
    { id: 8, label: "#itens" },
    { id: 9, label: "#itens" },
])
</script>

<template>
    <div class="menu-app">
        <ul>
            <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
        </ul>
    </div>
</template>

<style scoped>
.menu-app {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    user-select: none;
}
</style>
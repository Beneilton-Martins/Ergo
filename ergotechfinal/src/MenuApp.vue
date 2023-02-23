<script setup>
import { ref } from 'vue'


const header = ref('Shopping List App')

const resposta = ref({})
const json = ref({
    "Empresa":"SESI",
    "Tarefas":["Dançar","Varrer"],
    
})
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

// resposta.value= await (await fetch('http://192.168.200.73:8000/Empresa/', {
// 	method: "GET",
// })).json()

</script>

<template>
    <div id="menu-app">
        <div class ="sidebar">
            <ul>
                <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
            </ul>
        </div>
        <!-- <ul>
            <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
        </ul> -->
    </div>
</template>

<style lang="scss" scoped>
.menu-app {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    user-select: none;
}
ul {
        list-style: none;
        width: 200px;
        padding-left: 40px;

        li {
        color: #000000;
        font-weight: bold;
        margin-bottom: 20px;
        cursor: pointer;
        }
    }
</style>
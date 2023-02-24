<script setup>
import { ref } from 'vue'
/* import SidebarVue from '@/components/Sidebar.vue' */

const header = ref('Shopping List App')

const resposta = ref({})

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

resposta.value= await (await fetch('http://192.168.200.73:8000/CadastroCaptura/', {
    method: "GET",
})).json()

console.log("resposta", resposta.value[0])
</script>

<template>

    <div class="menu-app">
        <div class ="sidebar">
            <ul>
                <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
            </ul>
            <!-- {{ resposta.value[0].atividade }} -->
        </div>
        <!-- <ul>
            <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
        </ul> -->
    </div>
</template>

<style lang="scss" scoped>
.menu-app {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    ul {
        list-style: none;
        width: 150px;

        li {
            color: #000000;
            font-weight: bold;
            margin-bottom: 20px;
            cursor: pointer;
        }
    }
}

</style>
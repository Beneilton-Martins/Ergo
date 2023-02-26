<script setup>
import { ref } from 'vue'
import { loginInform } from "@/main";
/* import SidebarVue from '@/components/Sidebar.vue' */

const header = ref('Shopping List App')

const resposta = ref({})

const main = loginInform();

const dadosFuncionario= JSON.parse(JSON.stringify(main.dados[0]))
const dadosDepartamento= JSON.parse(JSON.stringify(main.dados[1]))
const dadosEmpresa= JSON.parse(JSON.stringify(main.dados[2]))
const dadosTarefa= JSON.parse(JSON.stringify(main.dados[3]))
const dadosAtividade= JSON.parse(JSON.stringify(main.dados[4]))
const dadosCaptura= JSON.parse(JSON.stringify(main.dados[5]))

console.log("departamento",dadosDepartamento[0])
console.log("Funcionario",dadosFuncionario[0])
console.log("Empresa",dadosEmpresa[0])
console.log("Tarefa",dadosTarefa[0])
console.log("Atividade",dadosAtividade[0])
console.log("Captura",dadosCaptura[0])


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

// resposta.value= await (await fetch('http://192.168.200.73:8000/CadastroCaptudra/', {
//     method: "GET",
// })).json()

// console.log("resposta", resposta.value[0])
</script>

<template>

    <div class="menu-app">
        <div class ="sidebar">
            <div class="p-3">
             <router-link to="/">
                  <a id="sidebar-no-header-title">{{dadosDepartamento[0].nome}}</a>
            </router-link>
            <h4 id="sidebar-no-header-title">{{dadosFuncionario[0].nome}}</h4>
            <!-- <ul>
                <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
            </ul> -->
            {{dadosEmpresa[0].nome}}

            <!-- {{ resposta.value[0].atividade }} -->
            </div>
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
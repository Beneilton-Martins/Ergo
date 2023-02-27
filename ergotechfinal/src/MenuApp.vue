<script setup>
import { ref } from 'vue'
import { loginInform } from "@/main";

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

// function compareString(a, b){
//     console.log("primeira",a)
//     console.log("segunda",b)
//     if(a===b){
//         console.log("primeira",a)
//         console.log("segunda",b)
//         return true
//     }
//     return false
// }
</script>

<template>

    <div class="menu-app">
        <div class ="sidebar">
            <div class="p-3">
                <!-- <h3 id="sidebar-no-header-title"> {{ dadosDepartamento[0].nome }} </h3> -->
                <h3 id="sidebar-no-header-title" class="user-name">{{ dadosFuncionario[0].nome }}</h3>
                <ul> {{ dadosEmpresa[0].nome }} </ul>
                <ul>
                    <li v-for="Tarefas in dadosTarefa" :key="Tarefas.idTarefa" class="li-tasks">
                        {{ Tarefas.nome }}s
                        <li v-for="Atividades in dadosAtividade" :key="Atividades.idAtividade" class="li-tasks-child">
                            <div v-if="Atividades.tarefa===Tarefas.idTarefa"> {{ Atividades.nome }}</div>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu-app {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    .user-name {
        padding: 15px;
    }

    ul {
        list-style: none;
        padding-inline-start:15px;
        overflow: hidden;
        padding-bottom: 5px;
    }
    .li-tasks-child {
        padding-inline-start: 10px;
        padding-bottom: 5px;
    }
}

</style>
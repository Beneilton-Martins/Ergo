<script setup>
import { ref } from 'vue'
import { loginInform } from "@/main"
import { walkBlockDeclarations } from '@vue/compiler-core';

const main = loginInform();

const dadosFuncionario = JSON.parse(JSON.stringify(main.dados[0]))
const dadosDepartamento = JSON.parse(JSON.stringify(main.dados[1]))
const dadosEmpresa = JSON.parse(JSON.stringify(main.dados[2]))
const dadosTarefa = JSON.parse(JSON.stringify(main.dados[3]))
const dadosAtividade = JSON.parse(JSON.stringify(main.dados[4]))
const dadosCaptura = JSON.parse(JSON.stringify(main.dados[5]))

console.log("dados", main.dados[0])
console.log("departamento", dadosDepartamento[0])
console.log("Funcionario", dadosFuncionario[0])
console.log("Empresa", dadosEmpresa[0])
console.log("Tarefa", dadosTarefa[0])
console.log("Atividade", dadosAtividade[0])
console.log("Captura", dadosCaptura[0])

const displayValue = ref(true)
const displayComp = ref("none")
console.log("forte",displayComp)

function dropdownContent() {
    if(displayValue.value===true){
        displayComp.value = "none"
        console.log("boolean",displayValue.value)
    }
    displayValue.value=false
    displayComp.value = "block"
    console.log("boolean2",displayValue.value)
}

</script>

<template>
    <div class="menu-app">
        <div class="sidebar">
            <div class="p-3">
                <h3 id="sidebar-no-header-title" class="user-name"> {{ dadosFuncionario[0].nome }} </h3>
                <ul> {{ dadosEmpresa[0].nome }} </ul>
                <ul>
                    <li v-for="Tarefas in dadosTarefa" :key="Tarefas.idTarefa" class="li-tasks" >
                        <h4 @click="dropdownContent"> {{ Tarefas.nome }} </h4>
                        <div v-for="Atividades in dadosAtividade" :key="Atividades.idAtividade">
                            <div class="li-tasks-child" id="li-task-dropdown" v-if="Atividades.tarefa === Tarefas.idTarefa"><h4>{{ Atividades.nome }}</h4></div>
                        </div>
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
    user-select: none;

    .user-name {
        text-align: center;
        user-select: none;
    }

    ul {
        padding-left: 10px;
        list-style: none;
        overflow: hidden;
        user-select: none;
    }
    //dropdown css
    .li-tasks-child {
        padding-left: 10px;
        display: v-bind(displayComp);
        position: relative;
        float: none;
        user-select: none;
    }
    h4 {
        margin: 1px;
    }
    .show {
        display: block;
    }
}

template{
  user-select: none;
}
</style>
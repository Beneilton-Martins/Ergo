<script setup>
import { ref } from 'vue'
import { loginInform } from "@/main"
import { walkBlockDeclarations } from '@vue/compiler-core';

const main = loginInform();

const dadosFuncionario= main.dados[0][0]
const dadosDepartamento= main.dados[1][0]
const dadosEmpresa=main.dados[2][0]
const dadosTarefa= main.dados[3]
const dadosAtividade= main.dados[4]
const dadosCaptura= main.dados[5]


const displayValue = ref(true)
const displayComp = ref("none")

console.log("forte",displayComp)
console.log("forte",displayValue)

function dropdownContent() {
    if(displayValue.value === true){
        displayComp.value = "block"
        console.log("boolean",displayValue.value)
        displayValue.value = false
    } else {
        displayValue.value = true
        displayComp.value = "none"
        console.log("boolean2",displayValue.value)
    }

}



// console.log("dadosFuncionario", dadosFuncionario)
// console.log("main.dados[0]", main.dados[0])
// console.log("main.dados[0][0]", main.dados[0][0].nome)
// console.log("teste", dadosFuncionario==main.dados[0])

// console.log("tipo", typeof(main.dados[0]))


// console.log("departamento",dadosDepartamento)
// console.log("Funcionario",dadosFuncionario)
// console.log("Empresa",dadosEmpresa)
// console.log("Tarefa",dadosTarefa)
// console.log("Atividade",dadosAtividade)
// console.log("Captura",dadosCaptura)

</script>

<template>
    <div class="menu-app">
        <div class="sidebar">
            <div class="p-3">
                <h3 id="sidebar-no-header-title" class="user-name"> {{ dadosFuncionario.nome }} </h3>
                <ul> {{ dadosEmpresa.nome }} </ul>
                <ul>
                    <li v-for="Tarefas in dadosTarefa" :key="Tarefas.idTarefa" class="li-tasks" >
                        <button @click="dropdownContent"> {{ Tarefas.nome }} </button>
                        <div v-for="Atividades in dadosAtividade" :key="Atividades.idAtividade">
                            <div class="li-tasks-child" :style="`display: ${displayValue ? 'none' : 'show'}`" v-if="Atividades.tarefa === Tarefas.idTarefa"><button>{{ Atividades.nome }}</button></div>
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
        position: relative;
        float: none;
        user-select: none;
    }
    h4 {
        margin: 1px;
    }
  
}

template{
  user-select: none;
}
</style>
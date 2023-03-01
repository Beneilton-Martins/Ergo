<script setup>
import { ref } from 'vue'
import { loginInform } from "@/main"
/* import { walkBlockDeclarations } from '@vue/compiler-core'; */

const main = loginInform();

const dadosFuncionario = main.dados[0][0]
const dadosDepartamento = main.dados[1][0]
const dadosEmpresa = main.dados[2][0]
const dadosTarefa = main.dados[3]
const dadosAtividade = main.dados[4]
const dadosCaptura = main.dados[5]


const displayValue = ref(true)
const displayComp = ref("none")

console.log("forte", displayComp)
console.log("forte", displayValue)

function dropdownContent() {
    if (displayValue.value === true) {
        displayComp.value = "block"
        console.log("boolean", displayValue.value)
        displayValue.value = false
    } else {
        displayValue.value = true
        displayComp.value = "none"
        console.log("boolean2", displayValue.value)
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
                <h3 id="sidebar-no-header-title" class="user-name">
                    {{ dadosFuncionario.nome }}
                </h3>
                <ul>
                    <li id="empresa">{{ dadosEmpresa.nome }}</li>
                </ul>
                <ul>
                    <li v-for="Tarefas in dadosTarefa" :key="Tarefas.idTarefa" class="li-tasks">
                        <button @click="dropdownContent">{{ Tarefas.nome }}</button>
                        <ul>
                            <li class="atividades" v-for="Atividades in dadosAtividade" :key="Atividades.idAtividade">
                                <div class="li-tasks-child" :style="`display: ${displayValue ? 'none' : 'show'}`"
                                    v-if="Atividades.tarefa === Tarefas.idTarefa">
                                    <ul>
                                        <li>{{ Atividades.nome }}</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div>

    </div>
    <div class="icons-timeline">
        <div class="column-one">
            <button class="buttons-icons">D</button>
            <button class="buttons-icons">C</button>
            <button class="buttons-icons">B</button>
            <button class="buttons-icons">D</button>
            <button class="buttons-icons">P</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.icons-timeline {
    display: grid;

    .column-one {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }

    //estilo
    z-index: 1;
    height: 170.34px;
    background-color: #ffffff;
    border-bottom-left-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.menu-app {
    z-index: 1;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
    min-height: calc(100% - 170.35px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    user-select: none;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top-left-radius: 20px;

    .p-3 {
        margin-left: 10px;
    }

    .sidebar {
        display: flex;
        height: 100%;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: column;

    }

    .user-name {
        padding-left: 0px;
        text-align: start;
        user-select: none;
    }

    ul {
        padding-left: 0px;
        list-style: none;
        overflow: hidden;
        user-select: none;

        li {
            font-size: small;
            margin-left: 0px;

            .atividades {
                margin-left: 5px;
            }

            .empresa {
                margin-left: 0px;
            }
        }
    }

    //dropdown css
    .li-tasks {
        margin-bottom: 5px;
    }

    .li-tasks-child {
        padding-left: 0;
        position: relative;
        float: none;
        user-select: none;
    }

    h3 {
        margin: 10px 0px;
    }

    h4 {
        margin: 1px;
    }

}
</style>
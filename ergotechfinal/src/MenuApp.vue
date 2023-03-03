<script setup>
import { ref } from 'vue'
import { loginInform } from "@/main"

const main = loginInform();

const dadosFuncionario = main.dados[0][0]
const dadosDepartamento = main.dados[1][0]
const dadosEmpresa = main.dados[2][0]
const dadosTarefa = main.dados[3]
const dadosAtividade = main.dados[4]
const dadosCaptura = main.dados[5]

const displayValue = ref(true)
const displayComp = ref("none")

function dropdownContent() {

    if (displayValue.value === true) {
        displayComp.value = "block"
        displayValue.value = false

    } else {
        displayValue.value = true
        displayComp.value = "none"
    }
}

function toggle(idname) {
    if (document.getElementById(idname).style.display == "none") {
        document.getElementById(idname).style.display = "inline";
    } else {
        document.getElementById(idname).style.display = "none";
    }
}

</script>

<template>
    <div class="cointainer-menu">
    <div v-for="tarefas in dadosTarefa">
        <span @click="toggle(tarefas.nome)" style="cursor: pointer;">+ {{ tarefas.nome }}</span>
        <div v-show="false" :id="tarefas.nome">
            <div v-for="atividades in dadosAtividade" style="margin-left: 20px;">
                <span v-if="atividades.tarefa === tarefas.idTarefa"> - {{ atividades.nome }}</span>
            </div>
        </div>
    </div>
    <div class="menu-app">
            <div class="sidebar">
                    <div class="p-3">
                        <button id="sidebar-no-header-title" class="header">OWAS</button>
                        <h3 class="user-name">{{ dadosFuncionario.nome }}</h3>
                        <ul>
                            <li><button class="empresa">{{ dadosEmpresa.nome }}</button></li>
                        </ul>
                        <ul>
                            <li v-for="Tarefas in dadosTarefa" :key="Tarefas.idTarefa" class="li-tasks">
                                <button class="btn-tasks" @click="dropdownContent()">
                                    {{ Tarefas.nome }}
                                </button>
                                <ul>
                                    <li class="atividades" v-for="Atividades in dadosAtividade" :key="Atividades.idAtividade">
                                        <div class="li-tasks-child" v-if="Atividades.tarefa === Tarefas.idTarefa"
                                            :style="`display: ${displayValue ? 'none' : 'show'}`">
                                            <ul>
                                                <li>
                                                    <button class="btn-task-childs">{{ Atividades.nome }}</button>
                                                </li>
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
                    <button class="buttons-icons" id="deslocamento">Deslocamento</button>
                    <button class="buttons-icons" id="carga">Carga</button>
                    <button class="buttons-icons" id="bracos">Braços</button>
                    <button class="buttons-icons" id="dorso">Dorço</button>
                    <button class="buttons-icons" id="pernas">Pernas</button>
                </div>
        </div> -->
    </div>
</template>


<style lang="scss" scoped>
.container-menu {
    display: flex;
    height: 100%;
}

.p-3 {
    display: flex;
    flex-direction: column;
    background-color: #00599400;
    border-radius: 20px;

    .user-name {
        display: flex;
    }
}

.icons-timeline {
    display: grid;

    .column-one {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-end;
        flex-wrap: wrap;
        padding-bottom: 2px;

        .buttons-icons {
            margin: 2px;
            margin-right: -30px;
            font-weight: 250;
            font-size: 15px;
            color: #ffff;
            background-color: #0071bd;
            padding: 1px 20px;
            border: solid #0071bd 0px;
            border-radius: 15px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: default;
        }
    }

    //estilo
    z-index: 2;
    height: 170.328px;

}

.menu-app {
    z-index: 1;
    //background-color: #ffffff;

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

    .header {
        margin-left: 0px;
        margin-top: 0px;
        font-weight: bold;
        font-size: 15px;
        color: #ffff;
        background-color: #005994;
        padding: 10px 25px 10px 10px;
        border: solid #005994 0px;
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;
        cursor: default;
    }

    .sidebar {
        display: flex;
        height: 100%;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: column;
        border-radius: 20px;

    }

    .user-name {
        padding-left: 10px;
        text-align: start;
        user-select: none;
    }

    ul {
        margin-left: 0px;
        padding-left: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        list-style: none;
        overflow: hidden;
        user-select: none;

        li {
            padding: 0px;

            .empresa {
                padding-left: 10px;
                margin: 1px;
                font-weight: 250;
                font-size: 15px;
                color: #ffff;
                background-color: #0071bd;
                padding: 5px 20px 5px 5px;
                border: solid #0071bd 0px;
                /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
                border-radius: 15px;
                border-bottom-left-radius: 0px;
                border-top-left-radius: 0px;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: default;
                width: calc(85%);

            }
        }
    }


    //dropdown css
    .li-tasks {
        margin-bottom: 0px;

        .btn-tasks {
            position: inherit;
            margin: 1px;
            font-weight: 250;
            font-size: 15px;
            color: #ffff;
            background-color: #0071bd;
            padding: 1px 15px 1px 5px;
            border: solid #0071bd 1px;
            /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
            border-radius: 15px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            width: calc(80%);
        }
    }

    .li-tasks-child {
        padding-left: 5px;
        position: relative;
        float: none;
        user-select: none;

        .btn-task-childs {
            cursor: pointer;
            border-style: none;
            background-color: transparent;
            padding: 5px;
            padding-right: 10px;
        }
    }

    .btn-task-childs:hover {
        background-color: rgba(0, 113, 189, 0.213);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding-right: 10px;
    }

    h3 {
        margin: 10px 0px;
    }

    h4 {
        margin: 1px;
    }

}
</style>
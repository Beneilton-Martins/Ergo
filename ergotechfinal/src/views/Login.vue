<script setup lang="ts">
import { ref } from "vue"
const registerActive = ref(false)
const emailLogin = ref("")
const passwordLogin = ref("")
const emailReg = ref("")
const passwordReg = ref("")
const confirmReg = ref("")
const emptyFields = ref(false)
const resposta = ref()

async function doLogin() {
    resposta.value = await (fetch(
        `http://192.168.200.73:8000/Login/verifyLogin/?` + new URLSearchParams({
            usuario: emailLogin.value,
            senha: passwordLogin.value
        }), {
        method: "GET",
    },
    ).then(response => {
        const dados = response
        console.log(response);
        if (response.ok) {
            return response.json(); //then consume it again, the error happens
        }
    })
    )
    console.log(resposta.value.data)
}
function doRegister() {
    if (emailReg.value === "" || passwordReg.value === "" || confirmReg.value === "") {
        emptyFields.value = true;
    } else {
        alert("Registro concluído com sucesso!");
    }
}
</script>

<template>
    <div class="login-page">
        <div class="container">
            <div class="row">
                <div class="mx-auto">
                    <div v-if="!registerActive" class="card login">
                        <h1>Entrar - Sesi/ErgoTech</h1>
                        <form class="form-group">
                            <input v-model="emailLogin" type="nome" class="form-control" placeholder="Usuario" required>
                            <input v-model="passwordLogin" type="password" class="form-control" placeholder="Senha"
                                required>
                            <input type="button" class="btn" value="Entrar" @click="doLogin">
                            <!--<p> Não tem uma conta?
                                <a href="#" @click="registerActive = !registerActive, emptyFields = false">
                                    Faça uma conta aqui </a>
                            </p>
                            <p> <a href="#">Esqueceu sua senha?</a> </p> -->
                        </form>
                    </div>

                    <div v-else class="card register">
                        <h1>Registrar - Sesi/ErgoTech</h1>
                        <form class="form-group">
                            <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                            <input v-model="passwordReg" type="password" class="form-control" placeholder="Senha" required>
                            <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirme a senha"
                                required>
                            <input type="submit" class="btn" value="Registrar" @click="doRegister">
                            <!-- <p> Já tem uma conta?
                                    <a href="#" @click="registerActive = !registerActive, emptyFields = false">
                                        Faça login aqui </a>
                                </p> -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped lang="scss">
p {
    line-height: 1rem;
    color: #000000;
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px;
}

a {
    color: #000000;
}

.card {
    padding: 50px;
}

.form-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    input {
        margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        width: auto;
    }
}

.login-page {
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    height: 100%;

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    h1 {
        margin-bottom: 1.5rem;
    }
}

.error {
    animation-name: errorShake;
    animation-duration: 0.3s;
}

@keyframes errorShake {
    0% {
        transform: translateX(-25px);
    }

    25% {
        transform: translateX(25px);
    }

    50% {
        transform: translateX(-25px);
    }

    75% {
        transform: translateX(25px);
    }

    100% {
        transform: translateX(0);
    }
}

.container {
    display: flex;
    flex-direction: column;
}

.mx-auto {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: auto;
    height: auto;
}

.btn {
    font-weight: normal;
    font-size: 15px;
    color: #ffff;
    background-color: #0071bd;
    border: solid #0071bd 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    transition: 419ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    max-width: min-content;
}
</style>
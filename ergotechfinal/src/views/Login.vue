<script setup lang="ts">
import { loginInform } from "@/main"
import router from "@/router"
import { mapActions } from "pinia"
import { ref } from "vue"
const registerActive = ref(false)
const loginSucess = ref(false)
const emailLogin = ref("")
const passwordLogin = ref("")
const emailReg = ref("")
const passwordReg = ref("")
const confirmReg = ref("")
const emptyFields = ref(false)
const resposta = ref()

const main = loginInform()

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

        if (response.ok) {
            loginSucess.value = true
            return response.json(); //then consume it again, the error happens    
        }
    },
    )
    )

    if (loginSucess.value == true) {
        main.setDados(resposta.value)
        router.push({ name: "ergotech" });
    }

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
                    <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                        <h1>Entrar - Sesi/ErgoTech</h1>
                        <form class="form-group">
                            <input v-model="emailLogin" type="nome" class="form-control" placeholder="Usuario" required>
                            <input v-model="passwordLogin" type="password" class="form-control" placeholder="Senha"
                                required>
                            <input type="button" class="btn" value="Entrar" id="btn-login" @click="doLogin">
                            <p> Não tem uma conta?
                                <a href="#" @click="registerActive = !registerActive, emptyFields = false">
                                    Faça uma conta aqui </a>
                            </p>
                            <p> <a href="#">Esqueceu sua senha?</a> </p>
                        </form>
                    </div>

                    <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                        <h1>Registrar - Sesi/ErgoTech</h1>
                        <form class="form-group">
                            <div>
                                <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                            </div>
                            <div>
                                <input v-model="passwordReg" type="password" class="form-control" placeholder="Senha"
                                    required>
                            </div>
                            <div>
                                <input v-model="confirmReg" type="password" class="form-control"
                                    placeholder="Confirme a senha" required>
                            </div>
                            <div>
                                <input type="submit" class="btn" value="Registrar" id="btn-register" @click="doRegister">
                            </div>
                            <p> Já tem uma conta?
                                <a href="#" @click="registerActive = !registerActive, emptyFields = false">
                                    Faça login aqui </a>
                            </p>
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

a:hover {
    background-color: #0071bd6f;
    padding-right: 10px;
}

.card {
    padding: 50px;
}

.form-group {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    /* align-items: center; */

    input {
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 10px);

    }
}

.form-control {
    padding: 5px 20px;
    margin-bottom: 10px;
    border-style: none;
    border-bottom: solid 1px;
    outline: none;
    padding-left: 1px;
}
.form-control:focus {
    border-bottom: solid 1px #0071bd;
    outline:#0071bd;
    padding-left: 5px;
}

#btn-login {
    padding: 5px 20px;
    margin-bottom: 10px;
    border-style: none;
    margin-left: calc(100% - 70px);
}
#btn-register {
    padding: 5px 20px;
    margin-bottom: 10px;
    border-style: none;
    margin-left: calc(100% - 90px);
}
#btn-login:hover {
    padding: 20px;
}
#btn-register:hover {
    padding: 20px;
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
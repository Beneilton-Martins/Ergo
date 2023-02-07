<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Entrar</h1>
                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="email" placeholder="Digite o email" name="email" class="input"
                                v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Empresa</label>
                        <div class="control">
                            <input type="text" placeholder="Digite a empresa" name="empresa" class="input"
                                v-model="empresa">
                        </div>
                    </div>

                    <label>Senha</label>
                    <div class="field">
                        <div class="control is-expanded">
                            <input type="password" placeholder="Digite sua senha" name="password" class="input"
                                v-model="password">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-success">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default ({
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            empresa: '',
            errors: []
        }
    },
    methods: {
        async submitForm() {
            this.$store.commit('setIsLoading', true)

            localStorage.removeItem('token')

            const instance = axios.create({
                baseURL: 'http://127.0.0.1:8000'
            });

            const formData = {
                username: this.username,
                password: this.password,
                empresa: this.empresa
            }
            await axios
                .post('/api/v1/token/login/', formData)
                .then(response => {

                    this.$store.commit('setToken', response.data.auth_token)

                    axios.defaults.headers.common['Authorization'] = response.data.auth_token

                    localStorage.setItem('token', response.data.auth_token)

                    this.$router.push('/dashboard/my-account')
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    }
                })

            this.$store.commit('setIsLoading', false)

        }
    }
})
</script>
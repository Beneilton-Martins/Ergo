<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Cadastro</h1>

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
                            <input type="text" placeholder="Digite a empresa" name="text" class="input"
                                v-model="empresa">
                        </div>
                    </div>

                    <div class="field">
                        <label>Senha</label>
                        <div class="control">
                            <input type="password" placeholder="Digite a senha" name="password1" class="input"
                                v-model="password1">
                        </div>
                        <h1>A senha não pode ser muito parecida com o usuário</h1>
                        <h1>Deve conter:</h1>
                        <h1>No mínimo 8 caracteres</h1>
                        <h1>Letras</h1>
                        <h1>Números</h1>

                    </div>

                    <div class="field">
                        <label>Confirmação de senha</label>
                        <div class="control">
                            <input type="password" placeholder="Repita a senha" name="password2" class="input"
                                v-model="password2">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control align-items-center">
                            <button class="button is-success">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { toStatement } from '@babel/types'
import axios from 'axios'
import { toDisplayString } from 'vue'
import { toast } from 'bulma-toast'

export default ({
    name: 'SignUp',
    data() {
        return {
            username: '',
            password1: '',
            password2: '',
            empresa: '',
            errors: []
        }
    },
    methods: {
        async submitForm() {
            this.errors = []

            if (this.username === '') {
                this.errors.push('O campo email deve ser preenchido')
            }
            if (this.empresa === '') {
                this.errors.push('O campo empresa deve ser preenchido')
            }
            if (this.password1 === '') {
                this.errors.push('Senha não foi digitada')
            }
            if (this.password1 !== this.password2) {
                this.errors.push('As senhas não são iguais')
            }

            if (!this.errors.length) {
                this.$store.commit('setIsLoading', true)
                const formData = {
                    username: this.username,
                    password: this.password1,
                    empresa: this.empresa
                }

                await axios
                    .post('/api/v1/users/', formData)
                    .then(response => {
                        toast({
                            message: 'Conta criada com sucesso',
                            type: 'is-succes',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'center',
                        })

                        this.$router.push('/login')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                        } else if (error.message) {
                            this.errors.push('Algo deu errado. Por favor, tente novamente!')
                        }
                    })

                this.$store.commit('setIsLoading', false)

            }
        }
    }
})
</script>

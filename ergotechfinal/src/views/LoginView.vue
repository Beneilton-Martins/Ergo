<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="loggin" @click="submitForm()"> 
                    {{ user }}
                </div>
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
            errors: [],
            user:"",
        }
    },
    methods: {
        submitForm() {
            //this.$store.commit('setIsLoading', true)
            
            console.log("ENTREI")
            const instance = axios.create({
                baseURL: 'http://10.0.3.139:8000'
            });


            axios.get('http://10.0.3.139:8000/Funcionario/GetFuncionario/',{
                    params:{nome:"Beneilton Martins"}
                })
                .then(response => {

                    this.user = response.data.data
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })

            // this.$store.commit('setIsLoading', false)

        }
    },
    computed: {
        axiosParams() {
            const params = new URLSearchParams();
            params.append('nome', 'Beneilton Martins');
            return params;
        }
}
})
</script>

<style>
.loggin {
  display:flex;
  flex-direction: row;
  margin-top: 1px;
  background-color: greenyellow;
  border-radius: 3px;
  min-width: 29px;
  min-height: 15px;
  border: solid 1px white;
  user-select: none;
}
</style>
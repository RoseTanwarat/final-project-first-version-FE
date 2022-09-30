<template>
    <div id="login">
        <h1 class="heading">Login</h1>
        <input v-model="message1" type="text" placeholder="email"><br>
        <input v-model="message2" type="text" placeholder="password"><br>
        <button @click="onClickLoginPage()" class="btn"> Login </button><br>
        <router-link to="/register" class="link">Don't Have An Account? Register One</router-link>

    </div>
</template>

<script>
import User from "../models/User"
export default {
    name: 'LoginPage',
    data() {
        return {
            message1: "",
            message2: ""
        }
    },
    computed: {
        userData() {
            return User.query().where('email', 'test2').get()
        }
    },
    methods: {
        onClickLoginPage() {
            console.log('email:', this.message1, 'password:', this.message2);

            User.insert({
                data: {
                    id: Math.floor(Math.random() * 100),
                    email: this.message1

                }
            })
        }
    }
}
</script>

<style>
#login {
    width: 400px;
    height: auto;
    color: aliceblue;
    font-family: 'Times New Roman', Times, serif;
}
</style>
<template>
    <div id="register">
        <h1 class="heading">Register</h1>
        <div class="register-form">
            <input type="text" placeholder="name"><br>
            <input type="text" placeholder="email"><br>
            <input type="text" placeholder="password"><br>
            <button @click="onClickRegisterPage()" class="btn"> Register </button><br>
            <router-link to="/login" class="link">Already Have An Account? Log In Here</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterPage",
    methods: {
        onClickRegisterPage() {
            console.log(555555555);
            fetch('http://localhost:3000/user-all', { method: "GET" })
                .then(response => response.json())
                .then(data => console.log('datauser', data))

        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 50vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(199, 198, 201);
    font-family: 'Times New Roman', Times, serif;
}

#register {
    width: 400px;
    height: auto;
    color: aliceblue;
    font-family: 'Times New Roman', Times, serif;
}

.heading {
    text-transform: capitalize;
    text-align: center;
    font-size: 80px;
    font-weight: 300;
    margin-bottom: 40px;
}

input,
.btn {
    width: 80%;
    height: 35px;
    display: block;
    margin: 1px auto;
    border-radius: 5px;
    border: none;
    color: rgb(82, 53, 94);
    padding: 15px;

}

input::placeholder {
    color: rgb(158, 155, 152);
}

input:focus,
.btn:hover {
    background: #fff;
    color: black;
}

input:focus::placeholder {
    color: #000;
}

.btn {
    width: auto;
    padding: 0 20px;
    cursor: pointer;
    margin: 30px auto 0;
    text-transform: capitalize;
}

.link {
    text-align: center;
    text-transform: capitalize;
    text-decoration: rgb(71, 71, 71);
    display: block;
    margin: 30px auto;
}

.link:hover {
    color: #fff;
}
</style>
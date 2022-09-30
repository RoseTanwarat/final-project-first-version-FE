<template>
    <div id="signUp">
        <img alt="Vue logo" src="../assets/logo.png"><br>
        <button class="btn">
            <router-link to="/login" class="signUp">SignUp</router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: "SignUp",
}
</script>

<style>
.signUp {
    text-decoration: rgb(71, 71, 71);
}
</style>


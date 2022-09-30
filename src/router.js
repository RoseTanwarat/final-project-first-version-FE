import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue"
import VueRouter  from 'vue-router';
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        name: "SignUp",
        component: SignUp,
        path: "/",
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: "/login",
    },
    {
        name: "RegisterPage",
        component: RegisterPage,
        path: "/register",
    },
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
});

export default router;
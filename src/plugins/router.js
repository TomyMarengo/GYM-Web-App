import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';
import WorkoutsPage from "../pages/WorkoutsPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage"

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/entrenamientos', component: WorkoutsPage},
        { path: '/registrarse', component: RegisterPage},
        { path: '/ingresar', component: LoginPage}
    ]
});

export default router;
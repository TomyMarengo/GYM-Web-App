import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage';
import RoutinesPage from "@/pages/RoutinesPage";
import RegisterPage from "@/pages/RegisterPage";
import ProfilePage from "@/pages/ProfilePage";
import LoginPage from "@/pages/LoginPage";
import RoutinePage from "@/pages/RoutinePage";
import VerifyPage from "@/pages/VerifyPage"

import store from "../store/index";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/rutinas', component: RoutinesPage },
        { path: '/registrarse', component: RegisterPage },
        { path: '/perfil', component: ProfilePage },
        { path: '/ingresar', component: LoginPage},
        { path: '/verificar-usuario', component: VerifyPage },
        { path: '/rutinas/:id', component: RoutinePage}
    ]
});

router.beforeEach((to, from, next) => {
    store.commit('setFromPath',from.path)
    next()
    }
)

export default router;
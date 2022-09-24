import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';
import WorkoutsPage from "../pages/WorkoutsPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage"
import store from "../store/index";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', name: 'Inicio', component: HomePage },
        { path: '/entrenamientos', component: WorkoutsPage},
        { path: '/registrarse', component: RegisterPage},
        { path: '/ingresar', component: LoginPage}
    ]
});

router.beforeEach((to, from, next) => {
    store.commit('setFromPath',from.path)
    next()
    }
)

export default router;
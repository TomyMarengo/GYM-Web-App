import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';
import WorkoutsPage from "../pages/WorkoutsPage";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/entrenamientos', component: WorkoutsPage}
    ]
});

export default router;
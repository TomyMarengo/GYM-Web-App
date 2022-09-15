import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
    ]
});

export default router;
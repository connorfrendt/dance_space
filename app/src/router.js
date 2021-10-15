import VueRouter from 'vue-router';
import Login from './components/Login';

export default new VueRouter({
    routes: [
        { path: '/Login', component: Login},
        { path: '*', redirect: '/Login' }
    ]
})
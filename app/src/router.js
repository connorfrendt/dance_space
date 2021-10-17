import VueRouter from 'vue-router';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default new VueRouter({
    routes: [
        { path: '/Login', component: Login},
        { path: '/SignUp', component: SignUp},
        { path: '*', redirect: '/Login' }
    ]
})
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
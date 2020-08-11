import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import './assets/css/swiper.min.css';
// i'll probably delete swiper, but keep it njehere just in case
// import Swiper from "swiper";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import store from './store';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

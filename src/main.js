import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';

import './plugin.js';

import directive from '@/assets/js/directive';
Vue.use(directive);

import base from '@/assets/js/base';
Vue.prototype.$base = base;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
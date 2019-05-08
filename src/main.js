// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';

import Message from 'xumengzi';
Vue.use(Message);
console.log(Message);

import XNotification from './plugins/notification/notification.js';
Vue.use(XNotification);

import Loading from './plugins/loading/loading.js';
Vue.use(Loading);

import Modal from './plugins/modal/modal.js';
Vue.use(Modal);

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
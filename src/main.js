import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';

// 导入pc组件
import './plugin.js';
// 导入移动端组件
import './plugin-mobile.js';

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
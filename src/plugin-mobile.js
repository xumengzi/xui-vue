import Vue from 'vue';

// 全局导入插件
import FcboxMUI from '../node_modules/fcbox-m-ui/lib/fcbox.umd';
import '../node_modules/fcbox-m-ui/lib/fcbox.css';

Vue.use(FcboxMUI);

// 单个导入插件
// import {
//   FcSelector,
//   FcMessage,
//   FcButton,
//   FcInput,
//   FcRadio
// } from '../node_modules/fcbox-m-ui/lib/fcbox.umd';
// import '../node_modules/fcbox-m-ui/lib/fcbox.css';

// Vue.use(FcSelector);
// Vue.use(FcMessage);
// Vue.use(FcButton);
// Vue.use(FcInput);
// Vue.use(FcRadio);

// Vue.prototype.$XxMessage = FcMessage.MessageService
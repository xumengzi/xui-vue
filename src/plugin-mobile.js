import Vue from 'vue';

// 导入插件
import {
  FcSelector,
  FcMessage,
  FcButton,
  FcInput,
  FcRadio
} from '../fcbox-m-ui/index.js';

Vue.use(FcSelector);
Vue.use(FcMessage);

Vue.use(FcButton);
Vue.use(FcInput);
Vue.use(FcRadio);

Vue.prototype.$XxMessage = FcMessage.MessageService
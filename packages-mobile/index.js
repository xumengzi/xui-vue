import FcSelector from './plugins/selector/index.js';
import FcMessage from './plugins/message/message.js';

import {
  Button as FcButton,
  Input as FcInput,
  Radio as FcRadio
} from './plugins/form/form.js';

const components = [
  FcSelector,
  FcButton,
  FcInput,
  FcRadio
];

const install = function(Vue){
  // 判断是否安装
  if(install.installed){
    return;
  };
  // 注册全局组件
  components.map(component =>{
    Vue.component(component.name, component);
  });

  Vue.prototype.$XxMessage = FcMessage.MessageService
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

// 整体导出, Vue.use(xx)
export default install;

// 单个导出, Vue.use(xx)
export {
  FcSelector,
  FcMessage,
  FcButton,
  FcInput,
  FcRadio
}
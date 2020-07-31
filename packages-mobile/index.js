import XuiMSelector from './packages/selector/index.js';
import XuiMMessage from './packages/message/message.js';

import {
  Button as XuiMButton,
  Input as XuiMInput,
  Radio as XuiMRadio
} from './packages/form/form.js';

const components = [
  XuiMSelector,
  XuiMButton,
  XuiMInput,
  XuiMRadio
];

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return;
  };
  // 注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = XuiMMessage.MessageService
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

// 整体导出, Vue.use(xx)
export default install;

// 单个导出, Vue.use(xx)
export {
  XuiMSelector,
  XuiMMessage,
  XuiMButton,
  XuiMInput,
  XuiMRadio
}
import XuiCalender from './packages/calender/calender.js';
import XuiSlider from './packages/slider/slider.js';
import XuiCascader from './packages/cascader/cascader.js';
import XuiDigital from './packages/digital/digital.js';
import XuiTab from './packages/tab/tab.js';
import XuiRate from './packages/rate/rate.js';
import XuiPagination from './packages/pagination/pagination.js';
import XuiDropdown from './packages/dropdown/dropdown.js';
import XuiLoading from './packages/loading/loading.js';
import XuiMessage from './packages/message/message.js';
import XuiModal from './packages/modal/modal.js';
import XuiNotification from './packages/notification/notification.js';
import {
  Button as XuiButton,
  Input as XuiInput,
  Radio as XuiRadio
} from './packages/form/form.js';

const components = [
  XuiCalender,
  XuiSlider,
  XuiCascader,
  XuiDigital,
  XuiTab,
  XuiRate,
  XuiDropdown,
  XuiPagination,
  XuiButton,
  XuiInput,
  XuiRadio
];

const install = function (Vue) {
  if (install.installed) {
    return;
  };
  components.map(component => {
    Vue.component(component.name, component)
  });

  Vue.prototype.$modal = XuiModal.ModalService;
  Vue.prototype.$loading = XuiLoading.LoadingService;
  Vue.prototype.$message = XuiMessage.MessageService;
  Vue.prototype.$notification = XuiNotification.NotificationService;
};

if (typeof window !== 'window' && window.Vue) {
  install(window.Vue);
};

export default install;

export {
  XuiCalender,
  XuiSlider,
  XuiCascader,
  XuiDigital,
  XuiTab,
  XuiRate,
  XuiDropdown,
  XuiPagination,
  XuiLoading,
  XuiMessage,
  XuiModal,
  XuiNotification,
  XuiButton,
  XuiInput,
  XuiRadio
}
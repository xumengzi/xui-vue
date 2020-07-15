import Vue from 'vue';

// 导入插件
import {
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
} from 'xuijs';

Vue.use(XuiCalender);
Vue.use(XuiSlider);
Vue.use(XuiCascader);
Vue.use(XuiDigital);
Vue.use(XuiTab);
Vue.use(XuiRate);
Vue.use(XuiDropdown);
Vue.use(XuiPagination);

Vue.use(XuiButton);
Vue.use(XuiInput);
Vue.use(XuiRadio);
Vue.use(XuiLoading);
Vue.use(XuiMessage);
Vue.use(XuiModal);
Vue.use(XuiNotification)

Vue.prototype.$showLoading = XuiLoading.LoadingService
Vue.prototype.$testMessage = XuiMessage.MessageService
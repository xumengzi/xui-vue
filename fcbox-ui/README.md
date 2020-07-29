### 项目名称: [xuijs](https://github.com/xumengzi/xui-vue)

#### 一个基于vueJs2.0,可以提供丰富的方法,组件,插件的项目.

1. 简介: 一个基于vuejs2.0,可以提供丰富的方法,组件,插件的组件库.

2. 依赖: vuejs

3. 兼容性: IE10及以上高级浏览器

```javascript
使用方法如下
1. npm install xuijs

2. 按需引入各个组件
import Vue from 'vue';

// 导入插件
import {
  XuiCalender,
  XuiSlider,
  XuiCascader,
  XuiDigital,
  XuiTab,
  XuiDropdown,
  XuiPagination,
  XuiLoading,
  XuiMessage,
  XuiModal,
  XuiNotification
} from 'xuijs';

Vue.use(XuiCalender);
Vue.use(XuiSlider);
Vue.use(XuiCascader);
Vue.use(XuiDigital);
Vue.use(XuiTab);
Vue.use(XuiDropdown);
Vue.use(XuiPagination);
Vue.use(XuiLoading);
Vue.use(XuiMessage);  // 2种方式调用loading组件, loading的名字为$loading
Vue.use(XuiModal);
Vue.use(XuiNotification)

// 2种方式调用loading组件, loading的名字为$showLoading, 可以自定义
Vue.prototype.$showLoading = XuiLoading.LoadingService  
```
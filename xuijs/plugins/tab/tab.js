import Tab from './tab.vue';

Tab.install = function(Vue){
  Vue.component(Tab.name, Tab);
};

export default Tab;
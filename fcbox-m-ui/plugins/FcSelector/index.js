import FcSelector from './index.vue';

FcSelector.install = function(Vue){
  Vue.component(FcSelector.name, FcSelector);
};

export default FcSelector;
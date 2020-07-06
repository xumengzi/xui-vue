import Vue from 'vue';

import Loading from './loading.vue';

// 构造函数
let loadingConstructor = Vue.extend(Loading);
loadingConstructor.prototype.close = function () {
	this.$el.parentNode.removeChild(this.$el)
};

const LoadingService = function(pos){
	let loadingObj = new loadingConstructor()
	let loadingEle = loadingObj.$mount().$el;
	if (pos) {
		loadingEle.classList.add('xui_part_loading');
		document.querySelector(pos).appendChild(loadingEle);
	} else {
		loadingEle.classList.add('xui_global_loading');
		document.body.appendChild(loadingEle);
	};
	return loadingObj
}

export default {
	install(Vue) {
		Vue.prototype.$loading = LoadingService;
	},
	LoadingService
};

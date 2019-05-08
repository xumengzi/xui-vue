import Loading from './loading.vue';

const loading = {};
loading.install = function(Vue, options){
	Vue.prototype.$loading = (isShow, pos) =>{
		if (!isShow) {
			document.querySelector('.xui_loading') && document.querySelector('.xui_loading').remove();
		} else{
			let loadingHTML = Vue.extend(Loading);
			let loading = new loadingHTML().$mount().$el;
			if (pos) {
				loading.classList.add('xui_part_loading');
				document.querySelector(pos).appendChild(loading);
			} else{
				document.body.appendChild(loading);
			};
		};
	};
};
export default loading;
import Modal from './modal.vue';

const Mod = {};
Mod.install = function(Vue, options){
	Vue.prototype.$modal = (...args) =>{
		let modalHTML = Vue.extend(Modal);
		let modal = new modalHTML(args).$mount().$el;
		document.body.appendChild(modal);
	};
};
export default Mod;
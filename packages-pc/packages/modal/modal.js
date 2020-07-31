import Vue from 'vue';

import Modal from './modal.vue';

const modalConstructor = Vue.extend(Modal);

const ModalService = function(options){
	let modalObj = new modalConstructor(options);
	let modalEle = modalObj.$mount().$el;
	document.body.appendChild(modalEle);
	return modalObj
};

export default {
	install(Vue){
		Vue.prototype.$XuiModal = ModalService
	},
	ModalService
}
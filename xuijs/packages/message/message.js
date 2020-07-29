import Vue from 'vue';

import Message from './message.vue';

let messageConstructor = Vue.extend(Message);

const MessageService = function (tips = 'tips', duration = 1000, fn) {
	let messageObj = new messageConstructor({
		tips,
		duration,
		fn
	});
	let messageEle = messageObj.$mount().$el;
	document.body.appendChild(messageEle);
	return messageObj
}

export default {
	install(Vue) {
		Vue.prototype.$XuiMessage = MessageService;
	},
	MessageService
};

import Vue from 'vue';

import Notification from './notification.vue';

const notificationConstructor = Vue.extend(Notification);

const NotificationService = function (options) {
	let notificationObj = new notificationConstructor(options);
	let notificationEle = notificationObj.$mount().$el;
	document.body.appendChild(notificationEle);
	return notificationObj
};

export default {
	install(Vue) {
		Vue.prototype.$XuiNotification = NotificationService
	},
	NotificationService
}
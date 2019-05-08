import Notification from './notification.vue';

const Not = {};

Not.install = function(Vue, options){
	Vue.prototype.$notification = (options) =>{
		let notHTML = Vue.extend(Notification);
		let notification = new notHTML({options}).$mount().$el;
		document.body.appendChild(notification);
	};
};

export default Not;
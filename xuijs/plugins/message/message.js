import Message from './message.vue';

const Mes = {};
Mes.install = function(Vue){
  Vue.prototype.$message = (tips = 'tips', duration = 1000, fn) =>{
	let mesHTML = Vue.extend(Message);
	let message = new mesHTML({
				tips,
				duration,
				fn
				}).$mount().$el;
	document.body.appendChild(message);
  };
};
export default Mes;
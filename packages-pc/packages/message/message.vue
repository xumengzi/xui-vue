<template>
	<div class="xui_message">
		<span>{{tips}}</span>
	</div>
</template>

<script type="text/javascript">
import xu from '../../utils/xu';
export default {
	name: 'XuiMessage',
	data(){
		return{
			tips: '',
			duration : 1000,
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.tips = this.$options.tips;
			this.duration = this.$options.duration;
			setTimeout(() =>{
				this.$el.remove();
				const { fn } = this.$options;
				xu.isFunction(fn) && fn.call(this)
			}, this.duration);
		});
	}
}
</script>

<style lang="less" scoped>
.xui_message{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	font-size: 14px;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	z-index: 9999;
	span{
		background: rgba(0, 0, 0, 0.75);
		color: #fff;
		padding: .6em 3em;
		border-radius: 4px;
		-webkit-animation: .2s down linear;
		animation: .2s down linear;
		white-space: nowrap;
	}
}
@keyframes down{
	0%{
		opacity: .2;
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
	100%{
		opacity: 1;
		-webkit-transform: translateY(0%);
		transform: translateY(0%);
	}
}
</style>
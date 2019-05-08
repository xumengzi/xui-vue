<template>
	<div class="xui_digital" :class="{xui_digital_small: size}">
		<x-button type="default" styles="xui_sub" 
			@click="handleChoose($event, -1)" 
		>-</x-button>
		<x-input type="text" 
			:limit="limit"
			:value="currentValue"
			styles="xui_digital_input" 
			@change="handleChoose($event)"
		></x-input>
		<x-button type="default" styles="xui_add" 
			:isDisabled="test"
			@click="handleChoose($event, 1)"
		>+</x-button>
	</div>
</template>

<script type="text/javascript">
import XButton from '../form/button.vue';
import XInput from '../form/input.vue';

export default{
	name: 'xui-digital',
	data(){
		return{
			currentValue: this.defaultVal,
			test: 'false',
		}
	},
	props: {
		defaultVal:{
			type: Number,
			default: 1,
		},
		min:{
			type: Number,
			default: 1,
		},
		max:{
			type: Number,
			default: 1000,
		},
		step:{
			type: Number,
			default: 1,
		},
		precision:{
			type: Number,
			default: 2,
		},
		limit:{
			type: Number,
			default: 9,
		},
		size: String,
	},
	mounted(){
		this.$nextTick(function(){

		});
	},
	methods:{
		handleDigital(type){
			let val = this.currentValue;
			let newVal = 
							type == 1 
							?
							(val - 0 + this.step > this.max ? this.max : val - 0 + this.step)
							:
							(val - this.step < this.min ? this.min : val - this.step);
			this.setCurrentValue(newVal);
		},
		handleChoose(e, type){
			let reg = /^[\+\-\.]?(\d)*\.*\d+$/,
				tar = e.target;
			if (type == 1 || type == -1) {
				this.handleDigital(type);
				return;
			}
			if (!reg.test(this.currentValue)) {
				this.currentValue = this.min;
			} else{
				tar.value = 
						(tar.value > this.max)
						? 
						this.max
						: 
						(tar.value < this.min) ? this.min : tar.value;
				tar.value -= 0;
				this.setCurrentValue(tar.value);
			};
		},
		setCurrentValue(val){
			this.currentValue = (this.step.toString().includes('.')) ? this.isPrecision(val) : val;
			if (this.currentValue > this.max) {
				this.test = true;
			}
		},
		isPrecision(val){
			return (val = Number(val).toFixed(this.precision));;
		},
	},
	components: {
		XButton,
		XInput
	}
}
</script>

<style lang="less">
.xui_digital{
	display: flex;
	input,button{
		margin: 0;
		padding: .2em .57em;
		border-radius: 0;
	}
	button.xui_sub{
		border-bottom-left-radius: .2em;
		border-top-left-radius: .2em;
	}
	button.xui_add{
		border-bottom-right-radius: .2em;
		border-top-right-radius: .2em;
	}
	input{
		width: 60px;
		text-align: center;
		border-left: none;
		border-right: none;
		border-radius: 0;
	}
}
.xui_digital_small{
	input, button{
		padding: .1em .5em;
	}
	input{
		width: 40px;
	}
}
</style>
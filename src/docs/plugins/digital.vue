<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1>digital</h1>
			<blockquote>
					<p>说明: 当需要用户通过鼠标或键盘,输入范围内的数值.</p>
			</blockquote>
			<h5 id="使用及参数说明">使用及参数说明:</h5>
			<codes :codes="params" link="LYNQZQb"></codes>
			<ul>
				<li>复制好<code>html</code>,取一个<code>id</code>,然后在你需要用户去加减等操作的地方初始化吧</li>
				<li><code>id</code>表示数字框的<code>id</code> <strong>必传</strong></li>
				<li><code>min</code>表示最小值,默认值为1</li>
				<li><code>max</code>表示最大值,默认值为1000</li>
				<li><code>step</code>表示每次改变的小数,可为小数,默认值为1</li>
				<li><code>precision</code>表示数字精度,小数时有效(就是理解的保留几位有效数字),默认值为2</li>
				<li><code>isLimit</code>表示是否加上<code>maxlength</code>属性,默认值为9</li>
				<li><code>isInput</code>表示是否支持手动输入数字,如果输入大于或者小于临界值则会自动更改为临界值,默认值为<code>true</code></li>
				<li><code>change</code>表示操作后的回调,返回当前选择或输入的数字</li>
				<li>如果需要小一些的数字框,可以加上<code>xui_digital_small</code>即可</li>
				<li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
			</ul>
			<h3>效果展示</h3>
			<p>1.按照惯例, 先举一个简单例子</p>
			<xui-digital :defaultVal="1" 
				:min="1" :max="10" @change="getVal"
			></xui-digital>
			<codes :codes="star_1"></codes>
			<p>2.这个是默认大小的输入框,每次更改的步数为.1,这个时候<code>precision</code>就显得有必要的</p>
			<xui-digital :default-val=".1" 
				:min=".1" :max="1.0" 
				:step=".1" :precision="1" 
				:limit="3" size="true"
				@change="getVal"
			></xui-digital>
			<codes :codes="star_2"></codes>
		</div>
	</div>
</template>

<script>
import Codes from '@/assets/codes.vue';

export default {
	name: 'digital',
	data () {
		return {
			params: 
`<xui-digital :defaultVal="1" :min="1" 
    :max="10" :step="2" 
    :precision="1" :limit="3" 
    size="true" @change="getVal"
></xui-digital>`,
			star_1: 
`<xui-digital :defaultVal="1" 
    :min="1" :max="10" @change="getVal"
></xui-digital>`,
			star_2: 
`<xui-digital :defaultVal="1" 
    :min="1" :max="10" 
    :step="1" :precision="1" 
    :limit="3" size="true"
></xui-digital>`
		}
	},
	mounted(){
			if ('ontouchstart' in window) {
					let tar = document.getElementById('app');
					tar.querySelector('.test').classList.add('folded');
					tar.querySelector('.main').classList.add('folded');
			}
	},
	methods: {
		getVal(val){
			this.$message(val, 500);
		},
	},
	components:{
		Codes
	}
}
</script>
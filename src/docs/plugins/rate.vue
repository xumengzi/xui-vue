<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1>star</h1>
			<blockquote>
					<p>说明: 需要展示商品的星星数量</p>
			</blockquote>
			<h5 id="使用及参数说明">使用及参数说明:</h5>
			<codes :codes="params"></codes>
			<ul>
				<li><code>activeStars</code>点亮的星星数量 <strong>必传</strong></li>
				<li><code>allStars</code>所有的星星数,默认是5个</li>
				<li><code>size</code>星星大小, 0-mini, 1-非常大</li>
				<li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
			</ul>
			<h3>效果展示</h3>
			<p>1.先来一个五星好评</p>
			<xui-rate :activeStars="5" />
			<codes :codes="star_1"></codes>
			<p>2.再来一个五星好评,可惜有十颗星</p>
			<xui-rate :activeStars="5" :allStars="10"/>
			<codes :codes="star_2"></codes>
			<p>3.你想要大一点的星星, 也可以的哦</p>
			<xui-rate :activeStars="1" :allStars="3" :size="1" />
			<codes :codes="star_3"></codes>
			<p>4.同样小一点的星星也是阔以的</p>
				<xui-rate :activeStars="2" :allStars="5" :size="0" />
				<codes :codes="star_4"></codes>
		</div>
	</div>
</template>

<script>
import Codes from '@/assets/codes.vue';

export default {
	name: 'show',
	data () {
		return {
			params: 
`<xui-rate :activeStars="2" :allStars="5" :size="0" />`,
			star_1: '<xui-rate :activeStars="5" />',
			star_2: '<xui-rate :activeStars="5" :allStars="10"/>',
			star_3: '<xui-rate :activeStars="1" :allStars="3" :size="1" />',
			star_4: '<xui-rate :activeStars="2" :allStars="5" :size="0" />',
		}
	},
	methods: {
		open(){
			let that = this;
			that.$message(
				'hello, world', 
				1500, 
				function(){
					that.$message('callback');
				}
			);
		}
	},
	mounted(){
			if ('ontouchstart' in window) {
					let tar = document.getElementById('app');
					tar.querySelector('.test').classList.add('folded');
					tar.querySelector('.main').classList.add('folded');
			}
	},
	components:{
		Codes
	}
}
</script>
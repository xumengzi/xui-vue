<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1>slider</h1>
			<blockquote>
					<p>说明: 需要凸显网站特色以及展示多张图片等场景</p>
			</blockquote>
			<h5 id="使用及参数说明">使用及参数说明:</h5>
			<codes :codes="params"></codes>
			<ul>
				<li><code>options</code>幻灯片的数据源, 格式为数组 <strong>必传</strong></li>
				<li><code>animation</code>表示幻灯片更换的时间,动画等 </li>
				<li><code>duration</code>表示每一张幻灯片显示的时间</li>
				<li><code>styles</code>自定义样式, 将会被添加到幻灯片组件上</li>
				<li><code>change</code>幻灯片切换的回调,返回当前索引以及幻灯片组件元素</li>
				<li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
			</ul>
			<h3>效果展示</h3>
			<p>1.这里有个例子, 来看看吧</p>
			<div class="example">
				<xui-slider 
					:options="imgList"
					animation= '.5s linear'
					duration="3000"
					styles="hello"
					@change="getCurrentPic"
				/>
			</div>
			<codes :codes="slider_1"></codes>
		</div>
	</div>
</template>

<script>
import Codes from '@/assets/codes.vue';

export default {
	name: 'show',
	data () {
		return {
			imgList: [
					{
							link: 'https://xumeng.ink/book/',
							imgUrl: 'http://img.infinitynewtab.com/wallpaper/1111.jpg',
					},
					{
							link: 'https://github.com/xumengzi/xui-vue',
							imgUrl: 'http://img.infinitynewtab.com/wallpaper/1234.jpg',
					},
					{
							link: 'https://xumeng.site/xui-vue/index.html#/',
							imgUrl: 'http://img.infinitynewtab.com/wallpaper/2345.jpg',
					},
			],
			params: 
`//导入组件
import XSlider from '@/plugins/slider/slider.vue';

<xui-slider 
    :options="imgList"
    animation= '.5s linear'
    styles="hello"
    duration="3000"
    @change="getCurrentPic"
/>

imgList: [
    {
        link: 'https://xumeng.ink/book/',
        imgUrl: 'http://img.infinitynewtab.com/wallpaper/1111.jpg',
    },
    {
        link: 'https://github.com/xumengzi/xui-vue',
        imgUrl: 'http://img.infinitynewtab.com/wallpaper/1234.jpg',
    },
    {
        link: 'https://xumeng.site/xui-vue/index.html#/',
        imgUrl: 'http://img.infinitynewtab.com/wallpaper/2345.jpg',
    },
],

//回调
getCurrentPic(data){
    console.log(data);
}
`,
			slider_1: 
`<xui-slider 
    :options="imgList"
    animation= '.5s linear'
    styles="hello"
    duration="3000"
    @change="getCurrentPic"
/>
`,
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
		getCurrentPic(data){
			console.log(data);
		},
	},
	components:{
		Codes
	}
}
</script>

<style >
	.example{
	    width: 770px;
    	height: 300px;
	}
</style>
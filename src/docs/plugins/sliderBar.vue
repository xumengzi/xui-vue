<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1>sliderBar</h1>
			<blockquote>
					<p>说明: 方便用户选择范围内的某个值.</p>
			</blockquote>
			<h5 id="使用及参数说明">使用及参数说明:</h5>
			<codes :codes="params"></codes>
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
todo
`,
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
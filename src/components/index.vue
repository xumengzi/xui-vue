<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1 id="简介">简介</h1>
			<h2 id="项目名称-xui">项目名称: <code>{{$store.getters.projectName}}</code></h2>
			<ul>
				<li>
					<p>简介: 一个基于<code>vueJs2.0</code>,可以提供丰富的方法,组件,插件的组件库.</p>
				</li>
				<li>
					<p>依赖: <code>vuejs</code></p>
				</li>
				<li>
					<p>兼容性: IE9及以上高级浏览器</p>
				</li>
				<li>
					<p>使用方法: 在你的框架(<code>vue</code>, <code>react</code>, <code>angular</code>, <code>etc</code>)中引用<code>plugins</code>里的各个组件</p>
				</li>
			</ul>
			<blockquote>
				<p>说明: 每一个组件均有自己的js,css等, 所以可以引用任何一个组件.需要注意依赖的组件</p>
			</blockquote>
			<blockquote>
				<p>说明: js没有压缩方便你随时修改源码,js采用es6编写,所以建议用babel转译
				</p>
			</blockquote>
			<blockquote>
				<p>说明: 你可以在assets文件夹里找到源代码</p>
			</blockquote>
			<h5>个人项目,如有问题还请指出,不胜感激.</h5>
			<h5>欢迎不吝赐教</h5>
			<h6>联系我: <em>me@xumeng.site</em></h6>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';

import From from '../docs/from.vue';
import Plugins from '../docs/plugins/plugins.vue';
import Codes from '../assets/codes.vue';
import master from '@/components/master.vue'

export default {
	name: 'index',
	data () {
		return {
			msg: 'Welcome to my xui-vue App',
			introduce: 'How many codes must a man edit before you call him a master?'
		}
	},
	created(){
	},
	mounted(){
		this.$nextTick(function(){
			this.$store.commit('updateList', {
				value: 4,
				label: 'jquery',
			});
			this.updateList({
				value: 4,
				label: 'jquery',
			});
		})
	},
	computed: {
		...mapGetters([
			'filterListEs5'
		]),
		...mapState({
			version: state => state.version
		}),
	},
	methods: {
		add(){
			this.a++;
		},
		...mapActions([
			'introList',
		]),
		...mapMutations([
			'updateList'
		]),
	},
	components:{
		From,
		master,
		Plugins,
	}
}
</script>

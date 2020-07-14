<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1 id="简介">简介</h1>
			<h2 id="项目名称-xui">项目名称: <code>{{$store.getters.projectName}}</code></h2>
			<ul>
				<li>
					<p>简介: 一个基于<code>vuejs2.0</code>,可以提供丰富的方法,组件,插件的组件库.</p>
				</li>
				<li>
					<p>依赖: <code>vuejs</code></p>
				</li>
				<li>
					<p>兼容性: <code>IE9</code>及以上高级浏览器</p>
				</li>
			</ul>
			<codes :codes="instructions"></codes>
			<h5>个人项目,如有问题还请指出,不胜感激.</h5>
			<h5>欢迎不吝赐教</h5>
			<h6>联系我: <em>xumeng0611@gmail.com</em></h6>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';

import Forms from '../docs/forms.vue';
import Plugins from '../docs/plugins/plugins.vue';
import Codes from '../assets/codes.vue';
import master from '@/components/master.vue'

export default {
	name: 'index',
	data () {
		return {
			msg: 'Welcome to my xui-vue App',
			introduce: 'How many codes must a man edit before you call him a master?',
			instructions: `使用方法如下
1. npm install xuijs

2. 按需引入各个组件
import {
  XuiCalender,
  XuiSlider,
  XuiCascader,
  XuiDigital
} from 'xuijs';

Vue.use(XuiCalender);
Vue.use(XuiSlider);
Vue.use(XuiCascader);
Vue.use(XuiDigital);`
		}
	},
	created(){
	},
	mounted(){
		this.$nextTick(function(){
			if ('ontouchstart' in window) {
        let tar = document.getElementById('app');
        tar.querySelector('.test').classList.add('folded');
        tar.querySelector('.main').classList.add('folded');
      }
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
		Forms,
		Codes,
		master,
		Plugins,
	}
}
</script>
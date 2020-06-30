<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1>canlender</h1>
        <blockquote>
          <p>说明: 超大版的日历, 主要展示某一天可能会有一些信息等.</p>
        </blockquote>
        <h5 id="使用及参数说明">使用及参数说明:</h5>
        <codes :codes="params"></codes>
        <ul>
          <li><code>currentDate</code>表示日历显示的当前月份</li>
          <li><code>sendCurrentDate</code>表示点击日历的每一项的回调, 返回当前选择的年月日</li>
          <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
        </ul>
        <h3>效果展示</h3>
        <p>1.按照惯例, 先举一个简单例子</p>
        <x-button type="default" @click="change(-1)">上一个月</x-button>
        <span>当前月份: {{currentDate}}</span>
        <x-button type="default" @click="change(1)">下一个月</x-button>
        <x-canlender :currentDate="currentDate" @sendCurrentDate="getCurrentDate"/>
		</div>
	</div>
</template>

<script>
import XButton from '@/plugins/form/button.vue';
import XCanlender from '@/plugins/calender/calender.vue';
import Codes from '@/assets/codes.vue';

export default {
	name: 'show',
	data () {
		return {
			params: 
`//导入组件
import XCanlender from '@/plugins/calender/calender.vue';

<x-canlender :currentDate="currentDate" @sendCurrentDate="getCurrentDate"/>`,
      currentDate: '2020-06-01',
		}
	},
	methods: {
    getCurrentDate(date){
      console.log('wtf',date)
    },
    change(type){
      // 日期切换
      let d = new Date(this.currentDate);
      let mm = this.zeroFill(d.getMonth() + 1);
      let inx = type === 1 ? mm : mm - 2;
      let newDate = d.setMonth(inx);
      let newD = new Date(newDate);
      let nYyyy = newD.getFullYear();
      let nMm = this.zeroFill(newD.getMonth() + 1);
      this.currentDate = `${nYyyy}-${nMm}-01`;
    },
    zeroFill(e) {
      return e < 10 ? "0" + e : e;
    },
	},
	components:{
		XCanlender,
    Codes,
    XButton
	}
}
</script>
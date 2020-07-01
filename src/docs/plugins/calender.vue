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
        <xui-button type="default" @click="change(-1)">上一个月</xui-button>
        <span>当前月份: {{currentDate}}</span>
        <xui-button type="default" @click="change(1)">下一个月</xui-button>
        <xui-calender :currentDate="currentDate" @sendCurrentDate="getCurrentDate"/>
		</div>
	</div>
</template>

<script>
import Codes from '@/assets/codes.vue';
export default {
	name: 'calender',
	data () {
		return {
			params: 
`//导入组件
import XCanlender from '@/plugins/calender/calender.vue';

<x-canlender :currentDate="currentDate" @sendCurrentDate="getCurrentDate"/>`,
      currentDate: '2020-06-01',
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
      list: [
				'艾欧尼亚  电信',
				'比尔吉沃特  网通',
				'祖安 电信',
				'诺克萨斯  电信',
				'德玛西亚 网通',
				'班德尔城 电信',
				'皮尔特沃夫 电信',
				'战争学院 电信',
				'弗雷尔卓德 网通',
				'巨神峰 电信',
				'雷瑟守备 电信',
				'无畏先锋 网通',
				'裁决之地 电信',
				'黑色玫瑰 电信',
				'暗影岛 电信',
				'钢铁烈阳 电信',
				'恕瑞玛 网通',
				'均衡教派 电信',
			],
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
    getData(d){
      console.log(d)
    }
	},
	components:{
    Codes,
	}
}
</script>
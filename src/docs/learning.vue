<template>
    <div class="xui-vue markdown-section">
        <div class="main" >
            <h1 id=""><code>vue</code>学习笔记</h1>
            <codes :codes="vue"></codes>
            <p>1.在vue开发过程中,一些es6的语法并不能完全转换为es5的写法,数组里的include方法,在有些低版本浏览器里是无法运行的.因为webpack并没有将它转为indexOf,所以需要注意.</p>
            <p>2.在火狐等浏览器里面,event事件是存在兼容性的,需要传,所以我们经常这样写. let event = e || event e是传过来的.</p>
            <p>3.img出错的时候,可以这样写'@error'.</p>
            <codes :codes="loadImg"></codes>
            <p>
              这样当图片请求错误就能使用默认的图片了, 欢迎使用自定义指令
              <a href="#/Directive">v-loadimg</a>
            </p>
            <p>4.打包的时候发现图片路径不对,可以去config里面的配置里看看,是不是build里面的assetsPublicPath问题呢?</p>
            <p>5.有些时候, 比如在详情页里, 最让我头疼的是: 数据是异步的,所以你只能把数据实现全部定义好, 真是麻烦. 定义好了还算可以解决. 但是碰到有些问题,比如我需要一个倒计时,那么我肯定引入一个倒计时组件,那么页面渲染的时候传过去的时间为0(事先定义好的), 然后数据接收到了再更改时间. 但是此时倒计时并不能走. 解决办法是给倒计时组件的div加一个v-if, 时间为0的时候不展示, 等时间获取到了在展示. 完美解决问题.</p>
            <p>6.路由切换的时候,页面并没有如期望展示,那么请加上如下代码.</p>
            <codes :codes="scrollTop"></codes>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

import Codes from '@/assets/codes.vue';

export default {
    name: 'show',
    data () {
        return {
            vue: 'How many codes must a man edit before you call him a master?',
            loadImg: `<img :src="xxx" @error="xxx"/>`,
            scrollTop: 
`//路由返回顶部 main.js
router.afterEach((to, from, next)=>{
    window.scrollTo(0,0);
})
//或者在路由route.js里面加上
scrollBehavior(to, from, savePosition){
    return {x: 0, y: 0};
}
`,
        }
    },
    mounted(){
      this.$nextTick(function(){
        console.log(this.$base.a);
      })
    },
    components:{
        Codes,
    }
}
</script>
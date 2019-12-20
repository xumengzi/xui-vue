<template>
    <div class="xui-vue markdown-section">
        <div class="main">
            <h1>tab</h1>
            <blockquote>
                <p>说明: 需要展示多个栏目以及节省空间的时候</p>
            </blockquote>
            <h5 id="使用及参数说明">使用及参数说明:</h5>
            <codes :codes="params"></codes>
            <ul>
                <li><code>tabList</code>切换数据列表<strong>必传</strong> <code>Array</code></li>
                <li><code>direction</code> <code>tab</code>展示的方向,默认<code>x</code>轴,水平方向 <code>String</code></li>
                <li><code>activeIndex</code>当前激活的<code>tab</code>索引值, 从0开始 <code>Number</code></li>
                <li><code>change</code>切换的回调,返回的是<code>this</code> <code>Function</code></li>
                <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
            </ul>
            <h3>效果展示</h3>
            <p>1.只需要配置<code>tabList</code>数据,即可展示出来</p>
            <blockquote>
                <p>说明: 标题和内容均支持标签,样式等</p>
            </blockquote>
            <x-tab :tabList="tabs"></x-tab>
            <codes :codes="tab_1"></codes>
            <p>2.让我们来增加一些参数, 让tab更灵活</p>
            <x-tab :tabList="tabs" :direction="vertical" :activeIndex="-3" @change="callback($event)"></x-tab>
            <codes :codes="tab_2"></codes>
        </div>
    </div>
</template>

<script>
import XTab from '@/plugins/tab/tab.vue';
import Codes from '@/assets/codes.vue';

export default {
    name: 'show',
    data () {
        return {
            tabs: [
                {
                    title: '<em>标题1</em>',
                    content: '内容1',
                },
                {
                    title: '标题2',
                    content: '<p style="color:red;">我放在p标签里,字体颜色是红色</p>',
                },
                {
                    title: '标题3',
                    content: '内容3',
                }
            ],
            vertical: 'y',
            params: 
`//导入组件
import XTab from '@/plugins/tab/tab.vue';

<x-tab :tabList="tabs" :direction="vertical" :activeIndex="1" @change="callback($event)"></x-tab>

tabs: [
    {
        title: '<em>标题1</em>',
        content: '内容1',
    },
    {
        title: '标题2',
        content: '<p style="color:red;">我放在p标签里,字体颜色是红色</p>',
    },
    {
        title: '标题3',
        content: '内容3',
    }
],
`,
            tab_1: '<x-tab :tabList="tabs"></x-tab>',
            tab_2: '<x-tab :tabList="tabs" :direction="vertical" :activeIndex="1" @change="callback($event)"></x-tab>',
        }
    },
    mounted(){
        this.$nextTick(function(){})
    },
    methods: {
        callback(tar){
            console.log(tar);
        }
    },
    components:{
        XTab,
        Codes
    }
}
</script>

<style >
.xui_tab {
    width: 800px;
    height: 300px;
}
</style>
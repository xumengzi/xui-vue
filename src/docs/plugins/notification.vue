<template>
    <div class="xui-vue markdown-section">
        <div class="main">
            <h1>notification</h1>
            <blockquote>
                <p>说明: 全局展示通知提醒信息.</p>
            </blockquote>
            <h5 id="使用及参数说明">使用及参数说明:</h5>
            <codes :codes="params"></codes>
            <ul>
                <li>
                    <code>title</code>表示通知提醒框的标题
                </li>
                <li>
                    <code>content</code>表示通知提醒框的正文内容
                </li>
                <li>
                    <code>duration</code>表示通知提醒框展示的时间, 传0时不会自动关闭, 默认3s后关闭
                </li>
                <li>
                    <code>btn</code>表示通知提醒框关闭按钮的文字提示, 不传则不展示
                </li>
                <li>
                    <code>fn</code>表示通知提醒框的关闭的回调事件
                </li>
                <li>
                    没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧
                </li>
            </ul>
            <h3>效果展示</h3>
            <p>1.同样, 我们先来展示一个最少配置的例子</p>
            <xui-button type="default" @click="notification1">试试看</xui-button>
            <codes :codes="notification_1"></codes>
            <p>2.接下来, 让我们来看看进阶版的例子</p>
            <xui-button type="default" @click="notification2">试试看</xui-button>
            <codes :codes="notification_2"></codes>
        </div>
    </div>
</template>

<script type="text/javascript">
import Codes from '@/assets/codes.vue';

export default {
    name: 'xui-loading',
    data(){
        return{
            params: 
`//导入插件
import XNotification from './plugins/notification/notification.js';
Vue.use(XNotification);

this.$notification({
    title: string,
    content: string,
    duration: number,
    btn: string,
    fn: callback,
});
`,
            notification_1: 
`this.$notification({
    title: 'notification title',
    content: 'This is the content of the notification.',
});
`,
            notification_2: 
`this.$notification({
    title: 'notification title',
    content: 'This is the content of the notification.',
    duration: 5000,
    fn(){
        console.log('notification closed');
    },
});
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
    methods:{
        notification1(){
            let that = this;
            this.$notification({
                title: 'notification title',
                content: 'This is the content of the notification.',
            });
        },
        notification2(){
            let that = this;
            this.$notification({
                title: 'notification title',
                content: 'This is the content of the notification.',
                duration: 5000,
                btn: 'confirm',
                fn(){
                    that.$message('notification closed');
                },
            });
        },
    },
    components:{
        Codes
    }
};
</script>

<style >
    #test{
        height: 300px;
        position: relative;
        background: #ccc;
    }
</style>
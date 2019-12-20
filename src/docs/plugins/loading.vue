<template>
    <div class="xui-vue markdown-section">
        <div class="main">
            <h1>loading</h1>
            <blockquote>
                <p>说明: 用来缓解用户疲劳,提高用户等待积极性.</p>
            </blockquote>
            <h5 id="使用及参数说明">使用及参数说明:</h5>
            <codes :codes="params"></codes>
            <ul>
                <li>
                    <code>boolean</code>表示是否显示<code>loading</code>,不传或者传<code>false</code>,表示删除<code>loading</code><strong>必传</strong>
                </li>
                <li>
                    <code>string</code>表示<code>loading</code>显示在这个里面, 也不是全屏<code>loading</code>, 默认全屏
                </li>
                <li>
                    没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧
                </li>
            </ul>
            <h3>效果展示</h3>
            <p>1.默认全屏<code>loading</code></p>
            <x-button type="default" @click="loading1">试试看</x-button>
            <codes :codes="loading_1"></codes>
            <p>2.在指定元素内<code>loading</code></p>
            <blockquote>
                <p>tips: 一定要给你指定的元素一个<code>position:relative;</code></p>
            </blockquote>
            <x-button type="default" @click="loading2">试试看</x-button>
            <div id="test"></div>
            <codes :codes="loading_2"></codes>
        </div>
    </div>
</template>

<script type="text/javascript">
import XButton from '@/plugins/form/button.vue';
import Codes from '@/assets/codes.vue';

export default {
    name: 'xui-loading',
    data(){
        return{
            params: 'this.$loading(boolean, string);',
            loading_1: 'this.$loading(true);',
            loading_2: 'this.$loading(true, "#test");',
        }
    },
    mounted(){
        this.$nextTick(function(){
        })
    },
    methods:{
        loading1(){
            this.$loading(true);
            setTimeout(()=>{
                this.$loading(false);
            },2000);
        },
        loading2(){
            this.$loading(true, '#test');
            setTimeout(()=>{
                this.$loading(false);
            },2000);
        }
    },
    components:{
        XButton,
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
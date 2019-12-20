<template>
    <div class="xui-vue markdown-section">
        <div class="main">
            <h1>select</h1>
            <blockquote>
                <p>说明: 当选项过多时，使用下拉菜单展示并选择内容</p>
            </blockquote>
            <h5>使用及参数说明:</h5>
            <codes :codes="params"></codes>
            <ul>
                <li><code>list</code>下拉框列表数据源,类型为数组<strong>必传</strong></li>
                <li><code>selectVal</code>选中后的回调,返回选中的<code>key</code>和<code>value</code>,类型为对象</li>
                <li><code>defaultVal</code>默认选中的一项,类型为数字<code>value</code>,默认是0</li>
                <li><code>isSearch</code>是否显示搜索框,默认是<code>false</code></li>
                <li><code>placeholder</code>搜索框的文字,默认是<code>search</code></li>
                <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
            </ul>
            <h3>效果展示</h3>
            <p>1.先来一个最简单的配置</p>
            <x-dropdown
                :list="list"
                :selectVal="selectedVal"
                @handleChange="showVal"
                >
            </x-dropdown>
            <codes :codes="select_1"></codes>
            <p>2.可以默认选中一项, 设置好对应的<code>defaultVal</code>值即可.这里我设置了<code>isSearch</code>为<code>true</code>所以可以展示搜索框</p>
            <blockquote>
                <p>说明: 搜索依赖列表数据,支持<code>key</code>或者<code>value</code>搜索</p>
            </blockquote>
            <x-dropdown
                :list="list"
                :selectVal="selectedVal"
                @handleChange="showVal"
                :isSearch="true"
                placeholder="type to search"
                :defaultVal="2"
                >
            </x-dropdown>
            <codes :codes="select_2"></codes>
        </div>
    </div>
</template>

<script>
import XDropdown from '@/plugins/dropdown/dropdown.vue';

import Codes from '@/assets/codes.vue';

export default {
    name: 'show',
    data () {
        return {
            list: [
                {
                    value: 1,
                    key: 'vueJs',
                },
                {
                    value: 2,
                    key: 'reactJs',
                },
                {
                    value: 3,
                    key: 'angularJs',
                },
                {
                    value: 4,
                    key: 'javascript',
                },
            ],
            selectedVal: {
                key: '',
                value: '',
            },
            params: 
`//导入组件
import XDropdown from '@/plugins/dropdown/dropdown.vue';

<x-dropdown
    :list="list"
    :selectVal="selectedVal"
    :isSearch="true"
    placeholder="type to search"
    @handleChange="showVal"
    :defaultVal="2"
    >
</x-dropdown>
//声明好data属性等
list: [
    {
        value: 1,
        key: 'vueJs',
    },
    {
        value: 2,
        key: 'reactJs',
    },
    {
        value: 3,
        key: 'angularJs',
    }
],
selectedVal: {
    key: '',
    value: '',
},
//在methods里写获取选中的值的方法
showVal(){
    console.log(this.selectedVal);
}
`,
            select_1: 
`<x-dropdown
    :list="list"
    :selectVal="selectedVal"
    @handleChange="showVal"
>
</x-dropdown>
`,
            select_2: 
`//只需添加需要选中的默认值即可
<x-dropdown
    :list="list"
    :selectVal="selectedVal"
    @handleChange="showVal"
    :isSearch="true"
    placeholder="type to search"
    :defaultVal="2"
>
</x-dropdown>
`
        }
    },
    mounted(){
        this.$nextTick(function(){})
    },
    methods: {
        showVal(){
            // console.log(this.selectedVal);
        },
    },
    components:{
        XDropdown,
        Codes,
    }
}
</script>
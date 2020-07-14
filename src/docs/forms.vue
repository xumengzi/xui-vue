<template>
    <div class="xui-vue">
        <div class="main">
            <p class="introduce">按钮<code>button</code></p>
            <xui-button type="default">ok</xui-button>
            <xui-button type="default" isDisabled="true">ok</xui-button>
            <xui-button type="cancel">cancel</xui-button>
            <xui-button type="cancel" isDisabled="true">cancel</xui-button>
            <codes :codes="button_1"></codes>
            <p class="introduce">输入框<code>input</code></p>
            <xui-input type="text" placeholder="请输入名字">name</xui-input>
            <xui-input type="text" readonly="readonly" placeholder="请输入名字">name</xui-input>
            <xui-input type="text" isDisabled="true" placeholder="请输入名字">name</xui-input>
            <xui-input type="text" placeholder="请输入名字">name</xui-input>
            <xui-input type="password" placeholder="请输入密码">password</xui-input>
            <xui-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</xui-input>
            <codes :codes="input_1"></codes>
            <p class="introduce">单选框<code>radio</code></p>
            <div style="display:flex;">
                <xui-radio name="radio_1" checked="checked">单选1</xui-radio>
                <xui-radio name="radio_2">单选2</xui-radio>
                <xui-radio name="radio_3">单选3</xui-radio>
                <xui-radio name="radio_4" disabled>单选4</xui-radio>
            </div>
            <codes :codes="radio_1"></codes>
        </div>
    </div>
</template>

<script>
import master from '@/components/master.vue';
import Codes from '@/assets/codes.vue';

export default {
    name: 'from',
    data () {
        return {
            button_1:
`<xui-button type="default">ok</xui-button>
<xui-button type="default" isDisabled="true">ok</xui-button>
<xui-button type="cancel">cancel</xui-button>
<xui-button type="cancel" isDisabled="true">cancel</xui-button>`,
            input_1: 
`<xui-input type="text" placeholder="请输入名字">name</xui-input>
<xui-input type="text" readonly="readonly" placeholder="请输入名字">name</xui-input>
<xui-input type="text" isDisabled="true" placeholder="请输入名字">name</xui-input>
<xui-input type="text" placeholder="请输入名字">name</xui-input>
<xui-input type="password" placeholder="请输入密码">password</xui-input>
<xui-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</xui-input>`,
            radio_1: 
`<xui-radio name="radio_1" checked="checked">单选1</xui-radio>
<xui-radio name="radio_2">单选2</xui-radio>
<xui-radio name="radio_3">单选3</xui-radio>
<xui-radio name="radio_4" disabled>单选4</xui-radio>`
        }
    },
    mounted(){
        if ('ontouchstart' in window) {
            let tar = document.getElementById('app');
            tar.querySelector('.test').classList.add('folded');
            tar.querySelector('.main').classList.add('folded');
        }
    },
    components:{
        master,
        Codes
    }
}
</script>

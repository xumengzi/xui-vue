<template>
    <div class="xui-vue">
        <div class="main">
            <p class="introduce">按钮<code>button</code></p>
            <x-button type="default">ok</x-button>
            <x-button type="default" disabled="disabled">ok</x-button>
            <x-button type="cancel">cancel</x-button>
            <x-button type="cancel" disabled="disabled">cancel</x-button>
            <codes :codes="button_1"></codes>
            <p class="introduce">输入框<code>input</code></p>
            <x-input type="text" placeholder="请输入名字">name</x-input>
            <x-input type="text" readonly="readonly" placeholder="请输入名字">name</x-input>
            <x-input type="text" disabled="disabled" placeholder="请输入名字">name</x-input>
            <x-input type="text" placeholder="请输入名字">name</x-input>
            <x-input type="password" placeholder="请输入密码">password</x-input>
            <x-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</x-input>
            <codes :codes="input_1"></codes>
            <p class="introduce">单选框<code>radio</code></p>
            <div style="display:flex;">
                <x-radio name="radio_1" checked="checked">单选1</x-radio>
                <x-radio name="radio_2">单选2</x-radio>
                <x-radio name="radio_3">单选3</x-radio>
                <x-radio name="radio_4" disabled>单选4</x-radio>
            </div>
            <codes :codes="radio_1"></codes>
        </div>
    </div>
</template>

<script>
import master from '@/components/master.vue';

import XButton from '../plugins/form/button.vue';
import XInput from '../plugins/form/input.vue';
import XRadio from '../plugins/form/radio.vue';
import Codes from '@/assets/codes.vue';

export default {
    name: 'from',
    data () {
        return {
            button_1:
`<x-button type="default">ok</x-button>
<x-button type="default" disabled="disabled">ok</x-button>
<x-button type="cancel">cancel</x-button>
<x-button type="cancel" disabled="disabled">cancel</x-button>`,
            input_1: 
`<x-input type="text" placeholder="请输入名字">name</x-input>
<x-input type="text" readonly="readonly" placeholder="请输入名字">name</x-input>
<x-input type="text" disabled="disabled" placeholder="请输入名字">name</x-input>
<x-input type="text" placeholder="请输入名字">name</x-input>
<x-input type="password" placeholder="请输入密码">password</x-input>
<x-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</x-input>`,
            radio_1: 
`<x-radio name="radio_1" checked="checked">单选1</x-radio>
<x-radio name="radio_2">单选2</x-radio>
<x-radio name="radio_3">单选3</x-radio>
<x-radio name="radio_4" disabled>单选4</x-radio>`
        }
    },
    components:{
        master,
        XButton,
        XInput,
        XRadio,
        Codes
    }
}
</script>

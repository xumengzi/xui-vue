<template>
    <div class="xui-vue markdown-section">
        <div class="main" >
            <h1 id=""><code>vue</code>自定义指令</h1>
            <blockquote>
                <p>说明: 所有的自定义指令可以单独放到<code>main.js</code>里,全局使用</p>
                <p>也可以放到一个专门的<code>directive.js</code>里, 然后导入即可使用</p>
            </blockquote>
            <h2>0.<code>directive.js</code>使用指南(推荐使用,有用的指令集合)</h2>
            <codes :codes="allDirectives"></codes>
            <hr>
            <blockquote>
                <p>说明: 以下是单个自定义指令介绍</p>
            </blockquote>
            <h2>1.<code>v-loadimg</code>指令</h2>
            <blockquote>
                <p>说明: 设置默认的图片以及404图片</p>
            </blockquote>
            <p>1.需要设置好默认图和404图片, 否则结果不是你想要的</p>
            <ul>
                <li>支持设置默认图, 不设置则不展示</li> 
                <li>404图片可以不设置, 但是需要设置好图片错误显示文案的样式</li> 
                <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
            </ul>
            <codes :codes="loadimg"></codes>
            <h2>2.<code>v-clickoutside</code>指令</h2>
            <blockquote>
                <p>说明: 需要点击除当前组件外关闭组件</p>
            </blockquote>
            <p>1.引用即可使用</p>
            <ul>
                <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
            </ul>
            <codes :codes="clickoutside"></codes>
            <h2>3.<code>v-copytoclipboard</code>指令</h2>
            <blockquote>
                <p>说明: 需要点击按钮或者<code>focus</code><code>input</code>时,复制对应文案</p>
            </blockquote>
            <p>1.引用即可使用</p>
            <ul>
                <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
            </ul>
            <codes :codes="copytoclipboard"></codes>
            <h2>4.<code>v-digitalScroll</code>指令</h2>
            <blockquote>
                <p>说明: 需要在展示数字的地方添加这个指令,即可给数字添加动画了</p>
            </blockquote>
            <p>1.引用即可使用</p>
            <ul>
                <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
            </ul>
            <codes :codes="digitalScroll"></codes>
            <p v-digitalScroll="digiNum"></p>
            <xui-button type="default" @click="handleClick">change</xui-button>
        </div>
    </div>
</template>

<script>
import Codes from '@/assets/codes.vue';

export default {
    name: 'show',
    data () {
        return {
            allDirectives: 
`//导入自定义指令js即可
import directive from '@/assets/js/directive';
Vue.use(directive);
<div v-clickoutside=""></div>
<div v-for="(item, index) in 10" :key="index"><img v-loadimg="item.url"/></div>
`,
            clickoutside: 
`//you know what I mean?
Vue.directive('clickoutside', {
    bind (el, binding, vnode) {
        function handleClick (e) {
            if (el.contains(e.target)) {
                return false;
            };
            if (binding.expression) {
                binding.value(e);
            };
        };
        el.__vueClickOutSide__ = handleClick;
        document.addEventListener('click', handleClick);
    },
    unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutSide__);
        delete el.__vueClickOutSide__;
    }
});
`,
            loadimg:
`//导入默认图片和404图片
let loadingImg = '';
let notFoundImg = '';
Vue.directive('loadImg', {
    inserted(el, binding){
        //设置默认加载图
        loadingImg && (el.src = loadingImg);
        //监听图片的加载情况,然后进行修改url
        let img = new Image();
        img.src = binding.value;
        img.onload = () =>{
            el.src = binding.value;
        };
        img.onerror = () =>{
            if (notFoundImg) {
                el.src = notFoundImg;
            } else{
                let div = document.createElement('div');
                div.innerHTML = '暂无图片';
                div.classList.add('noimg');
                el.parentNode.appendChild(div);
                el.remove();
            };
        };
    },
});
`,
            copytoclipboard: 
`//支持input的focus和按钮的复制
Vue.directive('copytoclipboard', {
    bind(el, binding){
        if (binding.arg == 'click') {
            el.onclick = copy;
        } else{
            el.onfocus = copy;
        };
        function copy(){
            if (document.execCommand('copy')) {
                if (el.select) {
                    el.select();
                    el.focus();
                    el.setSelectionRange(0, el.value.length);
                } else{
                    document.querySelector('.fake_input_value') && document.querySelector('.fake_input_value').remove();
                    let fakeInput = document.createElement('input');
                    fakeInput.style.position = 'absolute';
                    fakeInput.style.left = '-100%';
                    fakeInput.value = binding.value;
                    fakeInput.classList.add('fake_input_value');
                    fakeInput.setSelectionRange(0, el.value.length);
                    document.body.appendChild(fakeInput);
                    document.querySelector('.fake_input_value').select();
                    document.querySelector('.fake_input_value').focus();
                };
                document.execCommand('copy');
                document.querySelector('.fake_input_value') && document.querySelector('.fake_input_value').remove();
            } else{
                alert('请手动复制!');
            };
        }
    },
    unbind(el, binding){
        document.querySelector('.fake_input_value') && document.querySelector('.fake_input_value').remove();
    }
})
`,
            digiNum: 999,
            digitalScroll: `<p v-digitalScroll="999"></p>`
        }
    },
    methods: {
        handleClick(){
            this.digiNum = Math.round(Math.random() * 1000) + 100;
        }
    },
    components:{
        Codes,
    }
}
</script>
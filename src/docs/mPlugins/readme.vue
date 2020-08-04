<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1 id="插件">移动端组件库: XuiMUI</h1>
      <blockquote>
        <p>提示: 请在手机下查看或浏览器的手机模式下</p>
      </blockquote>
      <ul>
        <li>
          <p>
            简介: 一个基于
            <code>vuejs2.0</code>,可以提供丰富的方法,组件,插件的组件库.
          </p>
        </li>
        <li>
          <p>
            依赖:
            <code>vuejs</code>
          </p>
        </li>
        <li>
          <p>
            兼容性:
            反正很厉害就是了
          </p>
        </li>
      </ul>
      <codes :codes="instructions"></codes>
      <h5>个人项目,如有问题还请指出,不胜感激.</h5>
      <h5>欢迎不吝赐教</h5>
      <h6>
        联系我:
        <em>xumeng0611@gmail.com</em>
      </h6>
    </div>
  </div>
</template>

<script>
import Codes from "../../assets/codes.vue";

export default {
  name: "readme",
  data(){
    return{
      instructions: `使用方法如下
1. npm i xui-m-ui

全局导入插件
2. import XuiMUI from 'xui-m-ui/lib/XuiMbox.umd';
import 'xui-m-ui/lib/XuiMbox.css';

Vue.use(XuiMUI);

或者按需引入各个组件
import {
  XuiMSelector,
  XuiMMessage,
  XuiMButton,
  XuiMInput,
  XuiMRadio
} from 'xui-m-ui/lib/XuiMbox.umd';
import 'xui-m-ui/lib/XuiMbox.css';

Vue.use(XuiMSelector);
Vue.use(XuiMMessage);
Vue.use(XuiMButton);
Vue.use(XuiMInput);
Vue.use(XuiMRadio);

Vue.prototype.message = XuiMMessage.MessageService`,
    }
  },
  components:{
    Codes
  },
  mounted() {
    if ("ontouchstart" in window) {
      let tar = document.getElementById("app");
      ['.test','.main'].forEach(item=>{
        tar.querySelector(item).classList.add("folded");
      });
    }
  }
};
</script>
<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1 id="简介">使用方法</h1>
      <h2 id="项目名称-xui">
        项目名称:
        <code>{{$store.getters.projectName}}</code>
      </h2>
      <ul>
        <li>
          <p>
            以外链的形式加载组件库
          </p>
        </li>
      </ul>
      <codes :codes="link"></codes>
      <codes :codes="gzip"></codes>
      <ul>
        <li>
          <p>
            全局引入组件库:<code>XuiUI</code>
          </p>
        </li>
      </ul>
      <codes :codes="instructions"></codes>
      <ul>
        <li>
          <p>
            按需加载组件库:<code>XuiUI</code>
          </p>
        </li>
      </ul>
      <codes :codes="instructions1"></codes>
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
import Forms from "../docs/forms.vue";
import Plugins from "../docs/plugins/plugins.vue";
import Codes from "../assets/codes.vue";
import master from "@/components/master.vue";

export default {
  name: "useage",
  data() {
    return {
      msg: "Welcome to my xui-vue App",
      link: 'https://unpkg.com/xui-ui@^1/lib/xui.umd.js',
      gzip: 'https://unpkg.com/xui-ui@^1/lib/xui.umd.min.js',
      introduce: "How many codes must a man edit before you call him a master?",
      instructions: `npm install xui-ui
// main.js
import XuiUI from '../xui-ui/lib/fcbox.umd';
import '../xui-ui/lib/fcbox.css';
Vue.use(XuiUI);`,
      instructions1: `npm install xui-ui
// main.js
import {
  XuiCalender,
  XuiSlider,
  XuiCascader,
  XuiDigital,
  XuiTab,
  XuiRate,
  XuiDropdown,
  XuiPagination,
  XuiLoading,
  XuiMessage,
  XuiModal,
  XuiNotification,
  XuiButton,
  XuiInput,
  XuiRadio
} from '../xui-ui/lib/fcbox.umd';
import '../xui-ui/lib/fcbox.css';
Vue.use(XuiCalender);
...

Vue.prototype.test = XuiMessage.MessageService // message
...`,

    };
  },
  mounted() {
    this.$nextTick(function () {
      if ("ontouchstart" in window) {
        let tar = document.getElementById("app");
        tar.querySelector(".test").classList.add("folded");
        tar.querySelector(".main").classList.add("folded");
      }
    });
  },
  components: {
    Forms,
    Codes,
    master,
    Plugins,
  },
};
</script>
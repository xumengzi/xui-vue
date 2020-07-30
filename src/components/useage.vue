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
            全局引入组件库:<code>FcboxUI</code>
          </p>
        </li>
      </ul>
      <codes :codes="instructions"></codes>
      <ul>
        <li>
          <p>
            按需加载组件库:<code>FcboxUI</code>
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
import Forms from "../docs/forms.vue";
import Plugins from "../docs/plugins/plugins.vue";
import Codes from "../assets/codes.vue";
import master from "@/components/master.vue";

export default {
  name: "useage",
  data() {
    return {
      msg: "Welcome to my xui-vue App",
      introduce: "How many codes must a man edit before you call him a master?",
      instructions: `npm install fcbox-ui
// main.js
import FcboxUI from '../fcbox-ui/lib/fcbox.umd';
import '../fcbox-ui/lib/fcbox.css';
Vue.use(FcboxUI);`,
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
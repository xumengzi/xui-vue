<template>
  <div class="xui-m-vue markdown-section">
    <div class="main">
      <h1>message</h1>
      <blockquote>
        <p>
          说明: 用来提示用户,具体行为是出现一个
          <code>message</code>,然后一段时间后消失
        </p>
      </blockquote>
      <h5 id="使用及参数说明">使用及参数说明:</h5>
      <!-- <codes :codes="params1"></codes> -->
      <codes :codes="params"></codes>
      <ul>
        <li>
          <code>string</code>表示提示信息的文案
          <strong>必传</strong>
        </li>
        <li>
          <code>time</code>表示提示信息显示的时间,默认是1000ms
        </li>
        <li>
          <code>callback</code>表示提示信息消失后的回调
        </li>
        <li>
          没有你想要的功能? 快联系我:
          <code>xumeng0611@gmail.com</code>添加吧
        </li>
      </ul>
      <h3>效果展示</h3>
      <p>1.我们可以就配置一些显示的文字,默认时间为1s.</p>
      <xui-m-button type="default" @click="open1">试试看</xui-m-button>
      <codes :codes="open_1"></codes>
      <p>2.当然,我们也可以修改一下显示并消失的时间</p>
      <xui-m-button type="default" @click="open2">试试看</xui-m-button>
      <codes :codes="open_2"></codes>
      <p>3.如果你想文字显示完了,加一个回调,我们也是支持的哦~</p>
      <xui-m-button type="default" @click="open3">试试看</xui-m-button>
      <codes :codes="open_3"></codes>
    </div>
  </div>
</template>

<script>
import Codes from "@/assets/codes.vue";

export default {
  name: "Message",
  data() {
    return {
      params: `this.$message(string, time, callback)`,
      params1: `import xui-mMessage from 'xui-mjs';
Vue.use(xui-mMessage);
Vue.prototype.$message = xui-mMessage.MessageService;`,
      open_1: 'this.$message("hello,world")',
      open_2: 'this.$message("hello,world", 2000)',
      open_3: `this.$message(
  'hello, world', 
  1500, 
  function(){
    console.log('callback');
  }
)`
    };
  },
  mounted() {
    if ("ontouchstart" in window) {
      let tar = document.getElementById("app");
      tar.querySelector(".test").classList.add("folded");
      tar.querySelector(".main").classList.add("folded");
    }
  },
  methods: {
    open1() {
      this.$message("hello,world");
    },
    open2() {
      this.$message("hello,world", 2000);
    },
    open3() {
      let that = this;
      that.$message("hello, world", 1500, function() {
        that.$message("callback");
      });
    }
  },
  components: {
    Codes
  }
};
</script>
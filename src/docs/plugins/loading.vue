<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1>loading</h1>
      <blockquote>
        <p>说明: 用来缓解用户疲劳,提高用户等待积极性.</p>
      </blockquote>
      <h5 id="使用及参数说明">使用及参数说明:</h5>
      <codes :codes="params"></codes>
      <blockquote>
        <p>
          tips:
          <code>loading</code>的使用分两种方法, 一种内置的
          <code>$loading</code>, 另一种可以自定义名字
        </p>
      </blockquote>
      <ul>
        <li>
          <code>string</code>表示
          <code>loading</code>显示在这个里面, 也不是全屏
          <code>loading</code>, 默认全屏
        </li>
        <li>
          记得调
          <code>close</code>方法进行关闭哦
        </li>
        <li>
          没有你想要的功能? 快联系我:
          <code>xumeng0611@gmail.com</code>添加吧
        </li>
      </ul>
      <h3>效果展示</h3>
      <p>
        1.默认全屏
        <code>loading</code>
      </p>
      <xui-button type="default" @click="loading1">试试看</xui-button>
      <codes :codes="loading_1"></codes>
      <p>
        2.在指定元素内
        <code>loading</code>
      </p>
      <blockquote>
        <p>
          tips: 一定要给你指定的元素一个
          <code>position:relative;</code>
        </p>
      </blockquote>
      <xui-button type="default" :isDisabled="isDisabled" @click="loading2">试试看</xui-button>
      <div id="test"></div>
      <codes :codes="loading_2"></codes>
    </div>
  </div>
</template>

<script type="text/javascript">
import Codes from "@/assets/codes.vue";

export default {
  name: "xui-loading",
  data() {
    return {
      isDisabled: false,
      params: `let loading = this.$loading(string);
loading.close();`,
      loading_1: `let golbalLoading = this.$loading();
setTimeout(()=>{
  golbalLoading.close();
},2000);
`,
      loading_2: `let partLoading = this.$loading('#test');
setTimeout(()=>{
  partLoading.close();
},2000);
`,
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
    loading1() {
      let golbalLoading = this.$loading();
      setTimeout(() => {
        golbalLoading.close();
      }, 2000);
    },
    loading2() {
      this.isDisabled = true;
      let partLoading = this.$loading("#test");
      setTimeout(() => {
        partLoading.close();
        this.isDisabled = false;
      }, 2000);
    },
  },
  components: {
    Codes,
  },
};
</script>

<style >
#test {
  height: 300px;
  position: relative;
  background: #ccc;
}
</style>
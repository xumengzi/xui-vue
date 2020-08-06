<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1>modal</h1>
      <blockquote>
        <p>说明: 用来提示用户,是否进行下一步操作?</p>
      </blockquote>
      <h5 id="使用及参数说明">使用及参数说明:</h5>
      <codes :codes="params" link="PoNogYE"></codes>
      <ul>
        <li>所有的参数都是非必传,如果你觉得我写的文案也不错的话</li>
        <li>
          <code>isShowClose</code>表示是否显示右上角关闭按钮
        </li>
        <li>
          不限制按钮的个数,当然如果一个按钮都不配置, 那么保证
          <code>isShowClose</code>为
          <code>true</code>, 不然弹框无法关闭
        </li>
        <li>按钮都有回调,右上角的关闭按钮和取消按钮的回调是一样的</li>
        <li>
          没有你想要的功能? 快联系我:
          <code>xumeng0611@gmail.com</code>添加吧
        </li>
      </ul>
      <h3>效果展示</h3>
      <p>1.先来看看简单的效果,仅仅是弹个框</p>
      <xui-button type="default" @click="modal1">试试看</xui-button>
      <codes :codes="modal_1"></codes>
      <p>2.有些时候,我们的场景不太一样,PM不想要那个要右上角那个关闭按钮</p>
      <xui-button type="default" @click="modal2">试试看</xui-button>
      <codes :codes="modal_2"></codes>
    </div>
  </div>
</template>

<script type="text/javascript">
import Codes from "@/assets/codes.vue";

export default {
  name: "xui-loading",
  data() {
    return {
      params: `//组件使用
this.$modal({
  tips: string,
  text: string,
  isShowClose: boolean
  confirmBtn: {
    text: string,
    fn(){
      console.log('ok');
    }
  },
  cancelBtn: {
    text: string,
    fn(){
      console.log('cancel');
    }
  },
})`,
      modal_1: `this.$modal({
  tips: 'Title',
  text: 'some comments',
})`,
      modal_2: `this.$modal({
  tips: 'Title',
  text: 'some comments',
  confirmBtn: {
    text: 'confirm',
    fn(){
      console.log('confirm');
    }
  },
  cancelBtn: {
    text: 'cancel',
    fn(){
      console.log('cancel');
    }
  },
})`,
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
    modal1() {
      this.$modal({
        tips: "Title",
        text: "some comments",
      });
    },
    modal2() {
      let that = this;
      this.$modal({
        tips: "Title",
        text: "some comments",
        isShowClose: true,
        confirmBtn: {
          text: "confirm",
          fn() {
            this.$message("confirm");
          },
        },
        cancelBtn: {
          text: "cancel",
          fn() {
            this.$message("cancel");
          },
        },
      });
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
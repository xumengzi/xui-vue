<template>
  <div class="xui-m-vue">
    <div class="main">
      <p class="introduce">
        按钮
        <code>button</code>
      </p>
      <xui-m-button type="default" @click="handleClick">ok</xui-m-button>
      <xui-m-button type="default" isDisabled="true">ok</xui-m-button>
      <xui-m-button type="cancel">cancel</xui-m-button>
      <xui-m-button type="cancel" isDisabled="true">cancel</xui-m-button>
      <codes :codes="button_1"></codes>
      <p class="introduce">
        输入框
        <code>input</code>
      </p>
      <xui-m-input type="text" @handleChange="handleChange" v-model="test" placeholder="请输入名字">name</xui-m-input>
      <xui-m-input type="text" readonly="readonly" placeholder="请输入名字">name</xui-m-input>
      <xui-m-input type="text" isDisabled="true" placeholder="请输入名字">name</xui-m-input>
      <xui-m-input type="text" placeholder="请输入名字">name</xui-m-input>
      <xui-m-input type="password" placeholder="请输入密码">password</xui-m-input>
      <xui-m-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</xui-m-input>
      <codes :codes="input_1"></codes>
      <p class="introduce">
        单选框
        <code>radio</code>
      </p>
      <div style="display:flex;">
        <xui-m-radio name="radio_1" v-model="radio">单选1</xui-m-radio>
        <xui-m-radio name="radio_2" v-model="radio">单选2</xui-m-radio>
        <xui-m-radio name="radio_3" v-model="radio">单选3</xui-m-radio>
        <xui-m-radio name="radio_4" disabled>单选4</xui-m-radio>
      </div>
      <codes :codes="radio_1"></codes>
    </div>
  </div>
</template>

<script>
import master from "@/components/master.vue";
import Codes from "@/assets/codes.vue";

export default {
  name: "from",
  data() {
    return {
      input: 'nima',
      test: 'hello',
      radio: 'radio_2',
      button_1: `<xui-m-button type="default" @click="handleClick">ok</xui-m-button>
<xui-m-button type="default" isDisabled="true">ok</xui-m-button>
<xui-m-button type="cancel">cancel</xui-m-button>
<xui-m-button type="cancel" isDisabled="true">cancel</xui-m-button>`,
      input_1: `<xui-m-input type="text" placeholder="请输入名字" v-model="test">name</xui-m-input>
<xui-m-input type="text" readonly="readonly" placeholder="请输入名字">name</xui-m-input>
<xui-m-input type="text" isDisabled="true" placeholder="请输入名字">name</xui-m-input>
<xui-m-input type="text" placeholder="请输入名字">name</xui-m-input>
<xui-m-input type="password" placeholder="请输入密码">password</xui-m-input>
<xui-m-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</xui-m-input>`,
      radio_1: `radio: "radio_2"
<xui-m-radio name="radio_1" v-model="radio">单选1</xui-m-radio>
<xui-m-radio name="radio_2" v-model="radio">单选2</xui-m-radio>
<xui-m-radio name="radio_3" v-model="radio">单选3</xui-m-radio>
<xui-m-radio name="radio_4" v-model="radio" disabled>单选4</xui-m-radio>`
    };
  },
  mounted() {
    if ("ontouchstart" in window) {
      let tar = document.getElementById("app");
      tar.querySelector(".test").classList.add("folded");
      tar.querySelector(".main").classList.add("folded");
    }
  },
  watch: {
    radio(){
      this.$message(this.radio);
    }
  },
  methods: {
    handleChange(e){
      console.log(e)
    },
    handleClick(){
      this.$message('clicked');
    }
  },
  components: {
    master,
    Codes
  }
};
</script>

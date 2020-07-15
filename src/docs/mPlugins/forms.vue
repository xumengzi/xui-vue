<template>
  <div class="fc-vue">
    <div class="main">
      <p class="introduce">
        按钮
        <code>button</code>
      </p>
      <fc-button type="default" @click="handleClick">ok</fc-button>
      <fc-button type="default" isDisabled="true">ok</fc-button>
      <fc-button type="cancel">cancel</fc-button>
      <fc-button type="cancel" isDisabled="true">cancel</fc-button>
      <codes :codes="button_1"></codes>
      <p class="introduce">
        输入框
        <code>input</code>
      </p>
      <fc-input type="text" @handleChange="handleChange" v-model="test" placeholder="请输入名字">name</fc-input>
      <fc-input type="text" readonly="readonly" placeholder="请输入名字">name</fc-input>
      <fc-input type="text" isDisabled="true" placeholder="请输入名字">name</fc-input>
      <fc-input type="text" placeholder="请输入名字">name</fc-input>
      <fc-input type="password" placeholder="请输入密码">password</fc-input>
      <fc-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</fc-input>
      <codes :codes="input_1"></codes>
      <p class="introduce">
        单选框
        <code>radio</code>
      </p>
      <div style="display:flex;">
        <fc-radio name="radio_1" v-model="radio">单选1</fc-radio>
        <fc-radio name="radio_2" v-model="radio">单选2</fc-radio>
        <fc-radio name="radio_3" v-model="radio">单选3</fc-radio>
        <fc-radio name="radio_4" disabled>单选4</fc-radio>
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
      button_1: `<fc-button type="default" @click="handleClick">ok</fc-button>
<fc-button type="default" isDisabled="true">ok</fc-button>
<fc-button type="cancel">cancel</fc-button>
<fc-button type="cancel" isDisabled="true">cancel</fc-button>`,
      input_1: `<fc-input type="text" placeholder="请输入名字" v-model="test">name</fc-input>
<fc-input type="text" readonly="readonly" placeholder="请输入名字">name</fc-input>
<fc-input type="text" isDisabled="true" placeholder="请输入名字">name</fc-input>
<fc-input type="text" placeholder="请输入名字">name</fc-input>
<fc-input type="password" placeholder="请输入密码">password</fc-input>
<fc-input type="text" placeholder="请输入名字" isNecessary="true" isSearch="true">name</fc-input>`,
      radio_1: `radio: "radio_2"
<fc-radio name="radio_1" v-model="radio">单选1</fc-radio>
<fc-radio name="radio_2" v-model="radio">单选2</fc-radio>
<fc-radio name="radio_3" v-model="radio">单选3</fc-radio>
<fc-radio name="radio_4" v-model="radio" disabled>单选4</fc-radio>`
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
      this.$FcMessage(this.radio);
    }
  },
  methods: {
    handleChange(e){
      console.log(e)
    },
    handleClick(){
      this.$XxMessage('clicked');
    }
  },
  components: {
    master,
    Codes
  }
};
</script>

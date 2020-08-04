<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1>下拉框</h1>
      <blockquote>
        <p>说明: 当选项过多时，使用下拉菜单展示并选择内容</p>
      </blockquote>
      <h5>使用及参数说明:</h5>
      <codes :codes="params"></codes>
      <ul>
        <li>
          <code>selectorData</code>下拉框列表数据源, 类型为数组
          <strong>必传</strong>, 可以设置禁止选中
        </li>
        <li>
          <code>selectorValue</code>默认选中的一项
        </li>
        <li>
          <code>extralClass</code>自定义下拉框类名
        </li>
        <li>
          <code>sendChooseData</code>点击确定后的回调, 返回当前选择的
          <code>label</code>和
          <code>value</code>, 是一个对象
        </li>
        <li>
          没有你想要的功能? 快联系我:
          <code>xumeng0611@gmail.com</code>添加吧
        </li>
      </ul>
      <h3>效果展示</h3>
      <p>1. 先来看看一个例子吧</p>
      <xui-m-selector
        :selectorData="selectorData"
        :selectorValue="selectorValue"
        extralClass="hello-world"
        @sendChooseData="getChooseData"
      />
      <codes :codes="select_1"></codes>
    </div>
  </div>
</template>

<script>
import Codes from "@/assets/codes.vue";

export default {
  name: "Selector",
  data() {
    return {
      selectorData: [
        {
          label: "vuejs",
          value: "1"
        },
        {
          label: "reactjs",
          value: "2",
          disabled: true
        },
        {
          label: "angularjs",
          value: "3"
        },
        {
          label: "jquery",
          value: "4"
        }
      ],
      selectorValue: "",
      params: `<xui-m-selector 
  :selectorData="selectorData" 
  :selectorValue="selectorValue"
  extralClass="hello-world"
  @sendChooseData="getChooseData"
/>
`,
      select_1: `// 下拉框数据
selectorData: 
  [
    {
      label: 'vuejs',
      value: '1',
    },
    {
      label: 'reactjs',
      value: '2',
      disabled: true
    },
    {
      label: 'angularjs',
      value: '3',
    },
    {
      label: 'jquery',
      value: '4',
    },
],
selectorValue: '2',

// 获取选中的值
getChooseData(data){
  this.$message(data.label)
},
`,
      select_2: 2
    };
  },
  methods: {
    showVal() {
      console.log(this.selectedVal);
    },
    getChooseData(data) {
      this.$message(data.label);
    }
  },
  mounted() {
    if ("ontouchstart" in window) {
      let tar = document.getElementById("app");
      tar.querySelector(".test").classList.add("folded");
      tar.querySelector(".main").classList.add("folded");
    }
  },
  components: {
    Codes
  }
};
</script>
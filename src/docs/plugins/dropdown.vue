<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1>dropdown</h1>
      <blockquote>
        <p>说明: 当选项过多时，使用下拉菜单展示并选择内容</p>
      </blockquote>
      <h5>使用及参数说明:</h5>
      <codes :codes="params"></codes>
      <ul>
        <li>
          <code>list</code>下拉框列表数据源,类型为数组
          <strong>必传</strong>
        </li>
        <li>
          <code>select-val</code>选中后的回调,返回选中的
          <code>label</code>和
          <code>value</code>,类型为对象
        </li>
        <li>
          <code>default-val</code>默认选中的一项,类型为数字
          <code>value</code>,默认是0
        </li>
        <li>
          <code>is-search</code>是否显示搜索框,默认是
          <code>false</code>
        </li>
        <li>
          <code>placeholder</code>搜索框的文字,默认是
          <code>search</code>
        </li>
        <li>
          没有你想要的功能? 快联系我:
          <code>xumeng0611@gmail.com</code>添加吧
        </li>
      </ul>
      <h3>效果展示</h3>
      <p>1.先来一个最简单的配置</p>
      <xui-dropdown :list="list" :select-val="selectedVal" @change="showVal"></xui-dropdown>
      <codes :codes="select_1"></codes>
      <p>
        2.可以默认选中一项, 设置好对应的
        <code>default-val</code>值即可.这里我设置了
        <code>is-search</code>为
        <code>true</code>所以可以展示搜索框
      </p>
      <blockquote>
        <p>
          说明: 搜索依赖列表数据,支持
          <code>label</code>或者
          <code>value</code>搜索
        </p>
      </blockquote>
      <xui-dropdown
        :list="list"
        :select-val="selectedVal"
        @change="showVal"
        :is-search="true"
        placeholder="type to search"
        :default-val="2"
      ></xui-dropdown>
      <codes :codes="select_2"></codes>
    </div>
  </div>
</template>

<script>
import Codes from "@/assets/codes.vue";

export default {
  name: "dropdown",
  data() {
    return {
      list: [
        {
          value: 1,
          label: "vueJs",
        },
        {
          value: 2,
          label: "reactJs",
        },
        {
          value: 3,
          label: "angularJs",
        },
        {
          value: 4,
          label: "javascript",
        },
      ],
      selectedVal: {
        label: "",
        value: "",
      },
      params: `<xui-dropdown
    :list="list"
    :select-val="selectedVal"
    :is-search="true"
    placeholder="type to search"
    @change="showVal"
    :default-val="2"
    >
</xui-dropdown>
//声明好data属性等
list: [
    {
        value: 1,
        label: 'vueJs',
    },
    {
        value: 2,
        label: 'reactJs',
    },
    {
        value: 3,
        label: 'angularJs',
    }
],
selectedVal: {
    label: '',
    value: '',
},
//在methods里写获取选中的值的方法
showVal(data){
    console.log(this.selectedVal, data);
}
`,
      select_1: `<xui-dropdown
    :list="list"
    :select-val="selectedVal"
    @change="showVal"
>
</xui-dropdown>
`,
      select_2: `//只需添加需要选中的默认值即可
<xui-dropdown
    :list="list"
    :select-val="selectedVal"
    @change="showVal"
    :is-search="true"
    placeholder="type to search"
    :default-val="2"
>
</xui-dropdown>
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
    showVal(data) {
      const { label, value } = data;
      this.$message(label + ": " + value);
    },
  },
  components: {
    Codes,
  },
};
</script>
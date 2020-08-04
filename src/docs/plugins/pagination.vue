<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1>pagination</h1>
      <blockquote>
        <p>说明: 当加载/渲染所有数据将花费很多时间时,可切换页码浏览数据。</p>
      </blockquote>
      <h5 id="使用及参数说明">使用及参数说明:</h5>
      <codes :codes="params"></codes>
      <ul>
        <li>
          复制好相应的
          <code>html</code>,取一个独特的
          <code>id</code>,然后初始化
          <code>init</code>就可以使用了,非常方便
        </li>
        <li>
          <code>index</code>表示初始化显示哪一页的数字,默认是1
        </li>
        <li>
          <code>total</code>表示分页的总页数
          <strong>必传</strong>
        </li>
        <li>
          <code>isShowDot</code>表示是否将不可见的页数用...显示
        </li>
        <li>
          <code>isShowNum</code>表示是否显示当前页和总页数,格式为
          <code>index/total</code>
        </li>
        <li>
          <code>isJumpPage</code>表示是否显示支持跳转的输入框(纯数字),输入大于分页总数则默认跳至最后一页,仅可输入数字
        </li>
        <li>
          <code>click</code>可以获取当前点击分页的数字,可以用
          <code>ajax</code>获取数据,渲染页面
        </li>
        <li>
          <code>enter</code>用于跳转到对应的页面
        </li>
        <li>
          没有你想要的功能? 快联系我:
          <code>xumeng0611@gmail.com</code>添加吧
        </li>
      </ul>
      <h3>效果展示</h3>
      <p>1.先来看看最简单分页,麻雀虽小五脏俱全呀!</p>
      <xui-pagination :index="3" :total="5" @click="test1"></xui-pagination>
      <codes :codes="page_1"></codes>
      <p>2.慢慢的你需要更多功能来满足日益增长的需求,所以没办法你把所有的配置都写上去了,期待这生一个完美的解决方案</p>
      <xui-pagination
        :index="2"
        :total="10"
        isShowDot="true"
        isShowNum="true"
        isJumpPage="true"
        @click="test2"
        @enter="test2"
      ></xui-pagination>
      <codes :codes="page_2"></codes>
    </div>
  </div>
</template>

<script type="text/javascript">
import Codes from "@/assets/codes.vue";
export default {
  name: "pagination",
  data() {
    return {
      params: `<xui-pagination 
  :index="3"
  :total="10"
  isShowDot="true"
  isJumpPage="true"
  @click="test"
  @enter="test"
></xui-pagination>

//对应的回调
test(inx){
  console.log(inx);
}`,
      page_1: `<xui-pagination 
  :index="3"
  :total="10"
  @click="test"
></xui-pagination>
`,
      page_2: `<xui-pagination 
  :index="2"
  :total="10"
  isShowDot="true"
  isJumpPage="true"
  @click="test2"
  @enter="test2"
></xui-pagination>
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
    test1(inx) {
      this.$message(inx, 500);
    },
    test2(inx) {
      this.$message(inx, 500);
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
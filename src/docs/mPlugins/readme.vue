<template>
  <div class="xui-vue markdown-section">
    <div class="main">
      <h1 id="插件">移动端插件</h1>
      <blockquote>
        <p>提示: 请在手机下查看或浏览器的手机模式下</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "readme",
  mounted() {
    if ("ontouchstart" in window) {
      let tar = document.getElementById("app");
      tar.querySelector(".test").classList.add("folded");
      tar.querySelector(".main").classList.add("folded");
    }
  }
};
</script>
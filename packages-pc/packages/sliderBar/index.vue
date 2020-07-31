<template>
  <div id="sliderBar" class="xui_slider_bar" data-num="50">
    <div class="xui_bar">
      <div class="xui_bar_progress" style="width: 50%"></div>
      <span class="xui_bar_dot" data-num="50" style="left: 50%"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="less">
.xui_slider_bar {
  position: relative;
  width: 100%;
  height: 4px;
  z-index: 999;
  cursor: pointer;
  &::after {
    content: attr(data-num);
    display: block;
    position: absolute;
    right: -22px;
    top: -8px;
    color: #4eb900;
  }
  .xui_bar {
    position: relative;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.15);
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
  .xui_bar_progress {
    position: absolute;
    width: 100%;
    height: 3px;
    background: #4eb900;
    transition: 0.2s ease-out;
  }
  .xui_bar_dot {
    position: absolute;
    top: 1px;
    left: 0;
    transform: translate(-50%, -40%);
    width: 12px;
    height: 12px;
    cursor: pointer;
    border-radius: 50%;
    border: solid 2px #4eb900;
    background-color: #fff;
    &:focus,
    &:active {
      box-shadow: 0 0 0 5px rgba(78, 185, 0, 0.2);
    }
  }
  .xui_bar_dot {
    &:hover::before,
    &:active::before {
      content: attr(data-num);
      display: block;
      position: absolute;
      left: 2px;
      transform: translateX(-38%);
      top: -32px;
      max-width: 30em;
      width: 24px;
      text-align: center;
      font-size: 12px;
      padding: 0.1em 0.3em;
      background: #000;
      color: #fff;
      border-radius: 3px;
      z-index: 1000;
    }
  }
  .xui_bar_dot {
    &:hover::after,
    &:active::after {
      content: "";
      display: block;
      position: absolute;
      top: -17px;
      left: 1px;
      width: 8px;
      height: 8px;
      background: #000;
      border: 1px solid;
      border-color: #000 #000 transparent transparent;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }
  .xui_bar_dot:hover {
    border-color: #3b8704;
  }
  &.xui_slider_disabled {
    cursor: no-drop;
    .xui_bar_dot {
      border-color: #000;
      cursor: no-drop;
    }
    .xui_bar_progress,
    .xui_bar {
      opacity: 0.2;
    }
    &:after {
      opacity: 0.5;
    }
  }
}
</style>
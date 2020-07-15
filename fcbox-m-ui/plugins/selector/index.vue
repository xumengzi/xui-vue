<template>
  <div class="fcbox-container" :class="extralClass">
    <div class="fcbox-input" @click="handleShow">
      <span class="fcbox-choose">{{chooseVal || '请选择'}}</span>
      <span class="fcbox-icon" :class="{rotate: isShowSelect}"></span>
    </div>
    <div class="fcbox-selector" v-show="isShowSelect">
      <div class="fcbox-head">
        <button class="fcbox-btn fcbox-cancel" @click="handleCancel">取消</button>
        <div class="fcbox-message">
          <span>{{tips || '请选择'}}</span>
        </div>
        <button class="fcbox-btn fcbox-confirm" @click="handleConfirm">确定</button>
      </div>
      <div class="fcbox-body">
        <div class="fcbox-column">
          <ul class="fcbox-list" @touchstart="handleTouchStart" ref="list">
            <li class="fcbox-item" v-if="!selectorData.length">
              <span>请选择</span>
            </li>
            <li
              class="fcbox-item"
              v-for="(item, index) in selectorData"
              :key="item.value"
              @click="handleClick(item, index)"
              :class="{fcboxDisabled: item.disabled}"
            >
              <span>{{item.label}}</span>
            </li>
          </ul>
        </div>
        <div class="fcbox-mask"></div>
        <div class="fcbox-choose"></div>
        <div class="fcbox-mask mask-bottom"></div>
      </div>
      <div class="fcbox-mask-container" @click="handleCancel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FcSelector",
  data() {
    return {
      currentInx: 0,
      initHeight: 44,
      initPosY: null,
      diffY: null,
      tarDiff: null,
      isShowSelect: false,
      chooseObj: undefined,
      chooseVal: ""
    };
  },
  props: ["selectorData", "selectorValue", "tips", "extralClass"],
  mounted() {
    let res = this.findRes(this.selectorValue, 1);
    if (res) {
      this.chooseObj = res;
      this.chooseVal = res.label;
    }
  },
  watch: {},
  methods: {
    handleTouchStart(e) {
      if (!e.touches) {
        return;
      }
      const { pageX, pageY } = e.touches[0];
      this.initPosY = pageY;
      this.tarDiff = this.getCurrentDis();
      document.addEventListener("touchmove", this.touchMove);
      document.addEventListener("touchend", this.touchEnd);
    },
    findRes(target, source) {
      if (source) {
        return this.selectorData.find((item, index) => {
          return item.value == Math.abs(target);
        });
      } else {
        return this.selectorData.find((item, index) => {
          return index == Math.abs(target);
        });
      }
    },
    touchMove(e) {
      if (!e.touches) {
        return;
      }
      const { initHeight, selectorData } = this;
      const { pageX, pageY } = e.touches[0];
      let diff = pageY - this.initPosY;
      diff = -(this.tarDiff - diff);
      // 边界值判断, 允许滑出最长的距离为10px
      diff = diff > 10 ? 10 : diff;
      let max = (selectorData.length - 1) * initHeight + 10;
      diff = Math.abs(diff) > max ? -max : diff;
      this.diffY = diff;
      this.$refs.list.style.transition = "";
      this.$refs.list.style.transform = `translate3d(0, ${diff}px, 0)`;
    },
    touchEnd() {
      let diff = Math.round(this.diffY / this.initHeight);
      if (this.diffY > 0) {
        diff = -diff;
      }
      let res = this.findRes(diff);
      this.chooseObj = res;
      this.$refs.list.style.transition =
        "0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
      this.$refs.list.style.transform = `translate3d(0, ${diff *
        this.initHeight}px, 0)`;
      document.removeEventListener("touchmove", this.touchMove);
      document.removeEventListener("touchend", this.touchEnd);
    },
    getCurrentDis() {
      let target = getComputedStyle(this.$refs.list).transform.match(/\d+/g);
      return target ? target[target.length - 1] : null;
    },
    handleClick(item, index) {
      this.currentInx = index;
      this.chooseObj = item;
      this.$refs.list.style.transition =
        "0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
      this.$refs.list.style.transform = `translate3d(0, -${index *
        this.initHeight}px, 0)`;
    },
    handleShow() {
      this.isShowSelect = true;
      this.setHidden(true);
    },
    handleConfirm() {
      const { chooseObj = this.selectorData[0] } = this;
      if (chooseObj && !chooseObj.disabled) {
        this.$emit("sendChooseData", chooseObj);
        this.chooseVal = chooseObj.label;
      }
      this.handleCancel();
    },
    handleCancel() {
      this.isShowSelect = false;
      this.setHidden(false);
    },
    setHidden(bool) {
      document.body.style.overflow = bool ? "hidden" : "initial";
      document.getElementsByTagName("html")[0].style.overflow = bool
        ? "hidden"
        : "initial";
    }
  }
};
</script>

<style lang="less" scoped>
.fcbox-container {
  width: 100%;
  height: 100%;
  height: 44px;
  .fcbox-input {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6px;
    box-sizing: border-box;
    z-index: 9999;
    .fcbox-choose {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .fcbox-icon {
      width: 8px;
      height: 8px;
      position: absolute;
      top: 50%;
      right: 6px;
      margin-top: -8px;
      background: #fff;
      border: 1px solid;
      border-color: #ccc #ccc transparent transparent;
      transform: rotate(135deg);
      z-index: 9990;
      border-radius: 2px;
      transition: 0.3s ease;
      &.rotate {
        transform: rotate(-45deg);
        margin-top: -2px;
      }
    }
  }
  .fcbox-mask-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9998;
    background: transparent;
  }
}
.fcbox-selector {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 9999;
  animation: toToDown 0.3s 1 cubic-bezier(0.68, -0.55, 0.27, 1.55);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.43);
  user-select: none;
  .fcbox-head {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height: 44px;
    background: #ededed;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    z-index: 9999;
    .fcbox-btn {
      height: 100%;
      padding: 0 16px;
      font-size: 14px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .fcbox-cancel {
      color: #969799;
    }
    .fcbox-confirm {
      color: #576b95;
    }
    .fcbox-message {
      max-width: 50%;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
  }
  .fcbox-body {
    position: relative;
    flex: 1;
    display: flex;
    overflow: hidden;
    z-index: 9999;
    .fcbox-column {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      overflow: hidden;
      font-size: 16px;
    }
    .fcbox-list {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      // height: 44px;
      margin-top: -22px;
      padding: 0;
      .fcbox-item {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        list-style: none;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 44px;
        padding: 0 10px;
        color: #000;
        &.fcboxDisabled {
          color: #c0c4cc;
        }
        span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .fcbox-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      width: 100%;
      height: calc(50% - 14px);
      background-image: -webkit-linear-gradient(
          top,
          hsla(0, 0%, 100%, 0.9),
          hsla(0, 0%, 100%, 0.4)
        ),
        -webkit-linear-gradient(bottom, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
      background-image: linear-gradient(
          180deg,
          hsla(0, 0%, 100%, 0.9),
          hsla(0, 0%, 100%, 0.4)
        ),
        linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
      background-repeat: no-repeat;
      background-position: top, bottom;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      pointer-events: none;
    }
    .mask-bottom {
      top: inherit;
      bottom: 0;
    }
    .fcbox-choose {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 44px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      pointer-events: none;
      border: 1px solid #000;
      box-sizing: border-box;
      border-left: none;
      border-right: none;
    }
  }
}
@keyframes toToDown {
  0% {
    opacity: 0.2;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}
</style>
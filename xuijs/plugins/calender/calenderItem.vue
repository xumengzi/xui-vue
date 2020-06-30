<!-- 
  大号日历组件-组件小模块
-->
<template>
  <div class="xui-calender-item" :class="[extralClass]" @click="handleClick($event, item)">
    <span
      class="xui-calender-number"
      >{{ item.day || item }}</span
    >
  </div>
</template>

<script type="text/javascript">

export default {
  name: "calenderItem",
  data() {
    return {
    };
  },
  props: {
    item: {
      default() {
        return {
          projectList: []
        };
      }
    },
    index: {
      default() {
        return 0;
      }
    },
    extralClass: {},
    day: {
      default() {
        return 1;
      }
    }
  },
  methods: {
    handleClick(e, item){
      this.$parent.$emit('sendCurrentDate', item);
    }
  }
};
</script>

<style lang="less" scoped>
.xui-calender-item {
  position: relative;
  width: calc(100% / 7);
  display: inline-flex;
  height: 117px;
  padding: 6px;
  color: #5d8555;
  font-size: 14px;
  box-sizing: border-box;
  border-top: 1px solid #e3e7e2;
  border-right: 1px solid #e3e7e2;
  .more {
    position: absolute;
    right: 7px;
    bottom: 7px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #abc270;
    letter-spacing: 0;
    line-height: 18px;
  }
  &:nth-child(7n) {
    border-right: none;
  }
  &.prev-month,
  &.next-month {
    color: #d9dcde;
  }
  .xui-calender-number {
    position: absolute;
    left: 18px;
    bottom: 8px;
    &.isGray {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(188, 193, 202, 1);
      line-height: 20px;
    }
  }
}
</style>

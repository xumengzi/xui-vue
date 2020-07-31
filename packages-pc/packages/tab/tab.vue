<template>
  <div class="xui_tab" :class="{xui_tab_vertical: dir == 'Y'}">
    <ul class="xui_tab_head">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        :class="{xui_selected:index == navIndex}"
        @click="handleChangeTab(index)"
        v-html="item.title"
      ></li>
    </ul>
    <div class="xui_tab_body">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        :style="navIndex == index ? back : (dir == 'X' ? toRight : toBottom)"
        v-html="item.content"
      ></div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "XuiTab",
  data() {
    return {
      navIndex: "0",
      aniType: [
        {
          type: "none",
          sets: "",
        },
      ],
      toRight: {
        transform: "translateX(100%)",
        MozTransform: "translateX(100%)",
        msTransform: "translateX(100%)",
        WebkitTransform: "translateX(100%)",
      },
      toBottom: {
        transform: "translateY(100%)",
        MozTransform: "translateY(100%)",
        msTransform: "translateY(100%)",
        WebkitTransform: "translateY(100%)",
      },
      back: {
        transform: "translate(0%)",
      },
      dir: "X",
    };
  },
  props: {
    tabList: {
      type: Array,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: "X",
    },
  },
  created() {
    this.navIndex =
      this.activeIndex >= this.tabList.length
        ? this.tabList.length - 1
        : this.activeIndex;
    this.navIndex = this.navIndex < 0 ? 0 : this.navIndex;
    this.dir = this.direction.toUpperCase();
  },
  mounted() {
    this.$nextTick(function () {});
  },
  methods: {
    handleChangeTab(index) {
      this.navIndex = index;
      this.$emit("change", this);
    },
  },
  components: {},
};
</script>

<style lang="less">
.xui_tab {
  ul.xui_tab_head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #4eb900;
    li {
      list-style: none;
      padding: 0.3em 1em;
      margin: 1em 0.25em 0 0.25em;
      border: 1px solid #dbdbdb;
      border-bottom: 0px;
      border-radius: 0.28em 0.28em 0 0;
      line-height: 1.4;
      cursor: pointer;
      &.xui_selected {
        position: relative;
        border-color: #4eb900;
        &::before {
          content: "";
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          left: 0;
          bottom: -2px;
          z-index: 99;
        }
      }
    }
  }
  .xui_tab_body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      padding: 6px;
      box-sizing: border-box;
      -webkit-transform: translate(0);
      transform: translate(0);
      -webkit-transition: 0.4s ease;
      transition: 0.4s ease;
    }
  }
}
.xui_tab_vertical {
  display: flex;
  border: 1px solid #dbdbdb;
  .xui_tab_head {
    flex: 1;
  }
  ul.xui_tab_head {
    flex-direction: column;
    border-right: 1px solid #4eb900;
    border-bottom: none;
    li {
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-right: 0px;
      margin: 0 0 0.3em;
      border-radius: 0;
      &.xui_selected {
        position: relative;
        border-color: #4eb900;
        background: #4eb900;
        color: #fff;
      }
    }
  }
  .xui_tab_body {
    flex: 8;
  }
}
</style>
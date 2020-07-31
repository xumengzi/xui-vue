<template>
  <button class="xui_btn" ref="xuiButton" :class="styleType" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
export default {
  name: "XuiButton",
  data() {
    return {
      styleType: "",
    };
  },
  props: ["type", "styles", "isDisabled"],
  watch: {
    isDisabled() {
      this.setAttr();
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.setAttr();
      this.type == "default" && (this.styleType = "xui_btn_default ");
      this.type == "cancel" && (this.styleType = "xui_btn_cancel ");
      this.styleType += this.styles || "";
    });
  },
  methods: {
    setAttr() {
      if (this.isDisabled) {
        this.$refs.xuiButton.setAttribute("disabled", "");
      } else {
        this.$refs.xuiButton.removeAttribute("disabled");
      }
    },
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
input[disabled],
button[disabled] {
  cursor: not-allowed;
}
.xui_btn {
  position: relative;
  box-sizing: border-box;
  padding: 0.37em 0.57em;
  margin: 0.57em;
  border: 1px solid #dbdbdb;
  border-radius: 0.28em;
  font-size: 1em;
  padding-left: 1.14em;
  padding-right: 1.14em;
  white-space: nowrap;
  outline: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s;
}
button.xui_btn:active {
  top: 1px;
  /* box-shadow: none; */
}
button.xui_btn:disabled {
  color: #ccc;
  border-color: #ccc;
  background-color: #f8f9f8;
  box-shadow: none;
}
.xui_btn_default {
  color: #f8f9f8;
  border-color: #4eb900;
  background-color: #4eb900;
  /* box-shadow: 2px 2px 6px #4eb900bd; */
}
.xui_btn_default:hover {
  border-color: #3b8704;
  background-color: #3b8704;
}
.xui_btn-secondary {
  color: #f8f9f8;
  border-color: #fd7127;
  background-color: #fd7127;
  /* box-shadow: 2px 2px 6px #fd7127; */
}
.xui_btn-secondary:hover {
  border-color: #ec580a;
  background-color: #ec580a;
}
.xui_btn:disabled {
  color: #f8f9f8;
  border-color: #ccc;
  background-color: #ccc;
}
.xui_btn_cancel {
  color: #fd7127;
  border-color: #fd7127;
  background-color: #fff;
  /* box-shadow: 2px 2px 4px #fd7127; */
}
.xui_btn_cancel:not(:disabled):hover {
  color: #f8f9f8;
  border-color: #fd7127;
  background-color: #fd7127;
}
.xui_btn_cancel:disabled {
  color: #ccc;
  border-color: #ccc;
  background-color: #f8f9f8;
  box-shadow: none;
}
</style>


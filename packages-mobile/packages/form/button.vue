<template>
  <button class="fc_btn" ref="fcButton" :class="styleType" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
export default {
  name: "XuiMButton",
  data() {
    return {
      styleType: "",
    };
  },
  props: ["type", "styles", "isDisabled", "click"],
  watch: {
    isDisabled() {
      this.setAttr();
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.setAttr();
      this.type == "default" && (this.styleType = "fc_btn_default ");
      this.type == "cancel" && (this.styleType = "fc_btn_cancel ");
      this.styleType += this.styles || "";
    });
  },
  methods: {
    setAttr() {
      if (this.isDisabled) {
        this.$refs.fcButton.setAttribute("disabled", "");
      } else {
        this.$refs.fcButton.removeAttribute("disabled");
      }
    },
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
.fc_btn {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  padding: 0 14px;
  height: 30px;
  outline: none;
  background: none;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
button.fc_btn:active {
  top: 1px;
}
button.fc_btn:disabled {
  color: #ccc;
  border-color: #ccc;
  background-color: #f8f9f8;
  box-shadow: none;
}
.fc_btn_default {
  color: #f8f9f8;
  border-color: #9fd14b;
  background-color: #9fd14b;
}
.fc_btn_default:hover {
  border-color: #9bd43c;
  background-color: #9bd43c;
}
.fc_btn-secondary {
  color: #f8f9f8;
  border-color: #fd7127;
  background-color: #fd7127;
}
.fc_btn-secondary:hover {
  border-color: #ec580a;
  background-color: #ec580a;
}
.fc_btn:disabled {
  color: #f8f9f8;
  border-color: #ccc;
  background-color: #ccc;
}
.fc_btn_cancel {
  color: #fd7127;
  border-color: #fd7127;
  background-color: #fff;
}
.fc_btn_cancel:not(:disabled):hover {
  color: #f8f9f8;
  border-color: #fd7127;
  background-color: #fd7127;
}
.fc_btn_cancel:disabled {
  color: #ccc;
  border-color: #ccc;
  background-color: #f8f9f8;
  box-shadow: none;
}
</style>


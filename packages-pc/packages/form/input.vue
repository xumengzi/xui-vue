<template>
  <div class="xui_item">
    <label :class="{xui_input_required: isSearch}">
      <slot></slot>
    </label>
    <div class="xui_content" :class="{xui_input_search: isNecessary}">
      <input
        :type="type"
        :readonly="readonly"
        :class="styleType"
        :disabled="disabled"
				:value="value"
        class="xui_input"
        ref="input"
        :maxlength="limit"
        @focus="handleFocus"
				@input="handleInput"
        @change="handleChange"
        @keyup="handleKeyup"
        @keydown="handleKeydown"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "XuiInput",
  data() {
    return {
      styleType: ""
    };
  },
  props: [
    "type",
    "label",
    "placeholder",
    "isNecessary",
		"isSearch",
		"isDisabled",
    "readonly",
    "disabled",
    "styles",
    "value",
    "limit",
  ],
  mounted() {
		this.styleType += this.styles || "";
  },
  methods: {
		getInput() {
			return this.$refs.input;
		},
		handleInput(e){
      this.$emit("input", e.target.value);
		},
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleKeyup(e) {
      this.$emit("keyup", e.target.value);
    },
    handleKeydown(e){
      this.$emit("keydown", e);
    },
    handleFocus(e){
      this.$emit("focus", e.target.value);
    },
    handleBlur(e){
      this.$emit("handleBlur", e.target.value);
    },
		setAttr(){
      const { input } = this.$refs;
			if(this.isDisabled){
				input.setAttribute('disabled', '');
			}else{
				input.removeAttribute('disabled');
			}
		},
  }
};
</script>

<style lang="less" scoped>
.xui_item {
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
}
.xui_content {
  position: relative;
}
input[disabled],
button[disabled] {
  cursor: not-allowed;
  border-color: #dbdbdb;
  box-shadow: none;
}
input[readonly]:focus,
button[readonly]:focus {
  box-shadow: none;
  border-color: #dbdbdb;
}
.xui_input {
  position: relative;
  width: 200px;
  box-sizing: border-box;
  padding: 0.37em 0.57em;
  margin: 0.57em;
  border: 1px solid #dbdbdb;
  border-radius: 0.28em;
  font-size: 1em;
  line-height: 1.4;
  outline: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.xui_input:focus,
.xui_textarea:focus {
  border-color: #87cba3;
  box-shadow: 0px 0px 0 #4eb900bd;
}
.xui_input_required::before {
  content: "*";
  color: red;
}
.xui_input_search::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  top: 50%;
  left: 1em;
  margin-top: -10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEUAAABQUFBQUFBQUFBRUVFQUFBRUVFQUFBQUFBRUVFQUFBQUFBQUFBQUFBRUVFQUFBQUFBQUFBQUFBRUVGZ7hPRAAAAE3RSTlMAEIDA0M/woGCwcEBQIODfkDCvpc/GRgAAAKVJREFUOMu9k9kOQiEMROmUW5bLovL//6o3xiCLIb7QBxIyp52hCWprkQVg4y/55MIAXuc51W8Ces/xYia601St+Bj7L70Wm95fqI2buhyMrsO2JlSo95TY8DyEMv77BgwAsALccsJfGWIZALm3e/D9HtJikzn0lm0K5wZPzVT7H+WgMXa2H//s9Iw4tRgARlJQNCVU9HDw1/sqMa2tRFh8pKD21BMmlQQZQPOajwAAAABJRU5ErkJggg==)
    no-repeat center center;
  background-size: contain;
  z-index: 9999;
}
.xui_input_search .xui_input {
  text-indent: 1.5em;
}
</style>
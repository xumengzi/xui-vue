<template>
  <div class="fc_item">
    <label :class="{fc_input_required: isSearch}">
      <slot></slot>
    </label>
    <div class="fc_content" :class="{fc_input_search: isNecessary}">
      <input
        :type="type"
        :readonly="readonly"
        :class="styleType"
        :disabled="disabled"
				:value="value"
        class="fc_input"
        ref="input"
        :maxlength="limit"
				@input="handleInput"
        @change="handleChange($event)"
        @keyup="handleKeyup($event)"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "FcInput",
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
		this.setAttr();
  },
  watch: {
		isDisabled(){
			this.setAttr();
		}
	},
  methods: {
		getInput() {
			return this.$refs.input;
		},
		handleInput(e){
			this.$emit("input", e.target.value);
		},
    handleChange(e) {
      this.$emit("handleChange", e.target.value);
    },
    handleKeyup(e) {
      this.$emit("handleKeyup", e.target.value);
		},
		setAttr(){
			if(this.isDisabled){
				this.$refs.input.setAttribute('disabled', '');
			}else{
				this.$refs.input.removeAttribute('disabled');
			}
		},
  }
};
</script>

<style lang="less" scoped>
.fc_item {
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
}
.fc_content {
  position: relative;
  margin: 10px;
  flex: 1;
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
.fc_input {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  outline: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.fc_input:focus,
.fc_textarea:focus {
  border-color: #87cba3;
  box-shadow: 0px 0px 0 #4eb900bd;
}
.fc_input_required::before {
  content: "*";
  color: red;
}
.fc_input_search::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  top: 50%;
  left: 4px;
  margin-top: -10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEUAAABQUFBQUFBQUFBRUVFQUFBRUVFQUFBQUFBRUVFQUFBQUFBQUFBQUFBRUVFQUFBQUFBQUFBQUFBRUVGZ7hPRAAAAE3RSTlMAEIDA0M/woGCwcEBQIODfkDCvpc/GRgAAAKVJREFUOMu9k9kOQiEMROmUW5bLovL//6o3xiCLIb7QBxIyp52hCWprkQVg4y/55MIAXuc51W8Ces/xYia601St+Bj7L70Wm95fqI2buhyMrsO2JlSo95TY8DyEMv77BgwAsALccsJfGWIZALm3e/D9HtJikzn0lm0K5wZPzVT7H+WgMXa2H//s9Iw4tRgARlJQNCVU9HDw1/sqMa2tRFh8pKD21BMmlQQZQPOajwAAAABJRU5ErkJggg==)
    no-repeat center center;
  background-size: contain;
  z-index: 9999;
}
.fc_input_search .fc_input {
  text-indent: 16px;
}
</style>
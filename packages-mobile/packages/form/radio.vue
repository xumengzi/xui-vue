<template>
  <div class="fc_radio_content">
    <input
      class="fc_radio"
      :checked="value == name"
      :disabled="isDisabled"
      :id="name"
      type="radio"
      @input="handleInput"
      @change="handleChange"
      name="radio"
    />
    <label :for="name" class="fc_radio_box">
      <slot></slot>
    </label>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "XuiMRadio",
  data() {
    return {};
  },
  props: ["value", "name", "disabled"],
  computed: {
    isDisabled() {
      return this.disabled;
    }
  },
  methods:{
    handleInput(e){
      this.$emit('input', e.target.getAttribute('id'))
    },
    handleChange(e){
      this.$emit('input', e.target.getAttribute('id'))
    }
  }
};
</script>

<style lang="less" scoped>
.fc_radio_box {
  position: relative;
  padding-left: 1.5em;
  margin: 0.57em;
  display: inline-block;
}
.fc_radio_box::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0.6em;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1em;
  border: 1px solid #999;
  border-radius: 50%;
}
.fc_radio {
  display: none;
}
.fc_radio:checked + .fc_radio_box::before {
  border-color: #4eb900;
}
.fc_radio:checked + .fc_radio_box::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0.6em;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  animation: 0.1s scale ease-in;
  transform-origin: center center;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background: #4eb900;
}
.fc_radio:disabled + .fc_radio_box,
.fc_radio:checked + .fc_radio_box::before {
  color: #ccc;
  cursor: not-allowed;
}
@keyframes scale {
  0% {
    transform: translate(-50%, -50%) scale(0.4);
    transform-origin: center center;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.4);
    transform-origin: center center;
  }
}
</style>
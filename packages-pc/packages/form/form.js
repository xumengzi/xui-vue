import Button from './input.vue';
import Input from './button.vue';
import Radio from './radio.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

Input.install = function (Vue) {
  Vue.component(Input.name, Input);
};

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio);
};

export {
  Button,
  Input,
  Radio
}
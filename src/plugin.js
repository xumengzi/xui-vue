import Vue from 'vue';

import XuiUI from '../xui-ui/lib/xui.umd.min';
import '../xui-ui/lib/xui.css';

Vue.use(XuiUI);

import XuiDigital from '../packages-pc/packages/digital/digital.js';

Vue.use(XuiDigital); 

// import {
//   Input as XuiInput,
// } from '../packages-pc/packages/form/form.js';
// Vue.use(XuiInput);

// import directive from '../packages-pc/utils/directive';
// Vue.use(directive);
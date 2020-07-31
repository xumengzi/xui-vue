/*! hash:f4b38b42dd030637774f, chunkhash:c5b6e74694add1220181, name:xui-m.umd, filebase:xui-m.umd.js, query:, file:xui-m.umd.js */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xui-m"] = factory(require("vue"));
	else
		root["xui-m"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "12a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_44432f88_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c88");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_44432f88_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_44432f88_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_44432f88_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2825":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4eff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_5cc6fb70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2825");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_5cc6fb70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_5cc6fb70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_5cc6fb70_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "622f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "65f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_918d57ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("622f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_918d57ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_918d57ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_918d57ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6c62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4906e1ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d552");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4906e1ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4906e1ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4906e1ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8c88":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab1b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d9b7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d552":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d9b7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7584ea0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/selector/index.vue?vue&type=template&id=4906e1ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fcbox-container",class:_vm.extralClass},[_c('div',{staticClass:"fcbox-input",on:{"click":_vm.handleShow}},[_c('span',{staticClass:"fcbox-choose"},[_vm._v(_vm._s(_vm.chooseVal || '请选择'))]),_c('span',{staticClass:"fcbox-icon",class:{rotate: _vm.isShowSelect}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowSelect),expression:"isShowSelect"}],staticClass:"fcbox-selector"},[_c('div',{staticClass:"fcbox-head"},[_c('button',{staticClass:"fcbox-btn fcbox-cancel",on:{"click":_vm.handleCancel}},[_vm._v("取消")]),_c('div',{staticClass:"fcbox-message"},[_c('span',[_vm._v(_vm._s(_vm.tips || '请选择'))])]),_c('button',{staticClass:"fcbox-btn fcbox-confirm",on:{"click":_vm.handleConfirm}},[_vm._v("确定")])]),_c('div',{staticClass:"fcbox-body"},[_c('div',{staticClass:"fcbox-column"},[_c('ul',{ref:"list",staticClass:"fcbox-list",on:{"touchstart":_vm.handleTouchStart}},[(!_vm.selectorData.length)?_c('li',{staticClass:"fcbox-item"},[_c('span',[_vm._v("请选择")])]):_vm._e(),_vm._l((_vm.selectorData),function(item,index){return _c('li',{key:item.value,staticClass:"fcbox-item",class:{fcboxDisabled: item.disabled},on:{"click":function($event){return _vm.handleClick(item, index)}}},[_c('span',[_vm._v(_vm._s(item.label))])])})],2)]),_c('div',{staticClass:"fcbox-mask"}),_c('div',{staticClass:"fcbox-choose"}),_c('div',{staticClass:"fcbox-mask mask-bottom"})]),_c('div',{staticClass:"fcbox-mask-container",on:{"click":_vm.handleCancel}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages-mobile/packages/selector/index.vue?vue&type=template&id=4906e1ac&scoped=true&

// CONCATENATED MODULE: ./packages-mobile/utils/index.js
const removeAllDom = function (list) {
  if (list) {
    [...list].forEach(item => {
      item.remove();
    });
  }
};

const dispatch = (componentName, eventName, params) => {
  var parent = undefined.$parent || undefined.$root;
  var name = parent.$options.componentName;

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.componentName;
    }
  }

  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params));
  }
};

const setHidden = bool => {
  document.body.style.overflow = bool ? "hidden" : "initial";
  document.getElementsByTagName("html")[0].style.overflow = bool ? "hidden" : "initial";
};


// CONCATENATED MODULE: ./packages-mobile/utils/constant.js
const cubicBezier = '0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/selector/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var selectorvue_type_script_lang_js_ = ({
  name: "XuiMSelector",

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

  methods: {
    handleTouchStart(e) {
      if (!e.touches) {
        return;
      }

      const {
        pageX,
        pageY
      } = e.touches[0];
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

      const {
        initHeight,
        selectorData
      } = this;
      const {
        pageX,
        pageY
      } = e.touches[0];
      let diff = pageY - this.initPosY;
      diff = -(this.tarDiff - diff); // 边界值判断, 允许滑出最长的距离为10px

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
      this.$refs.list.style.transition = "0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
      this.$refs.list.style.transform = `translate3d(0, ${diff * this.initHeight}px, 0)`;
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
      this.$refs.list.style.transition = cubicBezier;
      this.$refs.list.style.transform = `translate3d(0, -${index * this.initHeight}px, 0)`;
    },

    handleShow() {
      this.isShowSelect = true;
      setHidden(true);
    },

    handleConfirm() {
      const {
        chooseObj = this.selectorData[0]
      } = this;

      if (chooseObj && !chooseObj.disabled) {
        this.$emit("sendChooseData", chooseObj);
        this.chooseVal = chooseObj.label;
      }

      this.handleCancel();
    },

    handleCancel() {
      this.isShowSelect = false;
      setHidden(false);
    }

  }
});
// CONCATENATED MODULE: ./packages-mobile/packages/selector/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_selectorvue_type_script_lang_js_ = (selectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages-mobile/packages/selector/index.vue?vue&type=style&index=0&id=4906e1ac&lang=less&scoped=true&
var selectorvue_type_style_index_0_id_4906e1ac_lang_less_scoped_true_ = __webpack_require__("6c62");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages-mobile/packages/selector/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_selectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4906e1ac",
  null
  
)

/* harmony default export */ var selector = (component.exports);
// CONCATENATED MODULE: ./packages-mobile/packages/selector/index.js


selector.install = function (Vue) {
  Vue.component(selector.name, selector);
};

/* harmony default export */ var packages_selector = (selector);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7584ea0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/message/message.vue?vue&type=template&id=26e25e34&
var messagevue_type_template_id_26e25e34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Fc_message"},[_c('span',[_vm._v(_vm._s(_vm.tips))])])}
var messagevue_type_template_id_26e25e34_staticRenderFns = []


// CONCATENATED MODULE: ./packages-mobile/packages/message/message.vue?vue&type=template&id=26e25e34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/message/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  name: "XuiMMessage",

  data() {
    return {
      tips: "",
      duration: 1000
    };
  },

  mounted() {
    this.$nextTick(function () {
      this.tips = this.$options.tips;
      this.duration = this.$options.duration;
      setTimeout(() => {
        this.$el.remove();
        this.$options.fn && this.$options.fn();
      }, this.duration);
    });
  }

});
// CONCATENATED MODULE: ./packages-mobile/packages/message/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages-mobile/packages/message/message.vue?vue&type=style&index=0&lang=less&
var messagevue_type_style_index_0_lang_less_ = __webpack_require__("ab1b");

// CONCATENATED MODULE: ./packages-mobile/packages/message/message.vue






/* normalize component */

var message_component = normalizeComponent(
  message_messagevue_type_script_lang_js_,
  messagevue_type_template_id_26e25e34_render,
  messagevue_type_template_id_26e25e34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var message = (message_component.exports);
// CONCATENATED MODULE: ./packages-mobile/packages/message/message.js


let messageConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(message);

const MessageService = function (tips = 'tips', duration = 1000, fn) {
  let messageObj = new messageConstructor({
    tips,
    duration,
    fn
  });
  let messageEle = messageObj.$mount().$el;
  document.body.appendChild(messageEle);
  return messageObj;
};

/* harmony default export */ var message_message = ({
  install(Vue) {
    Vue.prototype.$XuiMMessage = MessageService;
  },

  MessageService
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7584ea0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/form/input.vue?vue&type=template&id=5cc6fb70&scoped=true&
var inputvue_type_template_id_5cc6fb70_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fc_item"},[_c('label',{class:{fc_input_required: _vm.isSearch}},[_vm._t("default")],2),_c('div',{staticClass:"fc_content",class:{fc_input_search: _vm.isNecessary}},[_c('input',{ref:"input",staticClass:"fc_input",class:_vm.styleType,attrs:{"type":_vm.type,"readonly":_vm.readonly,"disabled":_vm.disabled,"maxlength":_vm.limit,"placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"input":_vm.handleInput,"change":function($event){return _vm.handleChange($event)},"keyup":function($event){return _vm.handleKeyup($event)}}})])])}
var inputvue_type_template_id_5cc6fb70_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages-mobile/packages/form/input.vue?vue&type=template&id=5cc6fb70&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/form/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: "XuiMInput",

  data() {
    return {
      styleType: ""
    };
  },

  props: ["type", "label", "placeholder", "isNecessary", "isSearch", "isDisabled", "readonly", "disabled", "styles", "value", "limit"],

  mounted() {
    this.styleType += this.styles || "";
    this.setAttr();
  },

  watch: {
    isDisabled() {
      this.setAttr();
    }

  },
  methods: {
    getInput() {
      return this.$refs.input;
    },

    handleInput(e) {
      this.$emit("input", e.target.value);
    },

    handleChange(e) {
      this.$emit("handleChange", e.target.value);
    },

    handleKeyup(e) {
      this.$emit("handleKeyup", e.target.value);
    },

    setAttr() {
      if (this.isDisabled) {
        this.$refs.input.setAttribute('disabled', '');
      } else {
        this.$refs.input.removeAttribute('disabled');
      }
    }

  }
});
// CONCATENATED MODULE: ./packages-mobile/packages/form/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages-mobile/packages/form/input.vue?vue&type=style&index=0&id=5cc6fb70&lang=less&scoped=true&
var inputvue_type_style_index_0_id_5cc6fb70_lang_less_scoped_true_ = __webpack_require__("4eff");

// CONCATENATED MODULE: ./packages-mobile/packages/form/input.vue






/* normalize component */

var input_component = normalizeComponent(
  form_inputvue_type_script_lang_js_,
  inputvue_type_template_id_5cc6fb70_scoped_true_render,
  inputvue_type_template_id_5cc6fb70_scoped_true_staticRenderFns,
  false,
  null,
  "5cc6fb70",
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7584ea0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/form/button.vue?vue&type=template&id=44432f88&scoped=true&
var buttonvue_type_template_id_44432f88_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"fcButton",staticClass:"fc_btn",class:_vm.styleType,on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var buttonvue_type_template_id_44432f88_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages-mobile/packages/form/button.vue?vue&type=template&id=44432f88&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/form/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "XuiMButton",

  data() {
    return {
      styleType: ""
    };
  },

  props: ["type", "styles", "isDisabled", "click"],
  watch: {
    isDisabled() {
      this.setAttr();
    }

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
    }

  }
});
// CONCATENATED MODULE: ./packages-mobile/packages/form/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages-mobile/packages/form/button.vue?vue&type=style&index=0&id=44432f88&lang=less&scoped=true&
var buttonvue_type_style_index_0_id_44432f88_lang_less_scoped_true_ = __webpack_require__("12a2");

// CONCATENATED MODULE: ./packages-mobile/packages/form/button.vue






/* normalize component */

var button_component = normalizeComponent(
  form_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_44432f88_scoped_true_render,
  buttonvue_type_template_id_44432f88_scoped_true_staticRenderFns,
  false,
  null,
  "44432f88",
  null
  
)

/* harmony default export */ var form_button = (button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7584ea0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/form/radio.vue?vue&type=template&id=918d57ca&scoped=true&
var radiovue_type_template_id_918d57ca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fc_radio_content"},[_c('input',{staticClass:"fc_radio",attrs:{"disabled":_vm.isDisabled,"id":_vm.name,"type":"radio","name":"radio"},domProps:{"checked":_vm.value == _vm.name},on:{"input":_vm.handleInput,"change":_vm.handleChange}}),_c('label',{staticClass:"fc_radio_box",attrs:{"for":_vm.name}},[_vm._t("default")],2)])}
var radiovue_type_template_id_918d57ca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages-mobile/packages/form/radio.vue?vue&type=template&id=918d57ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages-mobile/packages/form/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
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
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.getAttribute('id'));
    },

    handleChange(e) {
      this.$emit('input', e.target.getAttribute('id'));
    }

  }
});
// CONCATENATED MODULE: ./packages-mobile/packages/form/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages-mobile/packages/form/radio.vue?vue&type=style&index=0&id=918d57ca&lang=less&scoped=true&
var radiovue_type_style_index_0_id_918d57ca_lang_less_scoped_true_ = __webpack_require__("65f1");

// CONCATENATED MODULE: ./packages-mobile/packages/form/radio.vue






/* normalize component */

var radio_component = normalizeComponent(
  form_radiovue_type_script_lang_js_,
  radiovue_type_template_id_918d57ca_scoped_true_render,
  radiovue_type_template_id_918d57ca_scoped_true_staticRenderFns,
  false,
  null,
  "918d57ca",
  null
  
)

/* harmony default export */ var form_radio = (radio_component.exports);
// CONCATENATED MODULE: ./packages-mobile/packages/form/form.js




input.install = function (Vue) {
  Vue.component(input.name, input);
};

form_button.install = function (Vue) {
  Vue.component(form_button.name, form_button);
};

form_radio.install = function (Vue) {
  Vue.component(form_radio.name, form_radio);
};


// CONCATENATED MODULE: ./packages-mobile/index.js



const components = [packages_selector, input, form_button, form_radio];

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return;
  }

  ; // 注册全局组件

  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$message = message_message.MessageService;
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

; // 整体导出, Vue.use(xx)

/* harmony default export */ var packages_mobile = (install); // 单个导出, Vue.use(xx)


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport XuiMSelector */__webpack_require__.d(__webpack_exports__, "XuiMSelector", function() { return packages_selector; });
/* concated harmony reexport XuiMMessage */__webpack_require__.d(__webpack_exports__, "XuiMMessage", function() { return message_message; });
/* concated harmony reexport XuiMButton */__webpack_require__.d(__webpack_exports__, "XuiMButton", function() { return input; });
/* concated harmony reexport XuiMInput */__webpack_require__.d(__webpack_exports__, "XuiMInput", function() { return form_button; });
/* concated harmony reexport XuiMRadio */__webpack_require__.d(__webpack_exports__, "XuiMRadio", function() { return form_radio; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_mobile);



/***/ })

/******/ });
});
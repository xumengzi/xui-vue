<template>
  <div class="test">
    <span class="fold" @click="handleFold"></span>
    <ul class="nav">
      <li>
        <a href="https://www.xumeng.ink/book/" target="_blank">我的网站</a>
      </li>
      <li>
        <a href="https://github.com/xumengzi/xui-vue" target="_blank">github</a>
      </li>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/useage">使用方法</router-link>
      </li>
      <li>
        <router-link to="/Forms">表单系列</router-link>
      </li>
      <li>
        <router-link to="/Learning">学习系列</router-link>
      </li>
      <li>
        <router-link to="/Directive">指令系列</router-link>
      </li>
      <li>
        <router-link to="/Plugins">插件系列</router-link>
        <ul>
          <li>
            <router-link to="/Plugins/Message">消息提示 message</router-link>
            <router-link to="/Plugins/Notification">通知提醒 notification</router-link>
            <router-link to="/Plugins/Loading">加载 loading</router-link>
            <router-link to="/Plugins/Modal">对话弹框 modal</router-link>
            <router-link to="/Plugins/Rate">评分 rate</router-link>
            <router-link to="/Plugins/Digital">数字输入框 digital</router-link>
            <router-link to="/Plugins/Dropdown">下拉框 dropdown</router-link>
            <router-link to="/Plugins/Tab">tab切换 tabChange</router-link>
            <router-link to="/Plugins/Pagination">分页 pagination</router-link>
            <router-link to="/Plugins/Cascader">三级联动 cascader</router-link>
            <router-link to="/Plugins/Slider">幻灯片 slider</router-link>
            <router-link to="/Plugins/Calender">日历 calendar</router-link>
            <router-link to="/Plugins/SliderBar">滑动选择框 sliderBar</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/mPlugins">移动端插件系列</router-link>
        <ul>
          <li>
            <router-link to="/mPlugins/Form">表单 form</router-link>
            <router-link to="/mPlugins/Message">提示 Message</router-link>
            <router-link to="/mPlugins/Selector">下拉框 Selector</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/Log">日志</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Forms from "@/docs/forms.vue";
import Learning from "@/docs/learning.vue";
import Directive from "@/docs/directive.vue";
import Log from "@/docs/log.vue";
import Plugins from "@/docs/plugins/plugins.vue";
import Message from "@/docs/plugins/message.vue";
import Notification from "@/docs/plugins/notification.vue";
import Loading from "@/docs/plugins/loading.vue";
import Modal from "@/docs/plugins/modal.vue";
import Digital from "@/docs/plugins/digital.vue";
import Rate from "@/docs/plugins/rate.vue";
import Dropdown from "@/docs/plugins/dropdown.vue";
import Tab from "@/docs/plugins/tab.vue";
import Pagination from "@/docs/plugins/pagination.vue";
import Cascader from "@/docs/plugins/cascader.vue";
import Calender from "@/docs/plugins/calender.vue";
import Slider from "@/docs/plugins/slider.vue";
import SliderBar from "@/docs/plugins/sliderBar.vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to my xui-vue App",
    };
  },
  mounted() {},
  methods: {
    handleFold() {
      let tar = document.getElementById("app");
      tar.querySelector(".test").classList.toggle("folded");
      tar.querySelector(".main").classList.toggle("folded");
    },
  },
  components: {
    Forms,
    Learning,
    Directive,
    Log,
    Plugins,
    Message,
    Notification,
    Loading,
    Modal,
    Rate,
    Digital,
    Dropdown,
    Tab,
    Pagination,
    Cascader,
    Slider,
    SliderBar,
  },
};
</script>
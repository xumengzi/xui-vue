<template>
  <div class="xui_drop_down" v-clickoutside="handleClickOutSide">
    <xui-button
      styles="xui_drop_btn"
      @click="handleShowLi"
      :data-value="currentValue"
    >{{currentName}}</xui-button>
    <ul class="xui_drop_list" v-show="isShowLi">
      <xui-input
        type="text"
        :placeholder="placeholder"
        v-show="isSearch"
        styles="xui_input_search"
        @keyup="filter($event)"
      ></xui-input>
      <li
        :value="item.value"
        v-for="(item, index) in dataList"
        :key="index"
        @click="handleChange($event, item)"
        class="xui_drop_li"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "XuiDropdown",
  data() {
    return {
      isShowLi: false,
      currentValue: "0",
      currentName: "请选择",
      liKey: "",
      liVal: "",
      dataList: this.list,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: function () {
        return [{ label: "请选择", value: "0" }];
      },
    },
    defaultVal: {
      type: Number,
      default: 0,
    },
    selectVal: {
      type: Object,
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      default: "search",
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.setValue();
    });
  },
  methods: {
    handleClickOutSide() {
      this.isShowLi = false;
    },
    setValue() {
      this.currentValue = this.defaultVal;
      this.defaultVal != 0 &&
        (this.currentName = (this.setName() && this.setName().label) || "请选择");
    },
    setName() {
      return this.list.filter((item, index) => {
        return this.defaultVal == item.value;
      })[0];
    },
    handleShowLi() {
      this.isShowLi = !this.isShowLi;
    },
    handleChange(e, item) {
      this.selectVal.value = this.currentValue = item.value;
      this.selectVal.label = this.currentName = item.label;
      this.$emit("handleChange");
      this.isShowLi = false;
    },
    filter(e) {
      console.log(e)
      let val = e,
        newArr = [];
      if (val == "") {
        this.dataList = this.list;
      } else {
        this.dataList.filter((item) => {
          let bool =
            item.value.toString().includes(val) ||
            item.label.toString().includes(val);
          if (bool) {
            newArr.push(item);
            return item;
          }
        });
        this.dataList = newArr;
      }
    },
  },

  components: {},
};
</script>

<style lang="less" scoped>
.xui_drop_down {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 10em;
  min-width: 6em;
  .xui_drop_btn {
    position: relative;
    width: 100%;
    max-width: 10em;
    min-width: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1.57em;
    margin: 0;
  }
  &::v-deep{
    input {
      width: 100%;
      margin: 0.1em 0;
      padding: 0.2em 0.4em;
      font-size: 14px;
    }
  }
  .xui_drop_btn::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -0.21em;
    right: 0.57em;
    width: 0;
    height: 0;
    border-top: 0.42em solid #999;
    border-right: 0.4em solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 0.4em solid transparent;
    transition: 0.2s linear;
  }
  .xui_drop_list {
    position: absolute;
    top: 2.2em;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid transparent;
    border-top-width: 0;
    background-color: #fff;
    -webkit-transition: max-height 0.3s;
    transition: max-height 0.3s;
    overflow: hidden;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    z-index: 99999;
    border: 1px #f5f5f5 solid;
    border-radius: 0 0 0.28em 0.28em;
    max-height: 250px;
    overflow: auto;
    animation: 0.2s fadeIn linear;
    -webkit-animation: 0.2s fadeIn linear;
  }
  .xui_drop_search {
    top: 4em;
  }
  .xui_drop_list li {
    padding: 0.3em 0.57em;
    font-size: 100%;
    line-height: 1.4;
    display: block;
    cursor: pointer;
    -webkit-transition: color, background-color 0.3s;
    transition: color, background-color 0.3s;
    list-style: none;
    &:nth-child(2n + 1) {
      background: #f8f8f8;
    }
    &:hover {
      background-color: #4eb900;
      color: #fff;
    }
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
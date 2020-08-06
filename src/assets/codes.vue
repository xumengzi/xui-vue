<template>
  <div class="codes" v-html="html"></div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      html: "",
    };
  },
  props: ["codes", "link"],
  mounted() {
    this.$nextTick(function () {
      const { codes, link} = this;
      let cc = "<pre><code>";
      for (let i = 0; i < codes.length; i++) {
        let z = codes[i],
          reg = /([\<\>\?\/\:\[\}\{\}\'\"\-\+\=\.\;\(\)])+/;
        if (reg.test(z)) {
          cc += `<span class="codes_symbol">${z}</span>`;
        } else {
          cc += `${z}`;
        }
      }
      cc +=
        "</code></pre>";
      if(link){
        cc += `<a href='https://codepen.io/xumengzi/pen/${link}' title='在codepen.io运行此案例' target='_blank'>在线运行</a>`;
      };
      this.html = cc;
    });
  },
};
</script>

<style lang="less">
.codes {
  position: relative;
  color: rgb(51, 51, 51);
  overflow: auto;
  word-wrap: normal;
  margin: 12px 0;
  padding: 0.6em 1em;
  margin-bottom: 1.275em;
  background: #f7f7f7;
  .codes_symbol {
    color: #f5871f;
  }
  .codes_equal {
    color: #718c00;
  }
  .codes_keywords {
    color: #3182bd;
  }
  .codes_quot {
    color: #8959a8;
  }
  a {
    font-size: 12px;
    position: absolute;
    right: 10px;
    bottom: 6px;
    color: #4eb900!important;
  }
}

@media screen and (max-width: 680px) {
  .codes {
    a {
      display: none;
    }
  }
}
</style>
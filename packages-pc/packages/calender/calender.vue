<!-- 
  大号日历组件
-->
<template>
  <div class="xui-calender-container">
    <div class="xui-calender-head">
      <span class="xui-head-tab" v-for="item in weekArr" :key="item">
        {{ item }}
      </span>
    </div>
    <div class="xui-calender-body">
      <!-- 用3个数组来分别渲染日历(前月, 当月, 下月) -->
      <calender-item
        v-for="(item, index) in prevMonth"
        extralClass="prev-month"
        :key="item.day + Math.random()"
        :item="item"
        :index="index"
      />
      <calender-item
        v-for="(item, index) in currentMonth"
        extralClass=""
        :key="item.day + Math.random()"
        :item="item"
        :index="index"
      />
      <calender-item
        v-for="(item, index) in nextMonth"
        extralClass="next-month"
        :key="item.day + Math.random()"
        :item="item"
        :index="index"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
import calenderItem from "./calenderItem.vue";

export default {
  name: "XuiCalender",
  data() {
    return {
      weekArr: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      prevMonth: [],
      currentMonth: [],
      nextMonth: [],
    };
  },
  props: ["currentDate"],
  mounted(){
    let dateObj = this.getStartAndEnd(this.currentDate);
    // render calender
    this.calcDate(dateObj);
  },
  watch:{
    currentDate(){
      let dateObj = this.getStartAndEnd(this.currentDate);
      // render calender
      this.calcDate(dateObj);
    }
  },
  methods: {
    zeroFill(e) {
      return e < 10 ? "0" + e : e;
    },
    getStartAndEnd(currentTime) {
      let d = new Date(currentTime);
      let yyyy = d.getFullYear();
      let mm = this.zeroFill(d.getMonth() + 1);
      let dd = this.zeroFill(d.getDate());
      let start = d.getDay();
      // 获取当月数量
      let total = new Date(yyyy, mm, 0).getDate();

      // 前一个月份的长度
      let inx = mm - 1 <= 0 ? -1 : mm - 2;
      let prev = d.setMonth(inx);
      let pDate = new Date(prev);
      // 获取上一个月的数量
      let prevTotal = new Date(
        pDate.getFullYear(),
        pDate.getMonth() + 1,
        0
      ).getDate();
      let pYyyy = this.zeroFill(pDate.getFullYear());
      let pMm = this.zeroFill(pDate.getMonth() + 1);
      let pDd = this.zeroFill(prevTotal - start + 1);

      // 给后端传开始, 结束日期, 调接口展示日历数据
      let startTime = "";
      if (start == 0) {
        startTime = `${yyyy}-${mm}-${dd}`;
      } else {
        startTime = `${pYyyy}-${pMm}-${pDd}`;
      }
      let next = d.setMonth(mm);
      let nDate = new Date(next);
      let nYyyy = nDate.getFullYear();
      let nMm = this.zeroFill(nDate.getMonth() + 1);
      let endTime = `${nYyyy}-${nMm}-${this.zeroFill(42 - start - total)}`;
      return {
        startTime,
        currentTime,
        endTime,
        prevTotal,
        start,
        total
      };
    },
    calcDate(dateObj) {
      // 准备渲染数据了
      const {
        startTime,
        currentTime,
        endTime,
        prevTotal,
        start,
        total
      } = dateObj;
      // 需要注意的是某个月的开始日期可能是第一个, 也就是上个月没有数据
      this.prevMonth = this.genrateCurrent(prevTotal, startTime, start);
      this.currentMonth = this.genrateCurrent(total, currentTime);
      this.nextMonth = this.genrateCurrent(42 - start - total, endTime);
    },
    getFullDate(date) {
      let d = new Date(date);
      let yyyy = d.getFullYear();
      let mm = this.zeroFill(d.getMonth() + 1);
      let dd = this.zeroFill(d.getDate());
      return +new Date(`${yyyy}-${mm}-${dd}`);
    },
    genrateCurrent(total, date, start) {
      /*
      total-需要展示多少个格子(日历)
      date-当前日期
      start-主要是为了解决上一个只展示末尾数据
      */
      let nowStmp = this.getFullDate(new Date());
      let yyyy = new Date(date).getFullYear();
      let mm = this.zeroFill(new Date(date).getMonth() + 1);
      let currentArr = [];
      for (let i = 1; i <= total; i++) {
        let nStmp = +new Date(`${yyyy}-${mm}-${this.zeroFill(i)}`);
        // 当前月份的数据, 包含日期和项目列表
        currentArr.push({
          year: yyyy,
          month: mm,
          day: nowStmp === nStmp ? "今" : i,
          date: `${yyyy}-${mm}-${this.zeroFill(i)}`
        });
      }
      return start > 0
        ? currentArr.splice(-start)
        : start === 0
        ? []
        : currentArr;
    },
  },
  components: {
    calenderItem,
  }
};
</script>

<style lang="less" scoped>
.xui-calender-container {
  // max-width: 1684px;
  min-height: 600px;
  border: 1px solid #e3e7e2;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(171, 201, 214, 0.15);
}
.xui-calender-head {
  display: flex;
  .xui-head-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #3c5559;
    text-align: center;
  }
}
.xui-calender-body {
  font-size: 0;
}
</style>

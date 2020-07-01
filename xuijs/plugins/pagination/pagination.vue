<template>
    <div class="xui_page_content">
        <span class="xui_page_nav xui_page_valid" 
            title="First Page" 
            data-num="1"
            @click="handlePageChange(1)"
            :class="{xui_page_invalid: selected == 1}"
        >First</span>
        <span class="xui_page_nav xui_page_valid" 
            title="Previous Page" 
            :data-num="selected - 1"
            @click="handlePageChange(selected - 1)"
            :class="{xui_page_invalid: selected == 1}"
        >Prev</span>
        <span class="xui_page_initial" 
            v-if="isShowDot == 'true' && selected > 3"
        >...</span>
        <span class="xui_page_valid" 
            v-for="(item, index) in setNewNum"
            :key="index"
            :title="item" 
            :data-num="item"
            @click="handlePageChange(item)"
            :class="{xui_page_selected: selected == item}"
        >{{item}}</span>
        <span class="xui_page_initial" 
            v-if="isShowDot == 'true' && selected < (total- 2)"
        >...</span>
        <span class="xui_page_nav xui_page_valid" 
            title="Next Page" 
            :data-num="selected + 1"
            @click="handlePageChange(selected + 1)"
            :class="{xui_page_invalid: selected == total}"
        >Next</span>
        <span class="xui_page_nav xui_page_valid" 
            title="Last Page" 
            :data-num="total"
            @click="handlePageChange(total)"
            :class="{xui_page_invalid: selected == total}"
        >Last</span>
        <xui-input type="text" 
            styles="xui_page_go" 
            v-if="isJumpPage == 'true'" 
            placeholder="go"
            @handleFilter="handleChoose($event)"
        ></xui-input>
        <span class="xui_page_initial" v-if="isShowNum == 'true'">{{selected}}/{{total}}</span>
    </div>
</template>

<script type="text/javascript">
import XInput from '../form/input.vue';

export default{
    name: 'XuiPagination',
    data(){
        return{
            totalNum: 0,
            selected: 0,
            tag: 0,
        }
    },
    props: {
        index: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number
        },
        isShowDot: {
            default: false,
        },
        isShowNum: {
            default: false,
        },
        isJumpPage: {
            default: false,
        },
    },
    created(){
        this.totalNum = 5;
        this.selected = this.index;
        this.setTag();
    },
    computed:{
        setNewNum(){
            let arr = [];
            for (let i = this.tag; i <= this.totalNum; i++) {
                arr.push(i);
            };
            return arr;
        }
    },
    methods:{
        handlePageChange(index){
            if (index >= 1 && index <= this.total && index != this.selected) {
                this.selected = index;
                this.setTag();
                this.totalNum = this.tag + 4;
                this.$emit('click', index);
            };
        },
        setTag(){
            if (this.selected < 3) {
                this.tag = 1;
            } else if(this.selected <= this.total - 2){
                this.tag = this.selected - 2;
            } else if(this.selected > this.total - 2){
                this.tag = this.selected - 3;
                this.tag = this.tag > (this.total - 4) ? (this.total - 4) : this.tag;
            };
        },
        handleChoose(e){
            if(e.keyCode == 13){
                let reg = /^\d{1,}$/,
                val = e.target.value;
                if (!reg.test(val) || val == 0) {
                    e.target.value = '';
                };
                val = val > this.total ? this.total : val;
                this.handlePageChange(val);
                this.$emit('click', val);
                e.target.value = '';
            }
        },
    },
    components:{
        XInput
    }
}
</script>

<style lang="less">
.xui_page_content{
    display: flex;
    span{
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        min-width: 24px;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        -webkit-box-sizing: initial;
                box-sizing: initial;
        padding: 0 4px;
        display: inline-block;
        border: 1px solid #d9d9d9;
        margin-right: 8px;
        font-family: consolas;
        cursor: pointer;
        &.xui_page_selected{
            background: #4eb900;
            color: #fff;
            border-color: #4eb900;
        }
        &.xui_page_valid{
            cursor: pointer;
            &:hover{
                border-color: #4eb900;
                color: #4eb900;
            }
        }
        &.xui_page_invalid{
            cursor: not-allowed;
            color: rgba(0, 0, 0, 0.5);
        }
        &.xui_page_initial{
            cursor: initial;
            border: none;
        }
        &.xui_page_selected:hover{
            background: #4eb900;
            color: #fff;
        }
    }
    .xui_page_nav{
        border: none;
    }
    .xui_page_go{
        width: 40px;
        margin: 0;
        line-height: initial;
    }
}
</style>
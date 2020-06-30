<template>
    <div class="xui_cascader" v-clickoutside="handleClickOutSide">
        <x-input type="text" 
            readonly="readonly" 
            :placeholder="placeholder || '请选择'"
            styles="xui_input_cas"
            :value="currentValue"
            self="cascader"
            @click="handleShowCas"
        ></x-input>
        <div class="xui_cascader_box" 
            v-show="isShowCas" 
            :class="{xui_cascader_top: position == 'top'}"
        >
            <ul class="cascader_1">
                <li v-for="(item, index) in options"
                    :key="index"
                    @click="handleChange1(item, index)"
                    :class="{selected: selected_1 == index}"
                >
                {{item.label || item}}
                <span class="xui_cascader_icon" v-show="item.children && item.children.length"></span>
            </li>
            </ul>
            <ul class="cascader_2" v-show="isShowCas_2">
                <li v-for="(item, index) in cascader_2" 
                    :key="index"
                    @click="handleChange2(item, index)"
                    :class="{selected: selected_2 == index}"
                >
                {{item.label}}
                <span class="xui_cascader_icon" v-show="item.children && item.children.length"></span>
            </li>
            </ul>
            <ul class="cascader_3" v-show="isShowCas_3">
                <li v-for="(item, index) in cascader_3" 
                    :key="index"
                    @click="handleChange3(item, index)"
                    :class="{selected: selected_3 == index}"
                >{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
import XInput from '../form/input.vue';

export default{
    name: 'XuiCascader',
    data(){
        return{
            isShowCas: false,
            selected_1: -1,
            selected_2: 0,
            selected_3: 0,
            isShowCas_2: false,
            isShowCas_3: false,
            cascader_2: [],
            cascader_3: [],
            val_1: '',
            lab_1: '',
            val_2: '',
            lab_2: '',
            val_3: '',
            lab_3: '',
            currentValue: '',
        }
    },
    props:{
        options:{},
        placeholder:{},
        separator: {},
        count: {},
        position:{},
    },
    mounted(){
        this.$nextTick(function(){
        })
    },
    methods:{
        handleShowCas(){
            this.isShowCas =! this.isShowCas;
        },
        handleClickOutSide(){
            this.isShowCas = false;
        },
        handleChange1(choose, inx){
            this.val_1 = choose.value || choose;
            this.lab_1 = choose.label || choose;
            this.selected_1 = inx;
            this.selected_2 = 0;
            this.isShowCas_3 = false;
            
            if (Array.isArray(this.options)) {
                this.options.filter((item,index) =>{
                    if (choose.label == item.label) {
                        this.cascader_2 = item.children || [];
                        return this.cascader_2;
                    };
                });
            }
            if (this.cascader_2.length) {
                this.isShowCas_2 = true;
            } else{
                this.val_2 = this.val_3 = '';
                this.lab_2 = this.lab_3 = '';
                this.setVal();
            }
        },
        handleChange2(choose,inx){
            this.val_2 = choose.value;
            this.lab_2 = choose.label;
            this.selected_2 = inx;
            this.selected_3 = 0;
            this.cascader_2.filter((item,index) =>{
                if (choose.label == item.label) {
                    this.cascader_3 = item.children || [];
                    return this.cascader_3;
                };
            });
            if (this.cascader_3.length) {
                this.isShowCas_3 = true;
            } else{
                this.val_3 = '';
                this.lab_3 = '';
                this.setVal();
            };
        },
        handleChange3(choose,inx){
            this.val_3 = choose.value;
            this.lab_3 = choose.label;
            this.selected_3 = inx;
            this.setVal();
        },
        setVal(){
            let val = '';
            this.lab_1 && (val += this.lab_1 );
            this.lab_2 && (val += (this.separator || '') + this.lab_2);
            this.lab_3 && (val += (this.separator || '') + this.lab_3);
            let params = [];
            this.lab_1 && (params.push({
                value: this.val_1,
                label: this.lab_1,
            }));
            this.lab_2 && (params.push({
                value: this.val_2,
                label: this.lab_2,
            }));
            this.lab_3 && (params.push({
                value: this.val_3,
                label: this.lab_3,
            }));
            this.currentValue = val;
            this.isShowCas = false;
            const p = {
                simple: val,
                detail: params
            };
            this.$emit('change',p);
        },
    },
    components:{
        XInput,
    }
}
</script>

<style lang="less">
.xui_cascader{
    position: relative;
    width: 200px;
    .xui_input_cas{
        margin: 0;
    }
    ul{
        flex: 1;
        vertical-align: top;
        height: 204px;
        overflow: auto;
        border-right: 1px solid #e4e7ed;
        background-color: #fff;
        box-sizing: border-box;
        margin: 0;
        padding: 6px 0;
        min-width: 160px;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            padding: 8px 20px;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #606266;
            height: 34px;
            line-height: 1.5;
            box-sizing: border-box;
            cursor: pointer;
            outline: none;
            &:nth-child(2n){
                background: #f8f8f8;
            }
            &.selected{
                color: #4eb900;
            }
            &:hover{
                background: #b1ebc9;
            }
        }
    }
    .xui_cascader_icon{
        width: 20px;
        height: 20px;
        display: block;
        -webkit-transition: .4s ease-out;
        transition: .4s ease-out;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAABwcHBwcHAxZ8TIAAAAA3RSTlMAEKBmYnVnAAAAI0lEQVQI12NAByogQhJEsDkACcYJIGYKmABzYRKScMUCyNoBdbADAWhhpY4AAAAASUVORK5CYII=) no-repeat center center;
        background-size: initial;
        cursor: pointer;
        z-index: 99999;
    }
}
.xui_cascader_box{
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 9999;
    width: 100%;
    background: #fff;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    box-shadow: 1px 1px 10px #ccc;
}
.xui_cascader_top{
    top: -210px;
}
</style>
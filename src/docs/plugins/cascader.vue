<template>
	<div class="xui-vue markdown-section">
		<div class="main">
			<h1>cascader</h1>
			<blockquote>
			<p>说明: 当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择</p>
			</blockquote>
			<h5 id="使用及参数说明">使用及参数说明:</h5>
			<ul>
				<li><code>options</code>表示级联选择的数据源,支持数字(下拉框),(复杂)数组 <strong>必传</strong></li>
				<li><code>separator</code>表示选择的值的分割符号</li>
				<li><code>position</code>表示弹出框的位置,默认`bottom`,支持`top`</li>
				<li><code>placeholder</code>表示提示文案,默认请选择</li>
				<li><code>change</code>表示选择后的的回调,返回当前选中的值</li> 
				<li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
			</ul>
			<codes :codes="params"></codes>
			<h3>效果展示</h3>
			<p>1.按照惯例, 我们会碰到这种情况, 比如展示某个列表. 这里展示的是英雄联盟的大区(仅供参考)</p>
			<x-cascader 
				:options="list1"
				@change="getData_1"
				placeholder="choose"
			/>
			<codes :codes="cas_1"></codes>
			<p>2.数据源支持纯数字哦,来看看是啥效果吧</p>
			<x-cascader 
				:options="list2"
				@change="getData_2"
				position="top"
			/>
			<codes :codes="cas_2"></codes>
			<p>3.上面都是小儿科, 来看看今天的重头戏吧,三级联动~</p>
			<x-cascader 
				:options="list3"
				@change="getData_3"
				separator="-"
			/>
			<codes :codes="cas_3"></codes>
		</div>
	</div>
</template>

<script>
import XCascader from '@/plugins/cascader/cascader.vue';

import Codes from '@/assets/codes.vue';

export default{
	name: 'xui-cascader',
	data(){
		return{
			list1: [
				'艾欧尼亚  电信',
				'比尔吉沃特  网通',
				'祖安 电信',
				'诺克萨斯  电信',
				'德玛西亚 网通',
				'班德尔城 电信',
				'皮尔特沃夫 电信',
				'战争学院 电信',
				'弗雷尔卓德 网通',
				'巨神峰 电信',
				'雷瑟守备 电信',
				'无畏先锋 网通',
				'裁决之地 电信',
				'黑色玫瑰 电信',
				'暗影岛 电信',
				'钢铁烈阳 电信',
				'恕瑞玛 网通',
				'均衡教派 电信',
			],
			list2: 20,
			list3: [
			    {
			        "value": "zhinan",
			        "label": "指南",
			        "children": [
			            {
			                "value": "shejiyuanze",
			                "label": "设计原则",
			                "children": [
			                    {
			                        "value": "yizhi",
			                        "label": "一致"
			                    },
			                    {
			                        "value": "fankui",
			                        "label": "反馈"
			                    },
			                    {
			                        "value": "xiaolv",
			                        "label": "效率"
			                    },
			                    {
			                        "value": "kekong",
			                        "label": "可控"
			                    }
			                ]
			            },
			            {
			                "value": "daohang",
			                "label": "导航",
			                "children": [
			                    {
			                        "value": "cexiangdaohang",
			                        "label": "侧向导航"
			                    },
			                    {
			                        "value": "dingbudaohang",
			                        "label": "顶部导航"
			                    }
			                ]
			            }
			        ]
			    },
			    {
			        "value": "zujian",
			        "label": "组件",
			        "children": [
			            {
			                "value": "basic",
			                "label": "Basic",
			                "children": [
			                    {
			                        "value": "layout",
			                        "label": "Layout 布局"
			                    },
			                    {
			                        "value": "color",
			                        "label": "Color 色彩"
			                    },
			                    {
			                        "value": "typography",
			                        "label": "Typography 字体"
			                    },
			                    {
			                        "value": "icon",
			                        "label": "Icon 图标"
			                    },
			                    {
			                        "value": "button",
			                        "label": "Button 按钮"
			                    }
			                ]
			            },
			            {
			                "value": "form",
			                "label": "Form",
			                "children": [
			                    {
			                        "value": "radio",
			                        "label": "Radio 单选框"
			                    },
			                    {
			                        "value": "checkbox",
			                        "label": "Checkbox 多选框"
			                    },
			                    {
			                        "value": "input",
			                        "label": "Input 输入框"
			                    },
			                    {
			                        "value": "input-number",
			                        "label": "InputNumber 计数器"
			                    },
			                    {
			                        "value": "select",
			                        "label": "Select 选择器"
			                    },
			                    {
			                        "value": "cascader",
			                        "label": "Cascader 级联选择器"
			                    },
			                    {
			                        "value": "switch",
			                        "label": "Switch 开关"
			                    },
			                    {
			                        "value": "slider",
			                        "label": "Slider 滑块"
			                    },
			                    {
			                        "value": "time-picker",
			                        "label": "TimePicker 时间选择器"
			                    },
			                    {
			                        "value": "date-picker",
			                        "label": "DatePicker 日期选择器"
			                    },
			                    {
			                        "value": "datetime-picker",
			                        "label": "DateTimePicker 日期时间选择器"
			                    },
			                    {
			                        "value": "upload",
			                        "label": "Upload 上传"
			                    },
			                    {
			                        "value": "rate",
			                        "label": "Rate 评分"
			                    },
			                    {
			                        "value": "form",
			                        "label": "Form 表单"
			                    }
			                ]
			            },
			            {
			                "value": "data",
			                "label": "Data",
			                "children": [
			                    {
			                        "value": "table",
			                        "label": "Table 表格"
			                    },
			                    {
			                        "value": "tag",
			                        "label": "Tag 标签"
			                    },
			                    {
			                        "value": "progress",
			                        "label": "Progress 进度条"
			                    },
			                    {
			                        "value": "tree",
			                        "label": "Tree 树形控件"
			                    },
			                    {
			                        "value": "pagination",
			                        "label": "Pagination 分页"
			                    },
			                    {
			                        "value": "badge",
			                        "label": "Badge 标记"
			                    }
			                ]
			            },
			            {
			                "value": "notice",
			                "label": "Notice",
			                "children": [
			                    {
			                        "value": "alert",
			                        "label": "Alert 警告"
			                    },
			                    {
			                        "value": "loading",
			                        "label": "Loading 加载"
			                    },
			                    {
			                        "value": "message",
			                        "label": "Message 消息提示"
			                    },
			                    {
			                        "value": "message-box",
			                        "label": "MessageBox 弹框"
			                    },
			                    {
			                        "value": "notification",
			                        "label": "Notification 通知"
			                    }
			                ]
			            },
			            {
			                "value": "navigation",
			                "label": "Navigation",
			                "children": [
			                    {
			                        "value": "menu",
			                        "label": "NavMenu 导航菜单"
			                    },
			                    {
			                        "value": "tabs",
			                        "label": "Tabs 标签页"
			                    },
			                    {
			                        "value": "breadcrumb",
			                        "label": "Breadcrumb 面包屑"
			                    },
			                    {
			                        "value": "dropdown",
			                        "label": "Dropdown 下拉菜单"
			                    },
			                    {
			                        "value": "steps",
			                        "label": "Steps 步骤条"
			                    }
			                ]
			            },
			            {
			                "value": "others",
			                "label": "Others",
			                "children": [
			                    {
			                        "value": "dialog",
			                        "label": "Dialog 对话框"
			                    },
			                    {
			                        "value": "tooltip",
			                        "label": "Tooltip 文字提示"
			                    },
			                    {
			                        "value": "popover",
			                        "label": "Popover 弹出框"
			                    },
			                    {
			                        "value": "card",
			                        "label": "Card 卡片"
			                    },
			                    {
			                        "value": "carousel",
			                        "label": "Carousel 走马灯"
			                    },
			                    {
			                        "value": "collapse",
			                        "label": "Collapse 折叠面板"
			                    }
			                ]
			            }
			        ]
			    },
			    {
			        "value": "ziyuan",
			        "label": "资源",
			        "children": [
			            {
			                "value": "axure",
			                "label": "Axure Components"
			            },
			            {
			                "value": "sketch",
			                "label": "Sketch Templates"
			            },
			            {
			                "value": "jiaohu",
			                "label": "组件交互文档"
			            }
			        ]
			    }
			],
			
			params: 
`//导入组件
import XCascader from '@/plugins/cascader/cascader.vue';

<x-cascader 
    :options="list"
    separator=","
    position="top"
    placeholder="请选择"
    @change="getData"
/>

//回调
getData(data){
    console.log(data);
},

//回调结果是一个对象,格式如下
{
    detail: 
    [
        {
            "value": 1,
            "label": 1
        },
        {
            "value": 2,
            "label": 2
        },
        {
            "value": 3,
            "label": 3
        }
    ],
    simple: 'label1-label2-label3',
}
`,
			cas_1: 
`<x-cascader 
    :options="list"
    @change="getData_1"
/>
//数据源是简单数组
list: [
    '艾欧尼亚  电信',
    '比尔吉沃特  网通',
    '祖安 电信',
    '诺克萨斯  电信',
    '德玛西亚 网通',
    '班德尔城 电信',
    '皮尔特沃夫 电信',
    '战争学院 电信',
    '弗雷尔卓德 网通',
    '巨神峰 电信',
    '雷瑟守备 电信',
    '无畏先锋 网通',
    '裁决之地 电信',
    '黑色玫瑰 电信',
    '暗影岛 电信',
    '钢铁烈阳 电信',
    '恕瑞玛 网通',
    '均衡教派 电信',
],
`,
			cas_2: 
`<x-cascader 
    :options="list1"
    @change="getData_2"
    position="top"
/>
list1: 20,
`,
			cas_3: 
`<x-cascader 
    :options="list3"
    @change="getData_3"
    separator="-"
/>
//数据有点多~~
list3: [
    {
        "value": "zhinan",
        "label": "指南",
        "children": [
            {
                "value": "shejiyuanze",
                "label": "设计原则",
                "children": [
                    {
                        "value": "yizhi",
                        "label": "一致"
                    },
                    {
                        "value": "fankui",
                        "label": "反馈"
                    },
                    {
                        "value": "xiaolv",
                        "label": "效率"
                    },
                    {
                        "value": "kekong",
                        "label": "可控"
                    }
                ]
            },
            {
                "value": "daohang",
                "label": "导航",
                "children": [
                    {
                        "value": "cexiangdaohang",
                        "label": "侧向导航"
                    },
                    {
                        "value": "dingbudaohang",
                        "label": "顶部导航"
                    }
                ]
            }
        ]
    },
    {
        "value": "zujian",
        "label": "组件",
        "children": [
            {
                "value": "basic",
                "label": "Basic",
                "children": [
                    {
                        "value": "layout",
                        "label": "Layout 布局"
                    },
                    {
                        "value": "color",
                        "label": "Color 色彩"
                    },
                    {
                        "value": "typography",
                        "label": "Typography 字体"
                    },
                    {
                        "value": "icon",
                        "label": "Icon 图标"
                    },
                    {
                        "value": "button",
                        "label": "Button 按钮"
                    }
                ]
            },
            {
                "value": "form",
                "label": "Form",
                "children": [
                    {
                        "value": "radio",
                        "label": "Radio 单选框"
                    },
                    {
                        "value": "checkbox",
                        "label": "Checkbox 多选框"
                    },
                    {
                        "value": "input",
                        "label": "Input 输入框"
                    },
                    {
                        "value": "input-number",
                        "label": "InputNumber 计数器"
                    },
                    {
                        "value": "select",
                        "label": "Select 选择器"
                    },
                    {
                        "value": "cascader",
                        "label": "Cascader 级联选择器"
                    },
                    {
                        "value": "switch",
                        "label": "Switch 开关"
                    },
                    {
                        "value": "slider",
                        "label": "Slider 滑块"
                    },
                    {
                        "value": "time-picker",
                        "label": "TimePicker 时间选择器"
                    },
                    {
                        "value": "date-picker",
                        "label": "DatePicker 日期选择器"
                    },
                    {
                        "value": "datetime-picker",
                        "label": "DateTimePicker 日期时间选择器"
                    },
                    {
                        "value": "upload",
                        "label": "Upload 上传"
                    },
                    {
                        "value": "rate",
                        "label": "Rate 评分"
                    },
                    {
                        "value": "form",
                        "label": "Form 表单"
                    }
                ]
            },
            {
                "value": "data",
                "label": "Data",
                "children": [
                    {
                        "value": "table",
                        "label": "Table 表格"
                    },
                    {
                        "value": "tag",
                        "label": "Tag 标签"
                    },
                    {
                        "value": "progress",
                        "label": "Progress 进度条"
                    },
                    {
                        "value": "tree",
                        "label": "Tree 树形控件"
                    },
                    {
                        "value": "pagination",
                        "label": "Pagination 分页"
                    },
                    {
                        "value": "badge",
                        "label": "Badge 标记"
                    }
                ]
            },
            {
                "value": "notice",
                "label": "Notice",
                "children": [
                    {
                        "value": "alert",
                        "label": "Alert 警告"
                    },
                    {
                        "value": "loading",
                        "label": "Loading 加载"
                    },
                    {
                        "value": "message",
                        "label": "Message 消息提示"
                    },
                    {
                        "value": "message-box",
                        "label": "MessageBox 弹框"
                    },
                    {
                        "value": "notification",
                        "label": "Notification 通知"
                    }
                ]
            },
            {
                "value": "navigation",
                "label": "Navigation",
                "children": [
                    {
                        "value": "menu",
                        "label": "NavMenu 导航菜单"
                    },
                    {
                        "value": "tabs",
                        "label": "Tabs 标签页"
                    },
                    {
                        "value": "breadcrumb",
                        "label": "Breadcrumb 面包屑"
                    },
                    {
                        "value": "dropdown",
                        "label": "Dropdown 下拉菜单"
                    },
                    {
                        "value": "steps",
                        "label": "Steps 步骤条"
                    }
                ]
            },
            {
                "value": "others",
                "label": "Others",
                "children": [
                    {
                        "value": "dialog",
                        "label": "Dialog 对话框"
                    },
                    {
                        "value": "tooltip",
                        "label": "Tooltip 文字提示"
                    },
                    {
                        "value": "popover",
                        "label": "Popover 弹出框"
                    },
                    {
                        "value": "card",
                        "label": "Card 卡片"
                    },
                    {
                        "value": "carousel",
                        "label": "Carousel 走马灯"
                    },
                    {
                        "value": "collapse",
                        "label": "Collapse 折叠面板"
                    }
                ]
            }
        ]
    },
    {
        "value": "ziyuan",
        "label": "资源",
        "children": [
            {
                "value": "axure",
                "label": "Axure Components"
            },
            {
                "value": "sketch",
                "label": "Sketch Templates"
            },
            {
                "value": "jiaohu",
                "label": "组件交互文档"
            }
        ]
    }
],
`,
		}
	},
	mounted(){
		this.$nextTick(function(){

		})
	},
	methods:{
		getData_1(data){
			console.log(data);
		},
		getData_2(data){
			console.log(data);
		},
		getData_3(data){
			console.log(data);
		}
	},
	components:{
		XCascader,
		Codes
	}
}
</script>
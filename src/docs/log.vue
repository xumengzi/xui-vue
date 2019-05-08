<template>
    <div class="xui-vue markdown-section">
        <div class="main" >
            <h1>日志</h1>
            <h6>当前版本: <span class="version">0.6.1</span></h6>
            <blockquote>
                <p>版本说明: 次版本号代表新增一个插件或者比较大的改动 修订版本号代表修复bug,优化之类</p>
            </blockquote>
            
            <h3>v0.6.2  <span style="font-size: 16px;">2018/10/27</span></h3>
            <h5>发布：</h5>
            <p>调整手机端的样式以及字体</p>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.6.1  <span style="font-size: 16px;">2018/08/11</span></h3>
            <h5>发布：</h5>
            <p>1.<a href="#/Notification">通知提醒组件</a></p>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.5.1  <span style="font-size: 16px;">2018/07/28</span></h3>
            <h5>发布：</h5>
            <p>1.<a href="#/Cascader">级联选择组件</a></p>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.4.1  <span style="font-size: 16px;">2018/06/01</span></h3>
            <h5>发布：</h5>
            <p>1.<a href="#/Pagination">分页组件</a></p>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.3.1  <span style="font-size: 16px;">2018/05/23</span></h3>
            <h5>发布：</h5>
            <code>npm install xui-loading</code>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.2.1  <span style="font-size: 16px;">2018/04/10</span></h3>
            <h5>新增：</h5>
            <p>1.<a href="#/Plugins">公共组件系列</a></p>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.1.1  <span style="font-size: 16px;">2018/02/06</span></h3>
            <h5>新增：</h5>
            <p>1.<a href="#/From">表单组件</a></p>
            <blockquote>
                <p>是否兼容现有代码：是</p>
            </blockquote>

            <h3>v0.0.1  <span style="font-size: 16px;">2018/01/10</span></h3>
            <h5>新增：</h5>
            <p>1.基于vue的ui框架<a href="https://github.com/xumengzi/xui-vue" target="_blank">github</a></p>
        </div>
    </div>
</template>

<script>
import Codes from '@/assets/codes.vue';

export default {
    name: 'show',
    data () {
        return {
            vue: 'How many codes must a man edit before you call him a master?',
        }
    },
    components:{
        Codes
    }
}
</script>
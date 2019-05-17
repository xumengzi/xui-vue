import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import master from '@/components/master.vue'

Vue.use(Router);

//各种各样的插件
import From from '@/docs/from.vue';
import Learning from '@/docs/learning.vue';
import Directive from '@/docs/directive.vue';
import Log from '@/docs/log.vue';
import Plugins from '@/docs/plugins/plugins.vue';
import Message from '@/docs/plugins/message.vue';
import Notification from '@/docs/plugins/notification.vue';
import Loading from '@/docs/plugins/loading.vue';
import Modal from '@/docs/plugins/modal.vue';
import Digital from '@/docs/plugins/digital.vue';
import Rate from '@/docs/plugins/rate.vue';
import Dropdown from '@/docs/plugins/dropdown.vue';
import Tab from '@/docs/plugins/tab.vue';
import Pagination from '@/docs/plugins/pagination.vue';
import Cascader from '@/docs/plugins/cascader.vue';
import Slider from '@/docs/plugins/slider.vue';
import SliderBar from '@/docs/plugins/sliderBar.vue';


import a from '@/docs/a.vue';
import b from '@/docs/b.vue';
import c from '@/docs/c.vue';




const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/a',
            name: 'a',
            component: a,
        },
        {
            path: '/b',
            name: 'b',
            component: b,
            beforeRouteLeave (to, from, next) {
                // ...
                console.log(from);
                next();
            },
            beforeRouteEnter (to, from, next) {
                // ...
                console.log(from);
                next();
            }
        },
        {
            path: '/c',
            name: 'c',
            component: c,
        },
        {
            path: '/Learning',
            name: 'Learning',
            component: Learning,
        },
        {
            path: '/Directive',
            name: 'Directive',
            component: Directive,
        },
        {
            path: '/Log',
            name: 'Log',
            component: Log,
        },
        {
            path: '/master',
            name: 'master',
            component: master,
        },
        {
            path: '/From',
            name: 'from',
            component: From,
        },
        {
            path: '/Plugins',
            name: 'plugins',
            component: Plugins,
        },
        {
            path: '/Message',
            name: 'Message',
            component: Message,
        },
        {
            path: '/Notification',
            name: 'Notification',
            component: Notification,
        },
        {
            path: '/Loading',
            name: 'Loading',
            component: Loading,
        },
        {
            path: '/Modal',
            name: 'Modal',
            component: Modal,
        },
        {
            path: '/Rate',
            name: 'Rate',
            component: Rate,
        },
        {
            path: '/Digital',
            name: 'Digital',
            component: Digital,
        },
        {
            path: '/Dropdown',
            name: 'Dropdown',
            component: Dropdown,
        },
        {
            path: '/Tab',
            name: 'Tab',
            component: Tab,
        },
        {
            path:'/Pagination',
            name: 'Pagination',
            component: Pagination,
        },
        {
            path:'/Cascader',
            name: 'Cascader',
            component: Cascader,
        },
        {
            path: '/Slider',
            name: 'Slider',
            component: Slider,
        },
        {
            path: '/SliderBar',
            name: 'SliderBar',
            component: SliderBar,
        }
    ],
    scrollBehavior(){
        return {x: 0, y: 0};
    }
});
router.beforeEach((to, from, next) => {
    // ...
    console.log(from);
    next();
})

export default router;

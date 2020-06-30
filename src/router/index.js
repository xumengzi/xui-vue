import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import master from '@/components/master.vue'

Vue.use(Router);

const _import_ = file => () => import('@/docs/' + file + '.vue');
const _import_plugins_ = file1 => () => import('@/docs/plugins/' + file1 + '.vue');

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/Learning',
            name: 'Learning',
            component: _import_('learning'),
        },
        {
            path: '/Directive',
            name: 'Directive',
            component: _import_('directive'),
        },
        {
            path: '/Log',
            name: 'Log',
            component: _import_('log'),
        },
        {
            path: '/master',
            name: 'master',
            component: master,
        },
        {
            path: '/Forms',
            name: 'Forms',
            component: _import_('forms'),
        },
        {
            path: '/Plugins',
            name: 'plugins',
            component: _import_plugins_('plugins'),
        },
        {
            path: '/Plugins/Message',
            name: 'Message',
            component: _import_plugins_('message'),
        },
        {
            path: '/Plugins/Notification',
            name: 'Notification',
            component: _import_plugins_('notification'),
        },
        {
            path: '/Plugins/Loading',
            name: 'Loading',
            component: _import_plugins_('loading'),
        },
        {
            path: '/Plugins/Modal',
            name: 'Modal',
            component: _import_plugins_('modal'),
        },
        {
            path: '/Plugins/Rate',
            name: 'Rate',
            component: _import_plugins_('rate'),
        },
        {
            path: '/Plugins/Digital',
            name: 'Digital',
            component: _import_plugins_('digital'),
        },
        {
            path: '/Plugins/Dropdown',
            name: 'Dropdown',
            component: _import_plugins_('dropdown'),
        },
        {
            path: '/Plugins/Tab',
            name: 'Tab',
            component: _import_plugins_('tab'),
        },
        {
            path:'/Plugins/Pagination',
            name: 'Pagination',
            component: _import_plugins_('pagination'),
        },
        {
            path:'/Plugins/Cascader',
            name: 'Cascader',
            component: _import_plugins_('cascader'),
        },
        {
            path: '/Plugins/Slider',
            name: 'Slider',
            component: _import_plugins_('slider'),
        },
        {
            path: '/Plugins/Calender',
            name: 'Calender',
            component: _import_plugins_('calender'),
        },
        {
            path: '/Plugins/SliderBar',
            name: 'SliderBar',
            component: _import_plugins_('sliderBar'),
        }
    ],
    scrollBehavior(){
        return {x: 0, y: 0};
    }
});
router.beforeEach((to, from, next) => {
    next();
})

export default router;

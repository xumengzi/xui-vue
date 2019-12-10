import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import master from '@/components/master.vue'

Vue.use(Router);

const _import_ = file => () => import('@/docs/' + file + '.vue');
const _import_plugins_ = file => () => import('@/docs/plugins/' + file + '.vue');

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
            path: '/Message',
            name: 'Message',
            component: _import_plugins_('message'),
        },
        {
            path: '/Notification',
            name: 'Notification',
            component: _import_plugins_('notification'),
        },
        {
            path: '/Loading',
            name: 'Loading',
            component: _import_plugins_('loading'),
        },
        {
            path: '/Modal',
            name: 'Modal',
            component: _import_plugins_('modal'),
        },
        {
            path: '/Rate',
            name: 'Rate',
            component: _import_plugins_('rate'),
        },
        {
            path: '/Digital',
            name: 'Digital',
            component: _import_plugins_('digital'),
        },
        {
            path: '/Dropdown',
            name: 'Dropdown',
            component: _import_plugins_('dropdown'),
        },
        {
            path: '/Tab',
            name: 'Tab',
            component: _import_plugins_('tab'),
        },
        {
            path:'/Pagination',
            name: 'Pagination',
            component: _import_plugins_('pagination'),
        },
        {
            path:'/Cascader',
            name: 'Cascader',
            component: _import_plugins_('cascader'),
        },
        {
            path: '/Slider',
            name: 'Slider',
            component: _import_plugins_('slider'),
        },
        {
            path: '/SliderBar',
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

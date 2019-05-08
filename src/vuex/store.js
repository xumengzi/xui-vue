import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const plugin = () =>{
    // let a = JSON.stringify(store.state.a.list);
    // store.subscribe((mutations, state) =>{
    // })
};

const state = {
    projectName: 'xui-vue',
    version: '0.5.1',
    list: [
        {
            value: 1,
            label: 'vuejs',
        },
        {
            value: 2,
            label: 'reactjs',
        },
        {
            value: 3,
            label: 'angularjs'
        }
    ],
    introductionList: [
        '简介: 一个基于vueJs2.0,可以提供丰富的方法,组件,插件的项目.',
        '依赖: vuejs2.0',
        '兼容性: IE9及以上高级浏览器',
    ],
};

const actions = {
    introList({ commit }){
        commit('getIntroList');
    }
};

const mutations = {
    updateList(state, {value, label}){
        state.list.push({
            value: value,
            label: label,
        });
    },
    getIntroList(state){
        return state.introductionList.push('hello, world')
    },
};

const getters = {
    projectName: (state) => {
        return state.projectName; 
     },
    version: (state) => {
        return state.version; 
    },
    filterList: (state) => (id) =>{
        return state.list.filter((item) =>{
            return item.value == id;
        })
    },
    filterListEs5(state){
        return function(id){
            return state.list.filter(function(item) {
                return item.value == id;
            });
        }
    },
    getDesList(state){
        return state.introductionList;
    },
};

const moduleA = {
    state,
    actions,
    mutations,
    getters,
};

const moduleB = {
    state: {
        name: 'moduleB',
    },
    actions: {
        test(){
        },
    },
    mutations: {},
    getters: {
        getModuleName: (state, getters, rootState) => {
            return state.name + rootState.a.projectName; 
        }
    },
};

const store = new Vuex.Store({
    strict: true,
    plugins: [plugin],
    modules: {
        a: moduleA,
        b: moduleB
    }
});

export default store;
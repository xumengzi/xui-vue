<template>
    <div class="xui-vue markdown-section">
        <div class="main">
            b页面: {{$store.getters.projectName}}
            <x-input type="text" placeholder="请输入名字">name</x-input>
            <x-input type="text" disabled="disabled" placeholder="请输入名字">name</x-input>
        </div>
    </div>
</template>

<script>
import xInput from '../plugins/form/input';
import {mapState} from 'vuex';
export default {
    data(){
        return{
        }
    },
    mounted() {

    },
    methods: {
        
    },
    watch: {
        '$route'(){
            // console.log(this);
        }
    },
    components: {
        xInput
    }
}
</script>


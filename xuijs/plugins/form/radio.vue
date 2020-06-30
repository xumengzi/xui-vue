<template>
    <div class="xui_radio_content">
        <input class="xui_radio" :checked="checked" :disabled="isDisabled" :id="name" type="radio" name="radio" />
        <label :for="name" class="xui_radio_box"><slot></slot></label>
    </div>
</template>

<script type="text/javascript">
    export default{
        name: 'xui_radio',
        data(){
            return{}
        },
        props: ['content', 'name', 'checked', 'disabled'],
        computed: {
            isDisabled(){
                return this.disabled;
            },
        },
        mounted(){
            this.$nextTick(function(){
            })
        }
    }
</script>

<style >
.xui_radio_box{
    position: relative;
    padding-left: 1.5em;
    margin: .57em;
    display: inline-block;
}
.xui_radio_box::before{
    content: "";
    position: absolute;
    top: 50%;
    left: .6em;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    border: 1px solid #999;
    border-radius: 50%;
}
.xui_radio{
    display: none;
}
.xui_radio:checked + .xui_radio_box::before {
    border-color: #4eb900;
}
.xui_radio:checked + .xui_radio_box::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0.6em;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    /* transition: .2s linear; */
    animation: .1s scale ease-in;
    transform-origin: center center;
    width: .5em;
    height: .5em;
    border-radius: 50%;
    background: #4eb900;
}
.xui_radio:disabled + .xui_radio_box,.xui_radio:checked + .xui_radio_box::before{
    color: #ccc;
    cursor: not-allowed;
}
@keyframes scale{
    0%{
        transform: translate(-50%, -50%) scale(.4);
        transform-origin: center center;
    }
    100%{
        transform: translate(-50%, -50%) scale(.4);
        transform-origin: center center;
    }
}
</style>
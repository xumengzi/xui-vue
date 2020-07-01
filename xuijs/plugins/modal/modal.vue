<template>
	<div class="xui_modal">
		<div class="xui_content">
			<span v-if="opts.isShowClose" @click="handleCancel" class="xui_close"></span>
            <div class="xui_text">
                <div class="xui_title"><span>{{opts.tips}}</span></div>
                <div class="tips">{{opts.text}}</div>
            </div>
            <div class="xui_btn_box">
                <xui-button type="cancel"
                    v-if="opts.cancelBtn"
                    @click="handleCancel"
                >{{cancel}}</xui-button>
                <xui-button type="default"
                    v-if="opts.confirmBtn"
                    @click="handleConfirm"
                >{{confirm}}</xui-button>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">

export default{
	name: 'xui_modal',
	data(){
		return{
            opts: {
                tips: 'Title',
                text: 'some comments',
                isShowClose: true,
                confirmBtn: null,
                cancelBtn: null,
            },
            confirm:'',
            cancel: '',
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.opts = Object.assign(this.opts, this.$options[0]);
            this.confirm = this.opts.confirmBtn && this.opts.confirmBtn.text;
            this.cancel = this.opts.cancelBtn && this.opts.cancelBtn.text
		});
	},
	methods: {
		handleConfirm(){
			this.$el.remove();
			this.opts.confirmBtn && this.opts.confirmBtn.fn();
		},
		handleCancel(){
			this.$el.remove();
			this.opts.cancelBtn && this.opts.cancelBtn.fn();
		}
	},
    components: {
    }
}
</script>

<style lang="less">
.xui_modal{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.56);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 99999;
    .xui_content{
        position: relative;
        width: 500px;
        margin: 0 auto;
        color: #000;
        box-sizing: border-box;
        background: #fff;
        opacity: 0.9;
        background-color: #fff;
        border: 0;
        border-radius: 4px;
        background-clip: padding-box;
        -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: .2s linear down;
        -webkit-animation: .2s linear down;
    }
    .xui_close{
        position: absolute;
        right: 1em;
        top: 1.3em;
        display: block;
        width: 1.2em;
        height: 1.2em;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEUAAABQUFBQUFBRUVFQUFBQUFBRUVHFwiN3AAAABnRSTlMAYFCwMK9g6AnkAAAAZ0lEQVQoz2OgDnBVgLGYQsCUWSJMQCwZTKmlCUD4jGlJUDoRqgAoA2MgJGAshDiciVAAZqMoAHPAgshKoAoQSqAKEEoQChACGFowDcWwFtNhmE7H9Bym9zEDCDMIMQPZGRENJtSJWAABAR0XeOxDfQAAAABJRU5ErkJggg==) no-repeat center center;
        background-size: contain;
        z-index: 99;
        cursor: pointer;
    }
    .xui_text {
        .xui_title{
            position: relative;
            font-size: 1.2em;
            color: #666;
            font-weight: bold;
            padding: 16px 24px;
            border-radius: 4px 4px 0 0;
            background: #fff;
            color: rgba(0, 0, 0, 0.65);
            border-bottom: 1px solid #e8e8e8;
            span{
                margin: 0;
                font-size: 16px;
                line-height: 22px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.85);
            }
        }
        .tips{
            padding: 24px;
            font-size: 14px;
            line-height: 1.5;
            color: #666;
        }
    }
    .xui_btn_box{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: flex-end;
            -ms-flex-pack: flex-end;
                justify-content: flex-end;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        border-top: 1px solid #e8e8e8;
        padding: 5px 10px;
        text-align: right;
        border-radius: 0 0 4px 4px;
    }
}
@keyframes down{
	0%{
		opacity: .2;
		-webkit-transform: translateY(-50%);
        transform: translateY(-50%);
	}
	100%{
		opacity: 1;
		-webkit-transform: translateY(0%);
        transform: translateY(0%);
	}
}
</style>
<template>
	<div class="xui_notification">
		<div class="xui_notification_content">
			<div class="xui_notification_head">
				<div>{{defaultOpts.title}}</div>
				<span class="xui_close" @click="handleToClose"></span>
			</div>
			<div class="xui_notification_body">
				{{defaultOpts.content}}
			</div>
			<div class="xui_notification_foot">
				<xui-button type="default"
                    v-if="defaultOpts.btn"
                    @click="handleConfirm"
                >confirm</xui-button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

export default{
	name: 'XuiNotification',
	data(){
		return{
			defaultOpts: {
				title: 'hello, world',
                content: 'This is the content of the notification.',
                duration: '3000',
                fn: null,
			},
			timer: null,
		}
	},
	created(){
		clearInterval(this.timer);
	},
	mounted(){
		this.$nextTick(function(){
			this.defaultOpts = Object.assign(this.defaultOpts, this.$options.options);
			if (this.defaultOpts.duration != 0) {
				this.timer = setTimeout(() =>{
					this.$el.remove();
					this.callback();
				}, this.defaultOpts.duration);
			};
		});
	},
	methods: {
		callback(){
			clearInterval(this.timer);
			this.defaultOpts.fn && this.defaultOpts.fn();
		},
		handleToClose(){
			this.$el.remove();
			this.callback();
		},
		handleConfirm(){
			this.$el.remove();
			this.callback();
		},
	},
	destroyed(){
		clearInterval(this.timer);
	},
	components: {
	}
}
</script>

<style lang="less">
.xui_notification{
	position: fixed;
    right: 0;
    top: 20px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 9999;
    width: 384px;
    margin-right: 24px;
    animation: .2s linear toLeft;
	-webkit-animation: .2s linear toLeft;
	.xui_notification_content{
		padding: 16px 24px;
		border-radius: 4px;
		-webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		background: #fff;
		line-height: 1.5;
		position: relative;
		margin-bottom: 16px;
		overflow: hidden;
	}
	.xui_notification_head{
		font-size: 16px;
		color: rgba(0, 0, 0, 0.85);
		margin-bottom: 8px;
		line-height: 24px;
	}
	.xui_notification_foot{
		text-align: right;
		margin-top: 10px;
		button{
			margin: 0;
			padding: .2em .4em;
			font-size: .9em;
		}
	}
	.xui_close{
		position: absolute;
		right: 10px;
		top: 20px;
		width: 14px;
		height: 14px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEUAAABQUFBQUFBRUVFQUFBQUFBRUVHFwiN3AAAABnRSTlMAYFCwMK9g6AnkAAAAZ0lEQVQoz2OgDnBVgLGYQsCUWSJMQCwZTKmlCUD4jGlJUDoRqgAoA2MgJGAshDiciVAAZqMoAHPAgshKoAoQSqAKEEoQChACGFowDcWwFtNhmE7H9Bym9zEDCDMIMQPZGRENJtSJWAABAR0XeOxDfQAAAABJRU5ErkJggg==) no-repeat center center;
		background-size: contain;
		z-index: 99;
		cursor: pointer;
	}
}
@keyframes toLeft{
	0%{
		opacity: .2;
		-webkit-transform: translateX(50%);
		        transform: translateX(50%);
	}
	100%{
		opacity: 1;
		-webkit-transform: translateX(0%);
		        transform: translateX(0%);
	}
}
</style>
<template>
	<div class="xui_slider_content" :class="styles">
		<div class="xui_slider_img" 
		:style="{width: (options.length * 100 + '%')}"
			ref="xuiImg"
		>
			<div v-for="(item, index) in options" :key="index">
				<a :href="item.link" target="_blank">
					<img :src="item.imgUrl">
				</a>
			</div>
		</div>
		<div class="xui_slider_dot_con">
			<span :data-index="index" 
				class="xui_slider_dot"
				:class="{selected: index == selected}"
				v-for="(item, index) in options"
				:key="index"
				@mouseenter="handleChange($event, index, true)"
				@mouseout="handleReset($event, index)"
			></span>
		</div>
	</div>
</template>

<script type="text/javascript">
let timer = null;

export default{
	data(){
		return{
			selected: 0,
		}
	},
	props: {
		options: {
			type: Array,
		},
		duration: {},
		animation: {},
		styles:{},
	},
	created(){
	},
	mounted(){
		this.$nextTick(function(){
			this.handleReset();
		})
	},
	methods: {
		handleChange(e, index, bool){
			bool && clearInterval(timer);
			this.setImg(index);
		},
		handleReset(){
			timer = setInterval(() =>{
				this.selected = this.selected >= this.options.length - 1 ? 0 : ++this.selected;
				let index = this.selected;
				this.handleChange(null, index);
			}, this.duration || 3000);
		},
		setImg(index){
			let each = 100 / this.options.length;
			let rot = 0;
			rot = -(index * each) + '%';
			this.selected = index;
			let tar = this.$refs.xuiImg.style;
			tar.transform = `translate(${rot})`;
			tar.webkitTransform = `translate(${rot})`;
			tar.mozTransform = `translate(${rot})`;
			tar.MsTransform = `translate(${rot})`;
			if (this.animation) {
				tar.transition = this.animation;
				tar.webkitTransition = this.animation;
			};
			this.$emit('change', {
				index: index,
				target: this.$refs.xuiImg,
			})
		},
	},
	components: {

	},
	destroyed(){
		clearInterval(timer);
	},
}
</script>

<style >
.xui_slider_content{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.xui_slider_content .xui_slider_img{
    width: 400%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-transition: .4s linear;
    transition: .4s linear;
}
.xui_slider_content .xui_slider_img div{
    width: 100%;
    height: 100%;
}
.xui_slider_content .xui_slider_img img{
    width: 100%;
    height: 100%;
    display: block;
}
.xui_slider_content .xui_slider_dot_con{
    position: absolute;
    bottom: 10px;
    left: 50px;
}
.xui_slider_content .xui_slider_dot_con span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 2px;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    -moz-userstart:none;
}
.xui_slider_content .xui_slider_dot_con span.selected{
    background: #4eb900;
}
.xui_slider_content .xui_slider_tab_con span{
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: 44px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    -webkit-transition: .2s linear;
    transition: .2s linear;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    cursor: pointer;
    -moz-userstart:none;
}
.xui_slider_content .xui_slider_tab_con span::before{
    content: '';
    width: 24px;
    height: 24px;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAARUlEQVRIx2NgGITg/4H/5/8LUGbAf4qM+C/w/8KoEaNGDHcj9lNiwHmgAQco036BTC+Mah/VTn/t0IrlAiX57gBF2ukOAOuOzYkal/fUAAAAAElFTkSuQmCC) no-repeat center center;
    background-size: contain;
}
.xui_slider_content .xui_slider_tab_con span:first-child{
    right: 100%;
    margin-right: -44px;
}
.xui_slider_content .xui_slider_tab_con span:first-child::before{
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}
.xui_slider_content .xui_slider_tab_con span:hover{
    background: rgba(0, 0, 0, 0.4);
}
</style>
<template>
	<div class="xui_loading">
		<div>
    		<div class="fence fence1"></div>
    		<div class="fence fence2"></div>
    		<div class="fence fence3"></div>
    		<div class="fence fence4"></div>
    		<div class="fence fence5"></div>
    		<div class="fence fence6"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: '',
		data(){
			return{

			}
		}
	}
</script>

<style lang="less">
.xui_loading{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.51);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 9999;
    > div{
        width: 3em;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 .6em;
        animation: .2s linear show;
        -webkit-animation: .2s linear show;
    }
    .fence{
        width: 4px;
        height: 2em;
        display: inline-block;
        background: #000;
        animation: fence 1.2s infinite ease-in-out;
        -webkit-animation: fence 1.2s infinite ease-in-out;
    }
    .fence1{
        animation-delay: -1.1s;
    }
    .fence1{
        animation-delay: -1.0s;
    }
    .fence2{
        animation-delay: -0.9s;
    }
    .fence3{
        animation-delay: -0.8s;
    }
    .fence4{
        animation-delay: -0.7s;
    }
    .fence5{
        animation-delay: -0.6s;
    }
    .fence6{
        animation-delay: -0.5s;
    }
}
.xui_part_loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
@keyframes fence{
    0%,40%,100%{
        transform: scaleY(.4);
        -webkit-transform: scaleY(.4);
    }
    20%{
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
}
@keyframes show{
	0%{
		opacity: .2;
		-webkit-transform: translateY(-100%);
		        transform: translateY(-100%);
	}
	100%{
		opacity: 1;
		-webkit-transform: translateY(0%);
		        transform: translateY(0%);
	}
}
</style>
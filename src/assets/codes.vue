<template>
	<div class="codes" v-html="html"></div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				html: '',
			}
		},
		props: ['codes'],
		mounted(){
			this.$nextTick(function(){
				let cc = '<pre><code>';
				for(let i = 0; i< this.codes.length; i++){
					let z = this.codes[i],
						reg = /([\<\>\?\/\:\[\}\{\}\'\"\-\+\=\.\;\(\)])+/;
					if (reg.test(z)) {
						cc += `<span class="codes_symbol">${z}</span>`;
					} else {
						cc += `${z}`;
					};
				};
				cc+='</code></pre>';
				this.html = cc;
			})
		}
	}
</script>

<style lang="less">
.codes{
	color: rgb(51, 51, 51);
	overflow: auto;
	word-wrap: normal;
	margin: 12px 0;
	padding: .6em 1em;
	margin-bottom: 1.275em;
	background: #f7f7f7;
	.codes_symbol{
		color: #f5871f;
	}
	.codes_equal{
		color: #718c00;
	}
	.codes_keywords{
		color: #3182bd;
	}
	.codes_quot{
		color: #8959a8;
	}
}
</style>
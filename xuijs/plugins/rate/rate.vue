<template>
    <div class="xui_star" :class="sizeArr[size]">
        <span class="xui_star_dark"  
            v-for="(item, index) in (allStars || defaultStars)" :key="index"
            :class="{xui_star_light: item <= activeStars}"
            >
        </span>
    </div>
</template>

<script type="text/javascript">
    export default{
        name: 'XuiRate',
        data(){
            return{
                defaultStars: 5,
                sizeArr: ['xui_star_small', 'xui_star_big'],
            }
        },
        props:['activeStars', 'allStars', 'size'],
    }
</script>

<style lang="less" scoped>
.xui_star{
    display: flex;
    span{
        display: block;
        width: 24px;
        height: 24px;
    }
    &.xui_star_big span{
        width: 32px;
        height: 32px;
    }
    &.xui_star_small span{
        width: 12px;
        height: 12px;
    }
    .xui_star_dark{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAADb29vf39/b29vf39/a2trb29va2tra2trb29va2trc3Nzb29vb29vb29va2trb29vb29uGcqwRAAAAEXRSTlMA8BDAIKCA0GA/MFB/cODfsPWrUcoAAACpSURBVDjLlZJJDgMhDAQx68Cs/f/PJoIQhAFHqWu1kLFb/Y394fegZC5sot+AWwteEwAvBDzekJYfANwy4FCwC2/xwcx1NKgckbn9MISe4I5Ypj2bG7ifpFRa+PahRJIXE+57wrkP3Y0mXispUT1PcN8I6DkVAww/HIrxsEAEwwxlZNBQNs68TGa3npBJfcBkHXMzS4R1hqquEb4IONsPffm+8GOR2wwyL0c5Gb+ItMKGAAAAAElFTkSuQmCC) no-repeat center center;
        background-size: 100% 100%;
    }
    .xui_star_light{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAADz6in/7yD06in37yj06inz6Sr06ir06ij16yj06iv16yr06yn17Cn06Sn06Snz6Sn17Cr06ip69g8sAAAAEnRSTlMA8BDAIKCA0GA/MH9wUODfsE9GR+fXAAAAqklEQVQ4y5WSWQ7DIAxEMWsga+f+h20VShEGXOX9vhEy9qjH2D9+D0rmwCL6BTi14DUB8ELA4wNp+QHATQMOGTvxFl/MWEeDwhqZe62G0BLcGvO0W3Ud55WUShNfP5RI8mLC/U449qG50cBrJSWK5wnuKwEtm2KA4btDMS4WiGCYrowM6srGGZfJ7NYTblIbMLeOdzNzhHWGii4Rvgg42w59+LbwfZHrDDJv568bJJxYpgAAAAAASUVORK5CYII=) no-repeat center center;
        background-size: 100% 100%;
    }
}
</style>
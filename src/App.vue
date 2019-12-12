<template>
  <div id="app">
    <master></master>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import master from './components/master.vue'
import './assets/css/md.css'
export default {
  name: 'app',
  components: {
    master
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: consolas;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.test{
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  transition: .3s linear;
}
.test.folded{
  transform: translateX(-300px);
}
.xui-vue{
    display: flex;
    align-items: end;
    overflow: hidden;
}
.xui-vue .main{
    flex: 1;
    padding: 40px;
    margin-left: 320px;
    transition: .3s linear;
}
.xui-vue .main.folded{
    margin-left: 0;
}
h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
}
a {
    display: block;
    padding: 12px 15px;
    border-bottom: none;
    color: #364149;
    background: 0 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
a.router-link-exact-active{
    color: #008cff;
    background: 0 0;
    text-decoration: none;
}
ul.nav{
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100%;
    margin: 0;
    list-style-type: none;
    padding: 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
    overflow-y: auto;
    overflow-x: hidden;
}
ul.nav li{
  width: 100%;
}
ul.nav > li:first-child{
  padding: 6px;
  border-bottom: 1px #ccc solid;
}
ul.nav li ul{
    margin-left: 2em;
    padding-left: 0;
}
.introduce{
    margin-top: 1.275em;
    margin-bottom: .85em;
    font-weight: 700;
    font-size: 1em;
}
code,textarea{
  font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
}
code{
    padding: .2em;
    margin: 0;
    font-size: .85em;
    line-height: 1.6em;
    background-color: #f7f7f7;
}
textarea{
    width: 100%;
    height: 100px;
    display: block;
    box-sizing: border-box;
    padding: .37em .57em;
    margin: .57em;
    border: 1px solid #dbdbdb;
    border-radius: .28em;
    font-size: 1em;
    line-height: 1.4;
    outline: none;
    -webkit-transition: border-color 0.5s;
    transition: border-color 0.5s;
    resize: none;
}
.fold{
    position: absolute;
    left: 320px;
    top: 10px;
    display: block;
    width: 18px;
    height: 18px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAHlBMVEUAAABwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHC3GOmPAAAACXRSTlMAwEA/cDAggNA0AQiGAAAAP0lEQVQoz2OgD0g2DmAINoYDMwbPmQIMnTPhYArDAAFFwQIGR0E4EMEUGBgADqBKRABNZEhSCgBiOFBloAsAAHL5GV5135ebAAAAAElFTkSuQmCC) no-repeat center center;
    background-size: 100% 100%;
    cursor: pointer;
}
.fold:hover{
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAACnRSTlMAwEA/cDAggNB/FlekPQAAAEJJREFUKM9joA9INg5gCDaGAzMGr1UCDF2r4GAJwwABRcEJDI6CcCACFChAFRgYAA6gKkQALWRIUgoAYjhQZaALAABH0hsYwG62MQAAAABJRU5ErkJggg==) no-repeat center center;
  background-size: 100% 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}



@media screen and (max-width: 800px) {
  .xui-vue .main{
    box-sizing: border-box;
    width: 100%;
    padding: 40px 20px;
  }
}

::-webkit-scrollbar
{
    width: 10px;
    height: 10px;
}
::-webkit-scrollbar-track-piece
{
    background-color: #ccc;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:vertical
{
    height: 10px;
    background-color: #999;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:horizontal
{
    width: 10px;
    background-color: #999;
    border-radius: 10px;
}
</style>

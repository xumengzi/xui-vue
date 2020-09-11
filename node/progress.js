// progress 进度条

const ProcessBar = require('progress')

const bar = new ProcessBar(':bar', { total: 20, callback(){
  console.log('done')
}})

const timer = setInterval(()=>{
  bar.tick();
  if(bar.complete){
    clearInterval(timer)
  }
}, 1000)
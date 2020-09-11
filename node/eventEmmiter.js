const EventEmmitter = require('events');
const eventEmmitter = new EventEmmitter();

function fn(a){
  console.log('clicked!', a)
}
eventEmmitter.on('click', fn);

setInterval(()=>{
  eventEmmitter.emit('click', 1)
}, 500);

setTimeout(()=>{
  eventEmmitter.removeListener('click', fn)
}, 2000);
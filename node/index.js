// const car = require('./utils');
const cowsay = require('cowsay')
const fs = require('fs');
const path = require('path');
const http = require('http');

let res = http.METHODS;

fs.writeFile('methods.txt', res, 'utf-8', function(error){
  if(error){
    console.log(error);
    return;
  }
  console.log('创建成功')
});

let code = http.STATUS_CODES;
let str = '';
for(let i in code){
  str += `  "${i}": "${code[i]}",
`
}
str = str.substr(0, str.length - 2);
str = `{
${str}
}`

fs.writeFile('httpcode.json', str, 'utf-8', function(error){
  if(error){
    console.log(error);
    return
  }
  console.log('创建成功')
});



// console.log(cowsay.say({
//   text: "lihuahui",
//   e: "oO",
//   T: "U "
// }))
// console.log(cowsay.think({
//   text: 'grazing in the browser',
//   cow: cowsay.SQUIRREL,
//   eyes: 'pp',
//   tongue: ';;',
// }));

// fs.rename('./node/nima.js', './node/wtf.js', function(error){
//   if(error){
//     console.log(error)
//     return
//   }
//   console.log('重命名成功')
// })

// console.log(path.basename())
const http = require('http');
const fs = require('fs');
const { hostname } = require('os');

const port = 3000;

function getCode(){
  let arr = Object.keys(http.STATUS_CODES);
  let ran = Math.round(Math.random() * 62 + 1) || 0;
  let ranCode = arr[ran];
  return ranCode;
}

function getList(code){
  let ans = http.STATUS_CODES[code];
  let arr = Object.values(http.STATUS_CODES);

  let inx = arr.findIndex(item=>item == ans);
  arr.splice(inx, 1);
  arr = arr.sort(()=>{
    return Math.random() - 0.5
  });
  arr.length = 3;
  
  arr.push(ans);
  arr = arr.sort(() => {
    return Math.random() - 0.5
  });
  let res = '';
  arr.forEach(item=>{
    res += `<xui-radio name="${item}" v-model="radio">${item}</xui-radio>`
  });

  return {
    res,
    ans
  };
}

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let content = fs.readFileSync('./node/httpExam.html', 'utf-8');
  let code = getCode()
  content = content.replace(/code/, code)
  let obj = getList(code)
  content = content.replace(/subject/, obj.res)
  content = content.replace(/trueAnswer: "",/, `trueAnswer: "${obj.ans}",`)
  res.end(content)
});

server.listen(port, ()=>{
  console.log('服务器已经运行起来了!')
})
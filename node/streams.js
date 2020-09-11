// 流是为Nodejs应用程序提供动力的基本概念之一
// 它们是一种以高效的方式处理读/写文件, 网络通信, 或任何类型的端到端的信息交流

// 主要优点:
/*
1. 内存效率, 无需加载大量的数据到内存中即可处理.
2. 时间效率, 当获得数据之后即可立即开始处理数据, 而不用等所有的数据有效负载可用才开始, 节省了大量时间
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(__dirname)
  const stream = fs.createReadStream('README.md');
  stream.pipe(res);
});

server.listen(3001);
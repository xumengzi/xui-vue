const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('what is your name?', name =>{
  readline.close();
  let obj = `{
  "directory name": "${name}"
}`
  fs.writeFile('test.json', obj, 'utf-8', function(error){
    if(error){
      console.log('write failed!')
      return
    }
    console.log('write successfully!')
  });
});
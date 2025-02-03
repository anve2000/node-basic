const fs = require('fs')

fs.writeFileSync('./test.txt', "Hey there");
fs.writeFileSync('./test.txt', "Hello world");

fs.writeFile('./test.txt'," Hello world async ", (err)=>{
    
});

console.log('Hello ');
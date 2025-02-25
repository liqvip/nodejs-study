
const fs = require('fs');

const data = fs.readFileSync(__dirname + '/座右铭.txt');

console.log('read file sync done');
console.log(data.toString());

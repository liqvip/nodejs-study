
const fs = require('fs');

fs.writeFileSync(__dirname + '/座右铭.txt', '座右铭：人生苦短，我用Node.js');

console.log('write file sync done');
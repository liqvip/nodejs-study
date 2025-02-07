
const fs = require('fs');

fs.writeFile(__dirname + '/座右铭.txt', '座右铭：人生苦短，我用Python', (err) => {
  if (err) {
    console.log('文件写入失败', err);
  } else {
    console.log('文件写入成功');
  }
});

console.log('write file async');
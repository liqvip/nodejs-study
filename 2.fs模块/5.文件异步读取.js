const fs = require('fs');

fs.readFile(__dirname + '/座右铭.txt', (err, data) => {
    if (err) {
        console.log('文件读取失败', err);
    } else {
        console.log(data.toString());
    }
})

console.log('read file async done');
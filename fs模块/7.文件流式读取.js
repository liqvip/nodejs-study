const fs = require('fs');

const rs = fs.createReadStream(__dirname + '/座右铭.txt');

rs.on('data', (chunk) => {
    console.log(chunk.length)
    console.log(chunk.toString());
});

rs.on('end', () => {

    console.log('read file stream done');
});

rs.on('error', (err) => {
    console.log('文件读取失败', err);
});
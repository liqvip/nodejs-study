
const fs = require('fs');

// 方式1 - 同步读取后同步写入新文件。将一个文件的全部内容加载到内存中，然后再写入新文件
const data = fs.readFileSync(__dirname + '/座右铭.txt');
fs.writeFileSync(__dirname + '/座右铭-复制1.txt', data);

// 方式2-流式读取后流式写入新文件。每次读取一部分数据，然后写入新文件。
const rs = fs.createReadStream(__dirname + '/座右铭.txt');
const ws = fs.createWriteStream(__dirname + '/座右铭-复制2.txt');

rs.on('data', (chunk) => {
    ws.write(chunk);
});

// 方式3:管道
// rs.pipe(ws);


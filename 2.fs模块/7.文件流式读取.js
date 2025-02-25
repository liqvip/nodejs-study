/**
 *
 * 文件流式读取的特点：
 * 1. 适用于大文件读取
 * 2. 读取速度快
 * 3. 读取过程中不会一次性将文件内容加载到内存中
 */

// 引入fs模块
const fs = require('fs');

// 创建读取流对象
const rs = fs.createReadStream(__dirname + '/座右铭.txt');

rs.on('data', (chunk) => {
    console.log(chunk.length)   // 65536 字节=>64KB=>64*2^10
    console.log(chunk.toString());
});

rs.on('end', () => {

    console.log('read file stream done');
});

rs.on('error', (err) => {
    console.log('文件读取失败', err);
});
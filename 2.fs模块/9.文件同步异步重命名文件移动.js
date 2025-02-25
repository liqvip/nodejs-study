
const fs = require('fs');

/*fs.renameSync(__dirname + '/座右铭.txt', __dirname + '/座右铭-重命名1.txt');

console.log('文件同步重命名结束');

fs.rename(__dirname + '/座右铭.txt', __dirname + '/座右铭-重命名2.txt', (err) => {
    if(err) {
        console.log('文件重命名失败', err);
    } else {
        console.log('文件重命名成功');
    }

    console.log('文件异步重命名结束');
});*/


// 文件移动
fs.renameSync(__dirname + '/座右铭.txt', __dirname + '/move/座右铭.txt');
console.log('文件移动结束');

const fs = require('fs');

/*fs.unlink(__dirname + '/座右铭.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件删除成功');
});*/

fs.rm(__dirname + '/座右铭.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件删除成功');
});
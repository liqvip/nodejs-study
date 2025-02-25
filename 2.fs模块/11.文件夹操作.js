
const fs = require('fs');

/*fs.mkdir(__dirname + '/test', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件夹创建成功');
});*/


// 2. 递归创建文件夹
fs.mkdir(__dirname + '/test/test1/test2', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件夹创建成功');
});


// 3. 文件夹读取
/*fs.readdir(__dirname + '/test', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});*/


//4. 文件夹删除
/*fs.rmdir(__dirname + '/test', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件夹删除成功');
});*/

// 5. 递归删除文件夹
fs.rmdir(__dirname + '/test', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件夹删除成功');
});

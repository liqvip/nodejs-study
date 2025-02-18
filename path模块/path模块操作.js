
const path = require('path');

console.log(`${__dirname}/index.html`); // Windows 下的文件分隔符是 \，Linux 下的文件分隔符是 /，'/index.html'这些路径写法在 Windows 下并不规范，但是代码可以正常运行。

// path.resolve()方法可以将多个路径拼接为一个规范化的绝对路径。
// resolve 会从前往后找到一个绝对路径，然后将后面的路径拼接到这个绝对路径后面。
console.log(path.resolve(__dirname, 'index.html'));

console.log(path.sep);  // 获取当前操作系统的文件分隔符

console.log(path.parse(__filename));  // 解析路径并返回一个对象

console.log(path.basename(__filename));  // 返回路径中的最后一部分
console.log(path.basename(__dirname));  // 返回路径中的最后一部分

console.log(path.dirname(__filename));  // 返回路径中的目录名
console.log(path.dirname(__dirname));  // 返回路径中的目录名

console.log(path.extname(__filename));  // 返回路径中的扩展名
console.log(path.extname(__dirname));  // 返回路径中的扩展名




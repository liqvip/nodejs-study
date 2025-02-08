/**
 * @type {Buffer}
 * Buffer 缓冲器是 Node.js 中用于处理二进制数据的类，它是一个全局对象，不需要 require 引入
 * 类似于字节数组，但是大小是固定的，且是一个经过优化的全局对象，属于 Node.js 的核心模块
 */


// 1. 使用 alloc 创建一个长度为 10 字节的 Buffer
const buf1 = Buffer.alloc(10);
// console.log(buf1);

// 2. 使用 allocUnsafe 创建一个长度为 1000 字节的 Buffer
const buf2 = Buffer.allocUnsafe(1000);
// console.log(buf2);

// 3. 使用 from 创建一个长度为 3 字节的 Buffer
const buf3 = Buffer.from([1, 2, 3]);
console.log(buf3);
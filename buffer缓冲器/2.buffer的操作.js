
// buffer 与字符串的相互转换
const buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf.toString()); // iloveyou

const buf2 = Buffer.from('hello');
console.log(buf2[0]);   // 104



const fs = require('fs');

const ws = fs.createWriteStream(__dirname + '/座右铭.txt');

ws.write('春眠不觉晓\r\n');
ws.write('处处闻啼鸟\r\n');
ws.write('夜来风雨声\r\n');
ws.write('花落知多少\r\n');

ws.close();
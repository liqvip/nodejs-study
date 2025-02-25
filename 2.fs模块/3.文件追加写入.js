const fs = require('fs');

/*fs.appendFile(__dirname + '/座右铭.txt', '。温故而知新，可以为师矣', (err) => {
    if (err) {
    console.log('文件追加失败', err);
  } else {
    console.log('文件追加成功');
  }
});*/

// fs.appendFileSync(__dirname + '/座右铭.txt', '\n老当益壮，宁移白首之心');

fs.writeFileSync(__dirname + '/座右铭.txt', '\n老当益壮', {flag: 'a'});
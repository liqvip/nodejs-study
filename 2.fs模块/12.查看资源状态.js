
const fs = require('fs');

fs.stat(__dirname + '/move/座右铭.txt', (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats);
});
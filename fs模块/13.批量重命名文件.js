
const fs = require('fs');

const data = fs.readdirSync(__dirname + '/').filter((item) => {
    return item.endsWith('.js');
});

data.forEach((item) => {
    let [num, name, suffix] = item.split('.');

    if(Number(num) < 10) {
        num = '0' + num;
    }

    const newName = `${num}.${name}.${suffix}`;

    fs.renameSync(__dirname + '/' + item, __dirname + '/' + newName);
});
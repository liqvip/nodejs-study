const express = require('express');

const {singers} = require('./singers.json');

const app = express();

app.get('/:id.html', (req, res) => {
    // 获取 URL 路由参数
    const {id} = req.params;

    const singer = singers.find((item) => {
        if(item.singer_id === Number(id)) {
            return item;
        }
    })

    if(!singer) {
        res.statusCode = 404;
        res.end('Not Found');
    }

    res.end(JSON.stringify(singer));
});

app.listen(8000, () => {
    console.log('server is running, listening on port 8000');
});
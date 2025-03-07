
const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.end('')
});

app.listen(80, () => {
    console.log('server is running');
})
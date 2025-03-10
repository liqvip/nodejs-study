const express = require('express');
const app = express();

const { homeRouter, adminRouter } = require('./router');
app.use(homeRouter);
app.use(adminRouter);

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});
const express = require('express');

// 创建路由对象
const router = express.Router();


router.get('/admin', (req, res) => {
    res.send('admin page');
});

router.get('/settings', (req, res) => {
    res.send('settings page');
});

module.exports = router;
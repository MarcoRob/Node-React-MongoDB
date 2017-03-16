const express = require('express');
const data = require('../src/testData');
const router = express.Router();

router.get('/contests', (req, res) => {
    res.send({contests : data.contests})
});

router.get('/test', (req, res) => {
    res.send({'test' : 'test.data'});
})

module.exports = router;
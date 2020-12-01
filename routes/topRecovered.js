var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const resultRecovered = await db.topRecovered();
    res.render('graphRecovered', {
        recovered: resultRecovered.rows,
    });
});

module.exports = router;
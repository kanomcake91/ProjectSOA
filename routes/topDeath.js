var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const resultDeath = await db.topDeath();
    res.render('graphDeath', {
        death: resultDeath.rows,
    });
});

module.exports = router;
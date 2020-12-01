var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const resultConfirmed = await db.topConfirmed();
    res.render('graphConfirmed', {
        confirmed: resultConfirmed.rows,
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const resultConfirmed = await db.searchRecovered();
    res.render('recovered', {
        recovered: resultConfirmed.rows,
    });
});

router.get('/dataRecovered/:country', async function(req, res, next) {
    var country = req.params.country;
    const result = await db.searchRecoveredByCountry(country);
    res.render('dataRecovered', {
        chartRecovered: result.rows,
    })
});

module.exports = router;
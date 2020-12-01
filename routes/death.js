var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const resultConfirmed = await db.searchDeath();
    res.render('death', {
        death: resultConfirmed.rows,
    });
});

router.get('/dataDeath/:country', async function(req, res, next) {
    var country = req.params.country;
    const result = await db.searchDeathByCountry(country);
    res.render('dataDeath', {
        chartDeath: result.rows,
    })
});

module.exports = router;
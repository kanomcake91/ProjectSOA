var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const resultConfirmed = await db.searchConfirmed();
    res.render('confirmed', {
        confirmed: resultConfirmed.rows,
    });
});

router.get('/dataConfirmed/:country', async function(req, res, next) {
    var country = req.params.country;
    const result = await db.searchConfirmedByCountry(country);
    console.log(result.rows);
    res.render('dataConfirmed', {
        chartConfirmed: result.rows,
    })
});

module.exports = router;
var express = require('express');
var router = express.Router();
const db = require('../database/database');

router.get('/', async function(req, res, next) {
    const Confirmed = await db.getMapConfirmed();
    const Death = await db.getMapDeath();
    const Recovered = await db.getMapRecovered();

    res.render('index', {
        mapConfirmed: Confirmed.rows,
        mapDeath: Death.rows,
        mapRecovered: Recovered.rows
    });

});

module.exports = router;
var express = require('express');
var router = express.Router();
const db = require('../database/database');
const mapLat = require('../database/map');

/* GET home page. */
router.get('/', async function(req, res, next) {

    const resultConfirmed = await db.getConfirmed();
    const resultDeath = await db.getDeath();
    const lat = await mapLat.getMap();
    //console.log(lat);

    res.render('index', {
        confirmed: resultConfirmed.rows,
        death: resultDeath.rows,
        latitude: lat.rows
    });
    // res.json(result);

});

module.exports = router;
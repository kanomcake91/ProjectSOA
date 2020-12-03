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

router.get('/table', async function(req, res, next) {
    const resultConfirmed = await db.searchConfirmed();
    const resultDeath = await db.searchDeath();
    const resultRecovered = await db.searchRecovered();

    var objectConfirmed = [];
    for (const key in resultConfirmed.rows) {
        const element = resultConfirmed.rows[key];
        if (element.confirmed != '') {
            objectConfirmed[key] = {
                country: element.country,
                state: element.state,
                confirmed: element.confirmed,
                death: resultDeath.rows[key].death,
                recovered: resultRecovered.rows[key].recovered
            }
        }
    }

    res.render('table', {
        confirmed: objectConfirmed,
    });
});

router.get('/country/:state/:country', async function(req, res, next) {
    var state = req.params.state;
    var country = req.params.country;

    if (state != "null") {
        var statusCountry = await db.getStatusByState(state);
        var confirmed = await db.searchConfirmedByState(state);
        var recovered = await db.searchRecoveredByState(state);
        var deaths = await db.searchDeathByState(state)
    } else {
        var statusCountry = await db.getStatusByCountry(country);
        var confirmed = await db.searchConfirmedByCountry(country);
        var recovered = await db.searchRecoveredByCountry(country);
        var deaths = await db.searchDeathByCountry(country)
    }
    const ObjectLastWeek = {
            Confirmed: confirmed.rows[0],
            Recovered: recovered.rows[0],
            Deaths: deaths.rows[0]
        }
        // console.log(ObjectLastWeek);

    res.render('country', { Status: statusCountry.rows[0], WeekStatus: ObjectLastWeek })
});

router.get('/graphConfirmed', async function(req, res, next) {
    const resultConfirmed = await db.topConfirmed();
    console.log(resultConfirmed.rows);
    res.render('graphConfirmed', {
        confirmed: resultConfirmed.rows,
    });
});

router.get('/graphDeath', async function(req, res, next) {
    const resultDeath = await db.topDeath();
    console.log(resultDeath.rows);
    res.render('graphDeath', {
        death: resultDeath.rows,
    });
});

router.get('/graphRecovered', async function(req, res, next) {
    const resultRecovered = await db.topRecovered();
    res.render('graphRecovered', {
        recovered: resultRecovered.rows,
    });
});

module.exports = router;
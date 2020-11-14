var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var result;
    await db.getData(function(results) {
        result = results;
        console.log(result);
        res.render('index', { confirmed: result });
    })


});

module.exports = router;
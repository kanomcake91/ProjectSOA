const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'covid_db',
    port: 3306,

});

async function getData(callback) {

    const lat = 'SELECT `Lat`,`Long`,`Country/Region`,`Province/State`,`3/23/20` FROM confirmed_db';
    await pool.query(lat, function(error, results, fields) {
        try {
            return callback(results)
        } catch (error) {
            console.log(error);
        }
    });

}

module.exports = { getData }
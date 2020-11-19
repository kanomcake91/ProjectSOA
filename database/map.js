const { Pool } = require('pg')

const pool = new Pool({

    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: '1928',
    port: 5432,
});

async function getMap() {
    const lat = `SELECT Lat , Long , "Country/Region" as Country FROM db_confirmed_csv`;
    const data = await pool.query(lat);
    console.log(data.rows[0]);
    return data;
}

module.exports = {
    getMap
}
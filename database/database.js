const { Pool } = require('pg')

const pool = new Pool({

    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: '1928',
    port: 5432,
});

async function getConfirmed() {
    const sql = `SELECT Lat,Long,"Country/Region" as Country,"Province/State" as Province,"3/23/20" as Confirmed FROM db_confirmed_csv`;

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function getDeath() {
    const sql = `SELECT Lat,Long,"Country/Region" as Country,"Province/State" as Province,"3/23/20" as Death FROM db_death_csv`;

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function getRecovered() {
    const sql = `SELECT Lat,Long,"Country/Region" as Country,"Province/State" as Province,"3/23/20" as Death FROM db_death_csv`;

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}


module.exports = {
    getConfirmed,
    getDeath,
    getRecovered
}
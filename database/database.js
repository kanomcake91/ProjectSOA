const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: '1928',
    port: 5432,
});



async function getMapConfirmed() {
    const sql = `SELECT Lat , Long , "Country/Region" as Country , "3/23/20" as Confirmed FROM db_confirmed_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getMapDeath() {
    const sql = `SELECT Lat , Long , "Country/Region" as Country , "3/23/20" as Death FROM db_death_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getMapRecovered() {
    const sql = `SELECT Lat , Long , "Country/Region" as Country , "3/23/20" as Recovered FROM db_recovered_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function searchConfirmed() {
    const sql = `SELECT "Country/Region" as Country,"Province/State" as State ,"3/23/20" as Confirmed FROM db_confirmed_csv `;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function searchDeath() {
    const sql = `SELECT "Country/Region" as Country,"Province/State" as State ,"3/23/20" as Death FROM db_death_csv `;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function searchRecovered() {
    const sql = `SELECT "Country/Region" as Country,"Province/State" as State ,"3/23/20" as Recovered FROM db_recovered_csv `;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function searchConfirmedByCountry(country) {
    const sql = `SELECT "Country/Region" as Country,"Province/State" as State ,"3/23/20" as Monday , "3/22/20" as Sunday ,"3/21/20" as Saturday , 
    "3/20/20" as Firday ,"3/19/20" as Thursday , "3/18/20" as Wednesday , "3/17/20" as Tuesday  
    FROM db_confirmed_csv where "Country/Region" = '${country}'`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function searchDeathByCountry(country) {
    const sql = `SELECT "Country/Region" as Country,"Province/State" as State ,"3/23/20" as Monday , "3/22/20" as Sunday ,"3/21/20" as Saturday , 
    "3/20/20" as Firday ,"3/19/20" as Thursday , "3/18/20" as Wednesday , "3/17/20" as Tuesday  
    FROM db_death_csv where "Country/Region" = '${country}'`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function searchRecoveredByCountry(country) {
    const sql = `SELECT "Country/Region" as Country,"Province/State" as State ,"3/23/20" as Monday , "3/22/20" as Sunday ,"3/21/20" as Saturday , 
    "3/20/20" as Firday ,"3/19/20" as Thursday , "3/18/20" as Wednesday , "3/17/20" as Tuesday  
    FROM db_recovered_csv where "Country/Region" = '${country}'`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}

async function topConfirmed() {
    const sql = `select "Country/Region" as Country , "3/23/20" as Confirmed from db_confirmed_csv order by LENGTH("3/23/20") desc , "3/23/20" desc limit 10`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function topDeath() {
    const sql = `select "Country/Region" as Country , "3/23/20" as Death from db_death_csv order by LENGTH("3/23/20") desc , "3/23/20" desc limit 10`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function topRecovered() {
    const sql = `select "Country/Region" as Country , "3/23/20" as Recovered from db_recovered_csv order by LENGTH("3/23/20") desc , "3/23/20" desc limit 10`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}



module.exports = {
    getMapConfirmed, //
    getMapDeath, //
    getMapRecovered, //
    searchConfirmed, //
    searchDeath, //
    searchRecovered, //
    searchConfirmedByCountry, //
    searchDeathByCountry, //
    searchRecoveredByCountry, //
    topConfirmed,
    topDeath,
    topRecovered

}
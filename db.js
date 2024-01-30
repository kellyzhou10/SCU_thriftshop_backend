const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "thriftshop",
    password: "1Bluealien00$",
    port: 5432,
});

module.exports = pool;
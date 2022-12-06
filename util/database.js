const mysql = require("mysql2");

const pool = mysql.createPool({
  user: "root",
  password: "root",
  host: "localhost",
  database: "nodelearning",
});

module.exports = pool.promise();

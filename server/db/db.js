const mysql = require("mysql");
const path = require("path");

require("dotenv").config(path.join(__dirname+'../../.env'));

const pool = mysql.createPool({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  password: process.env.DB_Password,
  database: process.env.DB_Database,
  waitForConnections: true,
  connectionLimit: 10,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    throw err;
  }
  console.log("Database connected successfully");
  connection.release();
})

module.exports = pool;
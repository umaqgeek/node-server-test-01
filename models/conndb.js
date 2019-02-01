const mysql = require('mysql');

// create connection config
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "project01_db"
});

// establish connection database
con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected ..");
});

module.exports = con;

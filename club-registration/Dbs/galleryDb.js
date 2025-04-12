
require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, // optional, if you're selecting a DB
  });

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL.");
    
    // Create AllClubs database
    con.query('CREATE DATABASE IF NOT EXISTS AllClubs', function (err, result) {
        if (err) throw err;
        console.log("Database 'AllClubs' created or already exists.");
    });

    con.end(); // Close the connection after operation
});

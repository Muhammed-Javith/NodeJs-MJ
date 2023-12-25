
var mysql = require('mysql');

//connection string

var con = mysql.createConnection({
  host: "localhost",
  user: "useradmin",
  password: "admin123",
  database: "Personal"
});
//conenction check
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

//table creation without primary key

  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

//table creation with primary key

// var sql = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

//after table cretaion adding primary key
var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
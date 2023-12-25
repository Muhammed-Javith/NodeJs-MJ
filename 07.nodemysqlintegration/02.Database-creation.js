
var mysql = require('mysql');

//connection string

var con = mysql.createConnection({
  host: "localhost",
  user: "useradmin",
  password: "admin123"
});
//conenction check
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //creating database
  con.query("CREATE DATABASE Personal", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
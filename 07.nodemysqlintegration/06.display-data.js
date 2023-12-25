
var mysql = require('mysql');

//connection string

var con = mysql.createConnection({
  host: "localhost",
  user: "useradmin",
  password: "admin123",
  database: "Personal"
});
//conenction check
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //display data

  var sql = "SELECT * FROM students";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  //method 2
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
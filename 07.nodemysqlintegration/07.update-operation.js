
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

//update data
var sql = "UPDATE students SET address = 'Canyon 123' WHERE address = 'Highway 40'";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result.affectedRows + " record(s) updated");
});
});
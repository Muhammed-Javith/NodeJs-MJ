
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

});
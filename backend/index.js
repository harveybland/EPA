const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json())

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Api listening on port ${port}`)
});

// Connects database
var con = mysql.createConnection({
    host: "ap-sp-proj-c.chwmwhavjzga.eu-west-2.rds.amazonaws.com",
    user: "admin",
    password: "Yh2RCmGWfXFxwZv68J4m",
    database: "webform"
  });


// Gets all apprenticeships
  // con.connect(function(err) {
  //   if (err) throw err;
  //   con.query("SELECT * FROM Apprenticeships", function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // });

// Gets limited apprenticeships
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * FROM Apprenticeships LIMIT 2";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });


// Posts an apprenticeship
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO Contact (firstname, surname, email) VALUES ('Harvey', 'Bland', 'harvey.bland@genius.online')";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });


// Deletes an apprenticeship
  // con.connect(function(err) {
  //   if (err) throw err;
  //   var sql = "DELETE FROM Contact WHERE firstname = 'Harvey'";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Number of records deleted: " + result.affectedRows);
  //   });
  // });
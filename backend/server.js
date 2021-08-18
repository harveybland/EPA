const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: '*'}))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// const db = require("../backend/models")
// db.sequelize.sync()

require("./routes/contactRoutes")(app)
require("./routes/appRoutes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}.`);});

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "ap-sp-proj-c.chwmwhavjzga.eu-west-2.rds.amazonaws.com",
    user: "admin",
    password: "Yh2RCmGWfXFxwZv68J4m",
    database: "webform"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Apprenticeships", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
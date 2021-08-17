const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: '*'}))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// const db = require("../backend/models")
// db.sequelize.sync()

module.exports.app = app;
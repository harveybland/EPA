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
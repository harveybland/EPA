const dbconfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    define: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Apprenticeships'
    }
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Contact = require("./apprenticeship.model")(sequelize, Sequelize);
module.exports = db
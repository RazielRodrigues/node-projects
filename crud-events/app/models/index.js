const dbConfig = require('../../db.config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    operatorAliases: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.eventos = require('./eventos.model.js')(sequelize, Sequelize);
db.usuarios = require('./usuarios.model.js')(sequelize, Sequelize);

module.exports = db;
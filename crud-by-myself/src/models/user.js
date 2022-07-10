const { DataTypes } = require('sequelize');

module.exports = {
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
}
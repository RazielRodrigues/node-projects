const { DataTypes } = require('sequelize');

module.exports = {
    name: {
        type: DataTypes.STRING,
    },
    hokage: {
        type: DataTypes.STRING
    },
}
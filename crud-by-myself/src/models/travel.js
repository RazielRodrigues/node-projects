const { DataTypes } = require('sequelize');

module.exports = {
    name: {
        type: DataTypes.STRING,
    },
    decription: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.INTEGER,
    }
}
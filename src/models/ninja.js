const { DataTypes } = require('sequelize');

module.exports = {
    name: {
        type: DataTypes.STRING,
    },
    jutsu: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    value: {
        type: DataTypes.INTEGER,
    }
}
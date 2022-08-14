const { DataTypes } = require('sequelize');

module.exports = {
    name: {
        type: DataTypes.STRING,
    },
    jutsu: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.INTEGER,
    }
}
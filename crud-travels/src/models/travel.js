const { DataTypes } = require('sequelize');

module.exports = {
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.INTEGER,
    }
}
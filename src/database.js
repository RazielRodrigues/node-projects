const { Sequelize } = require('sequelize');
const Ninja = require('./models/ninja');
const Village = require('./models/village');

const tableConfig = {
    freezeTableName:true,
    timestamps: false,
}

class Database {

    async syncModels(connection) {
        connection.define('ninja', Ninja, tableConfig);
        connection.define('village', Village, tableConfig);
    }

    async connection() {
        const connection = new Sequelize('ninjas', 'hokage', 'hokage123', {
            host: 'localhost',
            dialect: 'mysql'
        });
        
        await this.syncModels(connection);
        
        return connection;
    }

}

module.exports = new Database();
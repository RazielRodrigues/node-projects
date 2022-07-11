const { Sequelize } = require('sequelize');
const Travel = require('./models/travel');
const User = require('./models/user');

const tableConfig = {
    freezeTableName:true,
    timestamps: false,
}

class Database {

    async syncModels(connection) {
        connection.define('travel', Travel, tableConfig);
        connection.define('user', User, tableConfig);
    }

    async connection() {
        const connection = new Sequelize('project_two', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
        
        await this.syncModels(connection);
        
        return connection;
    }

}

module.exports = new Database();
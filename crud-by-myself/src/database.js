const { Sequelize } = require('sequelize');
const Travel = require('./models/travel');
const User = require('./models/user');

class Database {

    async syncModels(connection) {
        connection.define('Travel', Travel);
        connection.define('User', User);
    }

    async connection() {
        const connection = new Sequelize('project_two', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
        
        await this.syncModels(connection);
        
        return connection;
    }

    async create(options) { }

    async read(id, options) { }

    async update(id, options) { }

    async delete(id) { }

}

module.exports = new Database();
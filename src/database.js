const { Sequelize } = require('sequelize');
const Ninja = require('./models/ninja');
const Village = require('./models/village');

const tableConfig = {
    freezeTableName:true,
    timestamps: 0,
}

class Database {

    async syncModels(connection) {
        const NinjaModel = await connection.define('ninja', Ninja, tableConfig);
        const VillageModel = await connection.define('village', Village, tableConfig);
        VillageModel.hasMany(NinjaModel);
        NinjaModel.belongsTo(VillageModel);
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
const { Sequelize } = require('sequelize');
class Database{

    async connection(){
        return new Sequelize('project_two', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }

    async create(options){}

    async read(id, options){}

    async update(id, options){}

    async delete(id){}

    // async test(){
    //     try {
    //         const x = await this.connection();
    //         x.authenticate()
    //         console.log('Connection has been established successfully.');
    //     } catch (error) {
    //         console.error('Unable to connect to the database:', error);
    //     }
    // }

}

module.exports = new Database();
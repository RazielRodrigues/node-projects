const Database = require('./../database');


class TravelController {
    
    async create(req, res) {

        const connection = await Database.connection();
        const TravelRepository = connection.modelManager.getModel('Travel');

        await TravelRepository.create(req.body)

        return {
            message: "Success!"
        };
    }

    async read(req, res) {
        console.log(req);
    }

    async update(req, res) {
        console.log(req);
    }

    async delete(req, res) {
        console.log(req);
    }

}

module.exports = new TravelController();
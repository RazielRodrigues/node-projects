const Database = require('./../database');


class TravelController {

    async create(req, res) {
        const connection = await Database.connection();
        const TravelRepository = connection.modelManager.getModel('travel');

        await TravelRepository.create(req.body)

        return {
            message: "Success!"
        };
    }

    async read(req, res) {
        const connection = await Database.connection();
        const TravelRepository = connection.modelManager.getModel('travel');

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await TravelRepository.findAll(options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async update(req, res) {
        const connection = await Database.connection();
        const TravelRepository = connection.modelManager.getModel('travel');

        if (!req.query.id) {
            return {
                message: "Must pass the id!"
            };
        }

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await TravelRepository.update(req.body, options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async delete(req, res) {
        const connection = await Database.connection();
        const TravelRepository = connection.modelManager.getModel('travel');

        if (!req.query.id) {
            return {
                message: "Must pass the id!"
            };
        }

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await TravelRepository.destroy(options)

        return {
            response: response,
            message: "Success!"
        };
    }

}

module.exports = new TravelController();
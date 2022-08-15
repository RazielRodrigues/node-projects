const Database = require('./../database');


class VillageController {

    async create(req, res) {
        const connection = await Database.connection();
        const VillageRepository = connection.modelManager.getModel('village');

        if (!req.body) {
            return {
                message: "Must pass the body!"
            };
        }

        await VillageRepository.create(req.body)

        return {
            message: "Success!"
        };
    }

    async read(req, res) {
        const connection = await Database.connection();
        const VillageRepository = connection.modelManager.getModel('village');

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await VillageRepository.findAll(options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async update(req, res) {
        const connection = await Database.connection();
        const VillageRepository = connection.modelManager.getModel('village');

        if (!req.query.id) {
            return {
                message: "Must pass the id!"
            };
        }

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await VillageRepository.update(req.body, options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async delete(req, res) {
        const connection = await Database.connection();
        const VillageRepository = connection.modelManager.getModel('village');

        if (!req.query.id) {
            return {
                message: "Must pass the id!"
            };
        }

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await VillageRepository.destroy(options)

        return {
            response: response,
            message: "Success!"
        };
    }

}

module.exports = new VillageController();
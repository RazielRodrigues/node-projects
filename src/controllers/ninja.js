const Database = require('./../database');


class NinjaController {

    async create(req, res) {
        const connection = await Database.connection();
        const NinjaRepository = connection.modelManager.getModel('ninja');

        if (!req.body) {
            return {
                message: "Must pass the body!"
            };
        }

        await NinjaRepository.create(req.body)

        return {
            message: "Success!"
        };
    }

    async read(req, res) {
        const connection = await Database.connection();
        const NinjaRepository = connection.modelManager.getModel('ninja');

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await NinjaRepository.findAll(options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async readDetails(req, res) {
        const connection = await Database.connection();
        const NinjaRepository = connection.modelManager.getModel('ninja');
        const VillageRepository = connection.modelManager.getModel('village');

        const response = await NinjaRepository.findAll(
            {
                where: { id: req.query.id },
                include: [{
                  model: VillageRepository,
                }]
              }
        )

        return {
            response: response,
            message: "Success!"
        };
    }

    async update(req, res) {
        const connection = await Database.connection();
        const NinjaRepository = connection.modelManager.getModel('ninja');

        if (!req.query.id) {
            return {
                message: "Must pass the id!"
            };
        }

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await NinjaRepository.update(req.body, options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async delete(req, res) {
        const connection = await Database.connection();
        const NinjaRepository = connection.modelManager.getModel('ninja');

        if (!req.query.id) {
            return {
                message: "Must pass the id!"
            };
        }

        const options = (req.query.id) ? { where: { id: req.query.id } } : {};

        const response = await NinjaRepository.destroy(options)

        return {
            response: response,
            message: "Success!"
        };
    }

    async hire(req, res) {
        return {
            // response: response,
            message: "Success in hiring!"
        };
    }

}

module.exports = new NinjaController();
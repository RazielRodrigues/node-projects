const Database = require('./../database');
const DtoNinja = require('./../dto/ninja');

class NinjaController {

    async create(req, res) {
        try {
            const connection = await Database.connection();
            const NinjaRepository = connection.modelManager.getModel('ninja');
    
            const dtoNinja = new DtoNinja(req.body);
    
            await NinjaRepository.create(dtoNinja)
    
            return res.status(200).json('ok');

        } catch (error) {
            return res.status(500).json(error.message);
        }
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
const express = require('express');
const router = express.Router();
const NinjaController = require('./../controllers/ninja')
const VillageController = require('./../controllers/village')

router.get('/', async function (req, res){
    const ninjas = await NinjaController.read(req, res);
    res.render('index', {ninjas: Object.values(ninjas.response)});
})

router.get('/village', async function (req, res){
    const village = await VillageController.read(req, res);
    res.render('index', {village: Object.values(village.response)});
})

module.exports = router;
const express = require('express');
const router = express.Router();
const NinjaController = require('./../controllers/ninja')

router.get('/', async function (req, res){
    const ninjas = await NinjaController.read(req, res);
    res.render('index', {ninjas: Object.values(ninjas.response)});
})

module.exports = router;
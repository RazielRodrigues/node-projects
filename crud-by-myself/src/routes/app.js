const express = require('express');
const router = express.Router();
const TravelController = require('./../controllers/travel')

router.get('/', async function (req, res){
    const travels = await TravelController.read(req, res);
    res.render('index', {travels: Object.values(travels.response)});
})

module.exports = router;
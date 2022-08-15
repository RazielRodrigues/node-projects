const express = require('express');
const router = express.Router();
const VillageController = require('./../controllers/village')

router.post("/", async (req, res) => {
    const response = await VillageController.create(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(201).json(response);
})

router.get("/", async (req, res) => {
    const response = await VillageController.read(req, res);

    if (!response)
        res.status(401).json(req.original);

    res.status(200).json(response);
})

router.put("/", async (req, res) => {
    const response = await VillageController.update(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(200).json(response);
})

router.delete("/", async (req, res) => {
    const response = await VillageController.delete(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(200).json(response);
})

module.exports = router;
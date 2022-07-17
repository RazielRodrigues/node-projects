const express = require('express');
const router = express.Router();
const TravelController = require('./../controllers/travel')

router.post("/create", async (req, res) => {
    const response = await TravelController.create(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(201).json(response);
})

router.get("/read", async (req, res) => {
    const response = await TravelController.read(req, res);

    if (!response)
        res.status(401).json(req.original);

    res.status(200).json(response);
})

router.put("/update", async (req, res) => {
    const response = await TravelController.update(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(200).json(response);
})

router.delete("/delete", async (req, res) => {
    const response = await TravelController.delete(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(200).json(response);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const NinjaController = require('./../controllers/ninja')

router.post("/", async (req, res) => {
    return await NinjaController.create(req, res);
})

router.get("/", async (req, res) => {
    return await NinjaController.read(req, res);
})

router.put("/", async (req, res) => {
    const response = await NinjaController.update(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(200).json(response);
})

router.delete("/", async (req, res) => {
    const response = await NinjaController.delete(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(200).json(response);
})

router.post("/hire", async (req, res) => {
    const response = await NinjaController.hire(req, res);

    if (!response)
        res.status(500).json(req.original);

    res.status(201).json(response);
})

router.get("/details", async (req, res) => {
    const response = await NinjaController.readDetails(req, res);

    if (!response)
        res.status(401).json(req.original);

    res.status(200).json(response);
})


module.exports = router;
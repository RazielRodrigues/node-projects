//api/tutorials: GET, POST, DELETE
//api/tutorials/:id: GET, PUT, DELETE
//api/tutorials/published: GET

module.exports = app => {
    const eventos = require('./../controllers/eventos.controller.js');

    var router = require("express").Router();

    router.post("/eventos", eventos.create)
    router.get("/eventos", eventos.findAll)
}
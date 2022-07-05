const db = require('./../models/index.js');
const eventos = require('./../models/eventos.model.js');

const op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const evento = {
      nome: req.body.nome,
      descricao: req.body.descricao,
      link: req.body.link
    };
    // Save Tutorial in the database
    eventos.create(evento)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// exports.create = async (req, res) => {

//     if (!req.body) return res.status(400).send({
//         message: 'Precisa de dados'
//     });
    
//     const { nome, descricao, link } = req.body;

//     await eventos.create({ nome, descricao, link });

//     return res.status(201).send({
//         message: 'Sucesso!'
//     });

// }

exports.findAll = (req, res) => {
  res.send({ok: 'ok'})

  //     const nome = req.query.nome;
    // var condition = nome ? { nome: { [op.like]: `%${nome}%` } } : null;

  };

// exports.findOne = async (req, res) => {

// }

// exports.update = async (req, res) => {

// }

// exports.delete = async (req, res) => {

// }

// exports.deleteAll = async (req, res) => {

// }

// exports.findAllPublished = async (req, res) => {

// }
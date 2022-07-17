const express = require('express');
const cors = require('cors');

// Definindo express
const app = express();

// URL que vai ser liberada para requisição
app.use(cors({
    origin: 'http://localhost:8081',
}))

// libera para receber dados do tipo json
app.use(express.json());

// libera para receber dados do tipo formuluraio
app.use(express.urlencoded({
    extended: true
}));


// Iniciando ORM
const db = require('./app/models/index');

db.sequelize.sync().then(() => { console.log('Database up'); }).catch((err) => { console.log(err); });

// Criando rota de teste
// app.get('/', async (req, res) => {

//     const create  = await db.eventos.create({
//         nome: 'TESTE-' + new Date(),
//         descricao: 'app',
//         link: 'www.google.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });

//     const read  = await db.eventos.findAll({})

//     const update = await db.eventos.update({
//         nome: 'TESTE-' + new Date(),
//         descricao: 'app',
//         link: 'www.google.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });

//     res.json({ eventos: eventos });
// });
require("./app/routes/eventos.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando: ${PORT}`);
})
const express = require('express');
const cors = require('cors')
const server = express();
const port = process.env.PORT || 3333

server.use(cors({origin: 'http://localhost:3334'}))
server.use(express.json())
server.use(express.urlencoded())
server.set('view engine', 'ejs');
server.set('views', './src/views');

//TODO: ADJUST
server.get('/', function(req, res){
 
    var pessoas = [
        {
            'nome': 'Paulo',
            'idade': 12
        },
        {
            'nome': 'Jõao',
            'idade': 15,
        },
        {
            'nome': 'Marina',
            'idade': 25,
        },
    ]

    // Rendering home.ejs page
    res.render('index', {pessoas: pessoas});
})

// Routes
const travelRoutes = require('./src/routes/travel');
server.use('/travel', travelRoutes);

server.listen(port, () => {
    console.log('Server on: port 3333');
})

module.exports = server;
const express = require('express');
const cors = require('cors')
const server = express();
const port = process.env.PORT || 3333

server.use(cors({origin: 'http://localhost:3334'}))
server.use(express.json())
server.use(express.urlencoded())
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(express.static('./src/views/assets'));

// Routes
const ninjaRoutes = require('./src/routes/ninja');
const villageRoutes = require('./src/routes/village');

const appRoutes = require('./src/routes/app');

server.use('/ninja', ninjaRoutes);
server.use('/village', villageRoutes);

server.use('/', appRoutes);

server.listen(port, () => {
    console.log('Server on: port 3333');
})

module.exports = server;
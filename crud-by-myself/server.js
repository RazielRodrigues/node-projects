const express = require('express');
const cors = require('cors')
const server = express();
const port = process.env.PORT || 3333

server.use(cors({origin: 'http://localhost:3334'}))
server.use(express.json())
server.use(express.urlencoded())

// Routes
// TODO: USER ROUTES
const travelRoutes = require('./src/routes/travel');
server.use('/travel', travelRoutes);

server.listen(port, () => {
    console.log('Server on: port 3333');
})

module.exports = server;
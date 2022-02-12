const express = require('express');

const routerBasic = express.Router();

// Defini rutas basica con mensaje
routerBasic.get('/', (req, res) => {
  res.send('Hello World! my server in Express');
})

// crear una ruta personalizada
routerBasic.get('/new-route', (req, res) => {
  res.send('Hello World! I am a new route');
})

module.exports = routerBasic;

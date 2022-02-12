const express = require('express');

const routerUsers = express.Router();

// crear una ruta que recibe un query con limit y offset
routerUsers.get("/", (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({limit, offset})
  } else {
    res.send("No hay parametros")
  }
})

module.exports = routerUsers;

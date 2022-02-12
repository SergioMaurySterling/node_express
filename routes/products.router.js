const express = require('express');
const ProductsService = require('./../services/product.service');
// al ser una clase debo generar una instancia de esta
const service = new ProductsService();
// generar un router especifico para los productos
const routerProducts = express.Router();

// crear una ruta con parametros, si recibe un ?size=5, entonces devuelve 5 elementos
routerProducts.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

// Esta URL chocaria con la de abajo, como es estatica, debe ir primero
// La dinamica (la de abajo) debe ir despues
routerProducts.get("/filter", (req, res) => {
  res.send('Yo soy un filter');
})

routerProducts.get("/:id", async (req, res) => {
  const { id } = req.params
  const ans = await service.findOne(id);
  res.json([ans])
})


// Recibir data por medio de metodo post y devolver un json
// con el objeto que se recibe y un mensaje
routerProducts.post('/', async (req, res) => {
  // la data se recibe en .body
  const body = req.body;
  await service.create(body);
  res.status(201).json({
    message: "Product created",
    data: body
  })
})

// Recibir un la modificacion parcial de un objeto
routerProducts.patch('/:id', async (req, res) => {
  // la data se recibe en body
  const { id } = req.params;
  const body = req.body;
  await service.update(id, body);
  res.json({
    message: "Product updated",
    data: body,
    id,
  })
})

// Enviarle un id y eliminar un objeto
routerProducts.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await service.delete(id);
  res.json({
    message: "Product deleted",
    id,
  })
})


module.exports = routerProducts;

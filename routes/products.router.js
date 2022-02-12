const express = require('express');
const faker = require('faker');

// generar un router especifico para los productos
const routerProducts = express.Router();

// crear una ruta con parametros, si recibe un ?size=5, entonces devuelve 5 elementos
routerProducts.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 20;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
})

// Esta URL chocaria con la de abajo, como es estatica, debe ir primero
// La dinamica (la de abajo) debe ir despues
routerProducts.get("/filter", (req, res) => {
  res.send('Yo soy un filter');
})

// crear una ruta dinamica, que recibe un id como parametro,
// y devuelve un json con el objeto que tenga ese id
routerProducts.get("/:id", (req, res) => {
  let products = [
    {
      id: 1,
      name: 'Product 1',
      price: 1000
    },
    {
      id: 2,
      name: 'Product 2',
      price: 2000
    },
    {
      id: 3,
      name: 'Product 3',
      price: 3000
    },
    {
      id: 4,
      name: 'Product 4',
      price: 4000
    }
  ]
  const { id } = req.params
  const ans = products.find(product => product.id == id)
  if (id == "999") {
    res.status(404).json({
      error: 'Product not found'
    })
  } else {
    res.json([ans])
  }
})


// Recibir data por medio de metodo post y devolver un json
// con el objeto que se recibe y un mensaje
routerProducts.post('/', (req, res) => {
  // la data se recibe en .body
  const body = req.body;
  res.status(201).json({
    message: "Product created",
    data: body
  })
})

// Recibir un la modificacion parcial de un objeto
routerProducts.patch('/:id', (req, res) => {
  // la data se recibe en .body
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Product updated",
    data: body,
    id,
  })
})

// Enviarle un id y eliminar un objeto
routerProducts.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Product deleted",
    id,
  })
})


module.exports = routerProducts;

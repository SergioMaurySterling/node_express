const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

// Defini rutas basica con mensaje
app.get('/', (req, res) => {
  res.send('Hello World! my server in Express');
})

// crear una ruta personalizada
app.get('/new-route', (req, res) => {
  res.send('Hello World! I am a new route');
})

// crear una ruta con parametros, si recibe un ?size=5, entonces devuelve 5 elementos
app.get('/products', (req, res) => {
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
app.get("/products/filter", (req, res) => {
  res.send('Yo soy un filter');
})


// crear una ruta dinamica, que recibe un id como parametro,
// y devuelve un json con el objeto que tenga ese id
app.get("/products/:id", (req, res) => {
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
  res.json([ans])
})

// crear una ruta que recibe mas de un parametro, los recibe y los puede renderizar o trabajar
app.get('/categories/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json([
    {
      name: 'Category 1',
      categorieId,
      productId
    }
  ])
})


// crear una ruta que recibe un query con limit y offset
app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({limit, offset})
  } else {
    res.send("No hay parametros")
  }
})

// Escuchar el puerto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



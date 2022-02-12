const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

// Definir rutas
app.get('/', (req, res) => {
  res.send('Hello World! my server in Express');
})

app.get('/new-route', (req, res) => {
  res.send('Hello World! I am a new route');
})

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

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({limit, offset})
  } else {
    res.send("No hay parametros")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



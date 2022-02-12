const express = require('express');

const routerCategories = express.Router();

// crear una ruta que recibe mas de un parametro, los recibe y los puede renderizar o trabajar
routerCategories.get('/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json([
    {
      name: 'Category 1',
      categorieId,
      productId
    }
  ])
})

module.exports = routerCategories;

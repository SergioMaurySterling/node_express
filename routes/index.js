const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const basicRouter = require('./basic.router');

function routerApi (app) {
  // crear un versionado para todas las rutas
  const router = express.Router();
  app.use("/api/v1", router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/', basicRouter);
}

module.exports = routerApi;

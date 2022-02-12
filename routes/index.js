const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const basicRouter = require('./basic.router');

function routerApi (app) {
  app.use('/api/v1/products', productsRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/categories', categoriesRouter);
  app.use('/api/v1/', basicRouter);
}

module.exports = routerApi;

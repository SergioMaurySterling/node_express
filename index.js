const express = require('express');
const routerApi = require('./routes/index.js');
const app = express();
app.use(express.json())
const { logErrors, clientErrorHandler, boomErrorHandler } = require('./middlewares/error.handler.js');
const port = 3000;

//Aqui estamos llamando los middleware y asignandolos a la app
app.use(logErrors);
app.use(boomErrorHandler);
app.use(clientErrorHandler);

// Escuchar el puerto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
routerApi(app);



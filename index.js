const express = require('express');
const routerApi = require('./routes/index.js');
const app = express();
const port = 3000;

// Escuchar el puerto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

routerApi(app);



const express = require('express');
const app = express();
const port = 3000;

// Definir rutas
app.get('/', (req, res) => {
  res.send('Hello World! my server in Express');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

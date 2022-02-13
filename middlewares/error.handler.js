// Manejo de errores
function logErrors (err, req, res, next){
  //al enviarle el error es un middleware de tipo error
  next(err)
}

// Detectar errores, creara un formato para devolver al cliente
function clientErrorHandler (err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

// Manejar el error con boom
function boomErrorHandler (err, req, res, next){
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

module.exports = { logErrors, clientErrorHandler, boomErrorHandler }

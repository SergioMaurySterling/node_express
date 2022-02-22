const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15).alphanum()
const price = Joi.number().min(10).max(100).integer()


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  id: id
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }

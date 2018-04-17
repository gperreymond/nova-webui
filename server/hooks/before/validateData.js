const Joi = require('joi')
const errors = require('@feathersjs/errors')

const Hook = async function (context) {
  const schema = context.app.$shema[context.path]
  const result = Joi.validate(context.data, schema)
  if (result.error) { throw new errors.BadRequest('Invalid parameters', result.error.details) }
  return context
}

module.exports = Hook

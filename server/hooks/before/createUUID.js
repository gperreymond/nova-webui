const uuid = require('uuid')

const Hook = async function (context) {
  if (!context.data) { context.data = {} }
  context.data.id = uuid.v4()
  return context
}

module.exports = Hook

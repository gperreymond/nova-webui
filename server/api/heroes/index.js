const Service = require('./service')
const createUUID = require('../../hooks/before/createUUID')
const validateData = require('../../hooks/before/validateData')

module.exports = {
  path: 'api/heroes',
  shema: require('./shema'),
  service: new Service(),
  hooks: {
    before: [
      createUUID,
      validateData
    ]
  }
}

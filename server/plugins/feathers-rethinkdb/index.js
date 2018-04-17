// const logger = require('winston')

function init (options = {}) {
  return function () {
    let app = this
    if (app.rethinkdb) {
      throw new Error('You have already registered rethinkdb on this app. You only need to do it once')
    }
    app.$r = require('rethinkdbdash')(options)
  }
}

module.exports = init
module.exports.default = init

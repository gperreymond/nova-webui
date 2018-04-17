const errors = require('@feathersjs/errors')

class Service {
  setup (app, path) {
    this.r = app.$r
  }
  async find (params) {
    return []
  }
  async get (id, params) {}
  async create (data, params) {
    const duplicate = await this.r.table('heroes').filter({ name: data.name })
    if (duplicate.length > 0) {
      return Promise.reject(new errors.BadRequest('Duplicate hero name'))
    }
    await this.r.table('heroes').insert(data).catch(err => {
      return Promise.reject(new errors.GeneralError('Rethinkdb internal errors'), err)
    })
    return { created: true, data }
  }
  async update (id, data, params) {}
  async patch (id, data, params) {}
  async remove (id, params) {}
}

module.exports = Service

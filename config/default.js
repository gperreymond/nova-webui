const nconf = require('nconf')
nconf.argv().env().file({ file: 'nconf.json' })

module.exports = {
  'host': nconf.get('APP_HOST') || '0.0.0.0',
  'port': nconf.get('APP_PORT') || 7000,
  'rethinkdb': {
    'host': nconf.get('APP_RETHINKDB_HOST') || 'localhost',
    'port': nconf.get('APP_RETHINKDB_PORT') || 28015,
    'user': nconf.get('APP_RETHINKDB_USER') || 'admin',
    'password': nconf.get('APP_RETHINKDB_PASS') || 'admin',
    'db': nconf.get('APP_RETHINKDB_DBNAME') || 'nova'
  }
}

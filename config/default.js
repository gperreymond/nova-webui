const path = require('path')
const nconf = require('nconf')
nconf.argv().env().file({ file: 'nconf.json' })

module.exports = {
  'host': nconf.get('APP_HOST') || '0.0.0.0',
  'port': nconf.get('APP_PORT') || 7000,
  'postgres': {
    'host': nconf.get('APP_POSTGRES_HOST') || 'localhost',
    'port': nconf.get('APP_POSTGRES_PORT') || 5432,
    'user': nconf.get('APP_POSTGRES_USER') || 'admin',
    'password': nconf.get('APP_POSTGRES_PASS') || 'admin',
    'db': nconf.get('APP_POSTGRES_DBNAME') || 'warboard'
  },
  'rethinkdb': {
    'host': nconf.get('APP_RETHINKDB_HOST') || 'localhost',
    'port': nconf.get('APP_RETHINKDB_PORT') || 28015,
    'user': nconf.get('APP_RETHINKDB_USER') || 'admin',
    'password': nconf.get('APP_RETHINKDB_PASS') || 'admin',
    'db': nconf.get('APP_RETHINKDB_DBNAME') || 'warboard'
  },
  nova: {
    host: nconf.get('APP_NOVA_HOST') || 'localhost',
    port: nconf.get('APP_NOVA_PORT') || 5672,
    user: nconf.get('APP_NOVA_USER') || 'guest',
    pass: nconf.get('APP_NOVA_PASS') || 'guest'
  }
}

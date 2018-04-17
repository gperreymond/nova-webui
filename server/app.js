const path = require('path')
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const configuration = require('@feathersjs/configuration')
const socketio = require('@feathersjs/socketio')
const rethinkdb = require('./plugins/feathers-rethinkdb')
const logger = require('winston')
const glob = require('glob-promise')

// Configure feathers
const app = express(feathers())
app.configure(configuration())
// Turn on JSON parser for REST services
app.use(express.json())
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({extended: true}))
// Enable the REST provider for services.
app.configure(express.rest())
// Enable the socketio provider for services.
app.configure(socketio())
// Enable rethinkdb
app.configure(rethinkdb(app.get('rethinkdb')))

// Configure services
app.$shema = {}
glob.sync(path.resolve(__dirname, 'api/*/index.js')).map(filepath => {
  const API = require(filepath)
  app.$shema[API.path] = API.shema
  app.use(API.path, API.service)
  app.service(API.path).hooks(API.hooks)
})

// Configure SPA
app.use(express.static(`${path.resolve(__dirname, '../public')}`))
app.get('/heroes', function (request, response) {
  response.sendFile(`${path.resolve(__dirname, '../public/index.html')}`)
})
app.get('/heroes/:uuid', function (request, response) {
  response.sendFile(`${path.resolve(__dirname, '../public/index.html')}`)
})

// Configure a middleware for 404s and the error handler
app.use(express.notFound())
app.use(express.errorHandler({ logger }))

module.exports = app

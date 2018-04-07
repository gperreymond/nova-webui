const path = require('path')
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const configuration = require('@feathersjs/configuration')
const socketio = require('@feathersjs/socketio')
const logger = require('winston')

const rethink = require('rethinkdbdash')
const serviceRethink = require('feathers-rethinkdb')

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

const serviceConfig = { lean: true, paginate: { default: 5 } }

// *** Services
const r = rethink(app.get('rethinkdb'))

app.use('/api/v1/applications', serviceRethink(Object.assign({ Model: r, name: 'applications' }, serviceConfig)))
app.service('/api/v1/applications').hooks(require('./hooks/applications'))

// Configure SPA
app.use(express.static(`${path.resolve(__dirname, '../public')}`))
app.get('/applications', function (request, response) {
  response.sendFile(`${path.resolve(__dirname, '../public/index.html')}`)
})
app.get('/applications/:uuid', function (request, response) {
  response.sendFile(`${path.resolve(__dirname, '../public/index.html')}`)
})

// Configure a middleware for 404s and the error handler
app.use(express.notFound())
app.use(express.errorHandler({ logger }))

module.exports = app

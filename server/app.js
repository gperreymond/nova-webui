const path = require('path')
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const configuration = require('@feathersjs/configuration')
const socketio = require('@feathersjs/socketio')
const logger = require('winston')

const rethink = require('rethinkdbdash')
const serviceRethink = require('feathers-rethinkdb')

const mongoose = require('mongoose')
const serviceMongo = require('feathers-mongoose')

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

// ****************************************
// *** Services: v2 (on rethinkdb)
// ****************************************

const r = rethink(app.get('rethinkdb'))

app.use('/api/v2/applications', serviceRethink(Object.assign({ Model: r, name: 'applications' }, serviceConfig)))
app.service('/api/v2/applications').hooks(require('./hooks/applications'))
app.use('/api/v2/patterns', serviceRethink(Object.assign({ Model: r, name: 'patterns' }, serviceConfig)))
app.service('/api/v2/patterns').hooks(require('./hooks/patterns'))
// ****************************************
// *** Services: v1 (on mongodb)
// ****************************************

mongoose.Promise = global.Promise
mongoose.connect(app.get('mongodb')).then(() => { logger.info('MongoDB connected') }).catch(e => { logger.error(e) })

app.use('/api/v1/users', serviceMongo(Object.assign({ Model: require('./models/mongodb/User') }, serviceConfig)))
app.use('/api/v1/applications', serviceMongo(Object.assign({ Model: require('./models/mongodb/Application') }, serviceConfig)))
app.use('/api/v1/activities', serviceMongo(Object.assign({ Model: require('./models/mongodb/Activity') }, serviceConfig)))
app.use('/api/v1/patterns', serviceMongo(Object.assign({ Model: require('./models/mongodb/Pattern') }, serviceConfig)))
app.use('/api/v1/resources', serviceMongo(Object.assign({ Model: require('./models/mongodb/Resource') }, serviceConfig)))
app.use('/api/v1/snaps', serviceMongo(Object.assign({ Model: require('./models/mongodb/Snap') }, serviceConfig)))

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

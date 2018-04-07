const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ApplicationSchema = new Schema({
  // fields
  name: { type: String, required: true, trim: true, default: '' },
  cover: { type: String, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  // relationships
  auth: { type: Schema.Types.ObjectId, ref: 'User' },
  patterns: [{ type: Schema.Types.ObjectId, ref: 'Pattern' }],
  ressources: [{ type: Schema.Types.ObjectId, ref: 'Resource' }],
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }]
})
ApplicationSchema.set('versionKey', false)
const Model = mongoose.model('applications', ApplicationSchema)

module.exports = Model

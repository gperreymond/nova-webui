const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ResourceSchema = new Schema({
  data: { type: Schema.Types.Mixed },
  // global manuel
  type: { type: String, required: true, trim: true, default: '' },
  name: { type: String, required: true, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  // relationships
  application: { type: Schema.Types.ObjectId, ref: 'Application', required: true }
})
ResourceSchema.set('versionKey', false)
const Model = mongoose.model('ressources', ResourceSchema)

module.exports = Model

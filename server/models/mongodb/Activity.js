const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ActivitySchema = new Schema({
  data: { type: Schema.Types.Mixed },
  // global manuel
  type: { type: String, required: true, trim: true, default: '' }, // LIBRE EN FONCTION DE APPLICATION
  name: { type: String, required: true, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  // relationships
  application: { type: Schema.Types.ObjectId, ref: 'Applications', required: true },
  // collections
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
  patterns: [{ type: Schema.Types.ObjectId, ref: 'Pattern' }],
  ressources: [{ type: Schema.Types.ObjectId, ref: 'Resource' }]
})
ActivitySchema.set('versionKey', false)
const Model = mongoose.model('activities', ActivitySchema)

module.exports = Model

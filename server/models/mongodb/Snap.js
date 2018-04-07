const mongoose = require('mongoose')

const Schema = mongoose.Schema
const SnapSchema = new Schema({
  message: { type: String, trim: true },
  timestamp: { type: Date },
  level: { type: String, trim: true },
  meta: { type: Schema.Types.Mixed }
})
SnapSchema.set('versionKey', false)
const Model = mongoose.model('stats-snaps', SnapSchema)

module.exports = Model

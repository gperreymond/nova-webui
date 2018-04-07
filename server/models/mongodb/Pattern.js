const mongoose = require('mongoose')

const Schema = mongoose.Schema
const PatternSchema = new Schema({
  // fields
  name: { type: String, required: true, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  // fields auto
  filepath: { type: String, trim: true, default: '' },
  filename: { type: String, trim: true, default: '' },
  md5: { type: String, trim: true, default: '' },
  mime: { type: String, trim: true, default: '' },
  date: { type: Date },
  size: { type: Number, default: 0 },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  // relationships
  application: { type: Schema.Types.ObjectId, ref: 'Application' }
})
PatternSchema.set('versionKey', false)
const Model = mongoose.model('patterns', PatternSchema)

module.exports = Model

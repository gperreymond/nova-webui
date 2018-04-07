const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
  // fields
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  info: { type: String, trim: true },
  scope: { type: String, required: true },
  hashedPassword: String,
  provider: String,
  salt: String
})
UserSchema.set('versionKey', false)
const Model = mongoose.model('users', UserSchema)

module.exports = Model

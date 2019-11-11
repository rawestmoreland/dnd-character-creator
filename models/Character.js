const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a character schema
const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  race: {
    type: String
  },
  class: {
    type: String
  }
})

module.exports = Character = mongoose.model('character', CharacterSchema)

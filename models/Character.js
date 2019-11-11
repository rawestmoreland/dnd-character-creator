const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a character schema
const CharacterSchema = new Schema({
  owner: String,
  name: String,
  race: String,
  class: String,
  spells: Array,
  attributes: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    willpower: Number,
    intelligence: Number,
    charisma: Number
  }
})

module.exports = Character = mongoose.model('character', CharacterSchema)

const express = require('express')
const router = express.Router()

// Character model
const Character = require('../../models/Character')

// @ route GET api/characters
// @desc Get all characters
// @access Public (Private later)
router.get('/', (req, res) => {
  Character.find().then(characters => res.json(characters))
})

// @ route POST api/characters
// @desc Add a character
// @access Public (Private later)
router.post('/', (req, res) => {
  const newCharacter = new Character({
    name: req.body.name,
    race: req.body.race,
    class: req.body.class,
    gender: req.body.gender
  })

  newCharacter.save().then(character => res.json(character))
})

// @ route DELETE api/characters/:id
// @desc Delete a character
// @access Public (Private later)
router.delete('/:id', (req, res) => {
  Character.findById(req.params.id)
    .then(char => char.remove().then(res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router

const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')

// INDEX
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

// SHOW
languages.get('/:lang', (req, res) => {
    Language.findOne({ name: req.params.lang .toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
}) 

module.exports = languages
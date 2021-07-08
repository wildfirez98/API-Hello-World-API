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

// RANDOM LANGUAGE
languages.get('/random', async (req, res) => {
    // count how many documents are available 
    let count = await Language.countDocuments()

    // select a random document number 
    let random = Math.floor(Math.random() * count)

    // find one document and skip to the randomly generated number above 
    Language.findOne().skip(random)
        .then(foundLanguage => {
            res.json(foundLanguage)
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
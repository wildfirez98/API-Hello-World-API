// require mongoose 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema
const languageSchema = new Schema({
    name: { type: String, required: true },
    greeting: String,
    panagram: String,
    filler: String
})

// model and export 
const Language = mongoose.model('Language', languageSchema)
module.exports = Language
const mongoose = require("mongoose")
const validator = require("validator")
const bookSchema = new mongoose.Schema({

}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
const mongoose = require("mongoose")
const validator = require("validator")
const bookSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    auther: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true
    }
}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
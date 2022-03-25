const bookModel = require("../db/models/book.model")
class Book {
    static add = async(req, res) => {
        try {
            const book = new bookModel(req.body)
            await book.save()
            res.status(200).send({
                apiStatus: true,
                data: book,
                message: "book added"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in added"
            })
        }
    }
    static all = async(req, res) => {
        try {
            const book = await bookModel.find()
            res.status(200).send({
                apiStatus: true,
                data: book,
                message: "books fetched"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetching"
            })
        }
    }
    static single = async(req, res) => {
        try {
            const book = await bookModel.findById(req.body.id)
            res.status(200).send({
                apiStatus: true,
                data: book,
                message: "book fetche done"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetching one"
            })
        }
    }
}

module.exports = Book
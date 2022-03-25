const bookModel = require("../db/models/book.model")
class Book {
    static add = async(req, res) => {
        try {
            const book = new bookModel({ userId: req.user._id, ...req.body })
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
    static del = async(req, res) => {
        try {
            //  const book = await bookModel.findByIdAndDelete(req.body.id)
            const book = await bookModel.findOneAndDelete({ _id: req.params.id, user: req.user._id })
            res.status(200).send({
                apiStatus: true,
                data: book,
                message: "book deleted"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in deleting"
            })
        }
    }
    static edit = async(req, res) => {
        try {
            const books = await bookModel.find()
            const book = await bookModel.findByIdAndUpdate(
                req.params.id, req.body, { runValidators: true })
            res.status(200).send({
                apiStatus: true,
                data: { book, books },
                message: "book edited"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in edit"
            })
        }
    }
}

module.exports = Book
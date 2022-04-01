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
    static myBooks = async(req, res) => {
        try {
            await req.user.populate("userBooks")
            res.status(200).send({ data: req.user.userBooks })
        } catch (e) {
            res.status(500).send({ erros: e.message })
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
            const _id = req.params.id
                //, userId: req.user._id
            const book = await bookModel.findOne({ _id })
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
            const _id = req.params.id
                //, userId: req.user._id
            const book = await bookModel.findOneAndDelete({ _id })
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
            //, userId: req.user._id
            const book = await bookModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
            res.status(200).send({
                apiStatus: true,
                data: book,
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
    static profileImg = async(req, res) => {
        req.book.img = req.img
        await req.book.save()
        res.status(200).send({
            apiStatus: true,
            data: req.file,
            message: "uploaded"
        })
    }
}

module.exports = Book
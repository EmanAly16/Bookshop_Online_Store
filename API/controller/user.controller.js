const userModel = require("../db/models/user.model")

class User {
    static add = async(req, res) => {
        try {
            const user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user added"
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
            const users = await userModel.find().sort({ email: 1 })
            res.status(200).send({
                apiStatus: true,
                data: users,
                message: "users fetched"
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
            const user = await userModel.findById(req.params.id)
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "users fetchedone"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetchingone"
            })
        }
    }
    static del = async(req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user deleted"
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
            const user = await userModel.findByIdAndUpdate(
                req.params.id, req.body, { runValidators: true })
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user edited"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in edit"
            })
        }
    }
    static editWithToken = async(req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(
                req.user._id, req.body, { runValidators: true })
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user edittoken "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in edittoken"
            })
        }
    }
    static login = async(req, res) => {
        try {
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus: true,
                data: { user, token },
                message: "logged in"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in login"
            })
        }
    }
    static loginAdmin = async(req, res) => {
        try {
            const user = await userModel.loginAdmin(req.body.email, req.body.password, "admin")
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus: true,
                data: { user, token },
                message: "logged in"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in login admin"
            })
        }
    }
    static logOut = async(req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(t => {
                return t.token != req.token
            })
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                data: "",
                message: "logged out"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in logout"
            })
        }
    }
    static logOutAll = async(req, res) => {
        try {
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                data: "",
                message: "logout"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in logout"
            })
        }

    }
    static profile = async(req, res) => {
        res.status(200).send({
            data: req.user,
            apiStatus: true,
            message: "profile fetched"
        })
    }
    static changePass = async(req, res) => {
        try {
            req.user.password = req.body.password
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                data: "",
                message: "changedpass"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: "",
                message: "cannot change"
            })
        }
    }
    static profileImg = async(req, res) => {
        req.user.image = req.file.path
        await req.user.save()
        res.status(200).send({
            apiStatus: true,
            data: req.file,
            message: "uploaded"
        })
    }
    static addOrder = async(req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(
                req.user._id, req.body.ordrDetails)
            console.log(req.body)
                // user.orders.push(req.body)
                // await user.save()
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user added"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in added"
            })
        }
    }

}

module.exports = User
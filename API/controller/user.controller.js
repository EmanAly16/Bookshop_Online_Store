const userModel = require("../db/models/user.model")
class User {
    static all = async(req, res) => {
        try {
            res.send("OK")
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetching"
            })
        }
    }

}

module.exports = User
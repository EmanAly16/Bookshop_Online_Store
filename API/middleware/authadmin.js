const User = require("../db/models/user.model")
const jwt = require("jsonwebtoken")


const auth = async(req, res, next) => {
    try{
        const token = req.header("Authorization")
        const decoded = jwt.verify(token, "proj")
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
            role:"admin"
        })
        if(!user) throw new Error("invalid auth")
        req.user=user
        req.token=token
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            errors:e.message,
            message:"unauthorized"
        })
    }
}
module.exports = auth
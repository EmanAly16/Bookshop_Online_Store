const bookController = require("../controller/book.controller")
const router = require("express").Router()
//const auth=require("../middleware/auth")
//const authadmin=require("../middleware/authadmin")
router.post("/add", bookController.add)
router.get('/all', bookController.all)
module.exports = router
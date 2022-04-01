const bookController = require("../controller/book.controller")
const router = require("express").Router()
const auth = require("../middleware/auth")
const authadmin = require("../middleware/authadmin")
router.post("/add", authadmin, bookController.add)
    //router.get("/myBooks", auth, bookController.myBooks)

router.get('/allbook', auth, bookController.all)

router.get('/showbook/:id', auth, bookController.single)

router.patch('/edit/:id', authadmin, bookController.edit)
router.delete('/delet/:id', authadmin, bookController.del)
router.post("/profileImg", auth, bookController.profileImg)

module.exports = router
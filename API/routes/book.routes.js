const bookController = require("../controller/book.controller")
const router = require("express").Router()
const auth = require("../middleware/auth")
const authadmin = require("../middleware/authadmin")

//router.post("/add", bookController.add)
//router.get('/all', bookController.all)
router.get('/', auth, bookController.all)

router.post('/show', auth, bookController.single)
router.post('/add', authadmin, bookController.add)
router.patch('/edit', authadmin, bookController.edit)
router.delete('/delet', authadmin, bookController.del)

module.exports = router
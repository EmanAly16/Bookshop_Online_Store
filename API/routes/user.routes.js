const userController = require("../controller/user.controller")
const bookController = require("../controller/book.controller")

const router = require("express").Router()
const auth = require("../middleware/auth")
const authadmin = require("../middleware/authadmin")
const upload = require("../middleware/fileUpload")

router.post("/add", userController.add)
router.post("/login", userController.login)
router.post("/admin", userController.loginAdmin)

router.post("/logout", auth, userController.logOut)
router.post("/logoutAll", auth, userController.logOutAll)

router.post("/changePass", auth, userController.changePass)

router.post("/me", auth, userController.profile)
router.get('/all', authadmin, userController.all)
router.get('/all/:id', authadmin, userController.single)
router.delete('/all/:id', authadmin, userController.del)
router.patch('/all/:id', authadmin, userController.edit)
router.patch('/all', auth, userController.editWithToken)
router.get('/book', auth, bookController.all)
router.post('/book/buy', auth, userController.addOrder)

router.post('/book/add', authadmin, bookController.add)

router.post("/profileImg", auth, upload.single('profile'), userController.profileImg)

module.exports = router
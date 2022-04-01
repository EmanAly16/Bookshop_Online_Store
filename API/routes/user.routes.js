const userController = require("../controller/user.controller")

const router = require("express").Router()
const auth = require("../middleware/auth")
const authadmin = require("../middleware/authadmin")
const upload = require("../middleware/fileUpload")

router.post("/add", userController.add)
router.post("/admin", userController.add)

router.post("/login", userController.login)
    //router.post("/admin", userController.loginAdmin)

router.post("/logout", auth, userController.logOut)
    //router.post("/logoutAll", auth, userController.logOutAll)

router.post("/changePass", auth, userController.changePass)

router.post("/me", auth, userController.profile)
router.post("/profileImg", auth, upload.single('profile'), userController.profileImg)


router.get('/all', authadmin, userController.all)
router.get('/single/:id', authadmin, userController.single)
router.delete('/all/:id', authadmin, userController.del)
router.patch('/edit/:id', authadmin, userController.edit)

router.patch('/all', auth, userController.editWithToken)


router.post('/addOrder/:id', auth, userController.addOrder)


module.exports = router
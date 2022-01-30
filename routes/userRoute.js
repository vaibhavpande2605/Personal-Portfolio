const router = require("express").Router();
const userCtrl = require("../controlers/userCtrl");
const auth1 = require("../middlewares/auth1");

// register
router.post("/register", userCtrl.registerUser);

// login
router.post("/login", userCtrl.loginUser);

// verify
router.get("/verify" , auth1, userCtrl.verifiedToken);

module.exports = router;

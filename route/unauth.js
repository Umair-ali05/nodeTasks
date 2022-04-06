const express = require("express");
const register = require("../controller/register.js");
const login = require("../controller/login.js");
const otpvarification = require("../controller/otpvarification.js");
const registershop = require('../controller/registershop.js')
const {
    home,
    aboutus
} = require("../view/users.js");
const router = express.Router();

router.post("/register", register),
router.post("/registershop", registershop),
router.post('/otp' , otpvarification)
    router.post("/login", login),
    router.get("/userhome", home),
    router.get("/useraboutus", aboutus);
module.exports = router;
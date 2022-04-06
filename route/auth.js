const express = require("express");
const admin = require("../view/admin.js");
const auth = require('../middleware/jwt.js');
const update = require('../view/updateuser.js');
const del = require('../view/deleteuser.js');
const getallshops = require('../view/getallshops');
const router = express.Router();

router.post("/adminpage", auth, admin);
router.post("/adminpage/updateUser" , update),
router.post("/adminpage/deleteUser" , del)
router.post("/adminpage/getallshops" , getallshops)
module.exports = router;

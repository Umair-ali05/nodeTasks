const express = require("express");
const admin = require("../view/admin.js");
const auth = require('../middleware/jwt.js');
const update = require('../view/updateuser.js');
const del = require('../view/deleteuser.js');
const getallshops = require('../view/getallshops');
const router = express.Router();

router.get("/adminpage", auth, admin);
router.put("/adminpage/updateUser",auth , update),
router.delete("/adminpage/User",auth , del)
router.get("/adminpage/getallshops",auth , getallshops)
module.exports = router;

const userModel = require('../schema/user.js')
const bcrypt = require("bcrypt");
require('dotenv').config();
var jwt = require('jsonwebtoken');
const {
    SECRET
} = process.env;
async function login(req, res) {
    const {
        email,
        password
    } = req.body;
    var loginUser = await userModel.findOne({
        email
    })
    if (!loginUser) {
        res.status(403).send({
            success: false,
            message: "incorrect email"
        })
    }  else if(loginUser.isvarified == true){
        const check = await  bcrypt.compare(password, loginUser.password);
        if (check) {
            const token = await jwt.sign({
                    id: loginUser._id,
                    email,
                    role : loginUser.role,
                    password: loginUser.password
                },
                SECRET, {
                    expiresIn: "10m",
                }
            )
            res.header('auth', token).send("token has created");
            res.status(200).send();
        } else {
            res.status(403).send({
                success: false,
                message: "incorrect password"
            })
        }
    }else{
        res.status(403).send({
                success: false,
                message: "not varified"
            })
    }
}

module.exports = login;
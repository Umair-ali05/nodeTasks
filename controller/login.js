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
    }  else if(loginUser.isvarified === true){
        const check = bcrypt.compare(password, loginUser.password);
        console.log(check);
        if (check) {
            const token = jwt.sign({
                    id: loginUser._id,
                    email,
                    role : loginUser.role,
                    password: loginUser.password
                },
                SECRET, {
                    expiresIn: "30m",
                }
            )
            console.log(token);
            res.header('auth', token).send("logedin");
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
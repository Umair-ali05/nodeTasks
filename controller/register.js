const userModel = require("../schema/user.js");
const nodemailer = require("nodemailer");
require('dotenv').config();

async function register(req, res) {
    const {
        role,
        name,
        email,
        password
    } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    const transporter =nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.GMAILNAME,
            pass: process.env.GMAILPASSWORD,
        }
    });
    let info = await transporter.sendMail({
        from: process.env.GMAILNAME, 
        to: email,
        subject: "OTP for Login", 
        text: `this is your otp ${otp} don't forget it `,
    });

    if (!name) {
        res.status(404).send("name is required");
    } else if (!email) {
        res.status(404).send("email is required");
    } else if (!password) {
        res.status(404).send("email is required");
    } else {
        const user = new userModel({
            role,
            name,
            email,
            password,
            otp,
        });
        const userExist = await userModel
            .findOne({
                email: email,
            })
            .exec();
        console.log(userExist);
        if (userExist != null) {
            res.status(400).send({
                success: false,
                message: "user alredy exist!!!",
            });
        } else {
            await user.save();
            res.status(200).send({
                success: true,
                user,
                message: "user is stored to data base",
            });
        }
    }
}

module.exports = register;
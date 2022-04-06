const userModel = require('../schema/user.js')

async function otpvarification(req, res) {
    const {
        email,
        otp
    } = req.body;
    const uservarify = await userModel.findOne({
        email
    });
    if (!uservarify.email) {
        res.status(400).send({
            success: false,
            message: "Email does not found"
        });
    } else if (uservarify.otp == otp) {
        uservarify.isvarified = true,
        await uservarify.save();
        res.status(200).send({
            success: true,
            message: "you registered successfully"
        });
    } else{
        res.status(400).send({
            success : false,
            message : "wrongotp"
        });
    }
}
module.exports = otpvarification;
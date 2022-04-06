const allusers = require('../schema/user.js')
async function Admin(req, res) {
    const Allusers = await allusers.find({
    }).exec();
    res.status(200).send({
        success : true,
        Allusers,
        Message : "here is all users",
            })
}

module.exports = Admin;
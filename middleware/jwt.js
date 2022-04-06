var jwt = require('jsonwebtoken');
require('dotenv').config();

async function auth(req, res,next) {
    var token = req.headers['auth'];
    const userdata = await jwt.verify(token, process.env.SECRET)
    try {
        if (userdata.role != "admin") {
            res.send("you are not admin so you cant access this page")
        } else {
            next();
        }
    } catch {
        if (err) {
            res.send("there is an issue with token");
        }
    }
}
module.exports = auth;
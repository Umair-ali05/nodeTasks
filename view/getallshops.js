const shopmodel = require('../schema/shop.js')
require("../schema/user.js");

async function getallshops(req, res) {
    const allshops = await shopmodel.find({})
        .populate({
            path: "userprofile",
            select: 'name email'
        });
    try {
        res.status(200).send({
            success: true,
            allshops,
            Message: "here is all shops",
        })
    }
    catch(err){
        res.status(400).send({
            success: false,
            Message: `there is some error ${err}`,
        })
    }

}

module.exports = getallshops;
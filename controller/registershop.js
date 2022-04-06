const shopmodel = require('../schema/shop.js');

async function registershop(req, res) {
    const {
        userprofile,
        shopname,
        location,
        shopnumber
    } = req.body;
    if (!userprofile) {
        res.status(404).send("user_id is required");
    } else if (!shopname) {
        res.status(404).send("shop name is required");
    } else if (!location) {
        res.status(404).send("location is required");
    } else {
        const shop = await  new shopmodel({
            userprofile,
            shopname,
            location,
            shopnumber
        });
        const shopExist = await shopmodel
            .findOne({
                userprofile,
                shopname,
                location,
                shopnumber
            });
        console.log(shopExist);
        if (shopExist != null) {
            res.status(400).send({
                success: false,
                message: "shop alredy exist!!!",
            });
        } else {
            await shop.save();
            res.status(200).send({
                success: true,
                shop,
                message: "shop is stored to data base",
            });
        }
    }
}

module.exports = registershop;
const mongo = require('mongoose');

const schema = mongo.Schema;

const shop = new schema({
    shopname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    userprofile: [{
        type: mongo.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }]
})


const shopmodel = mongo.model('shop-data', shop);

module.exports = shopmodel;
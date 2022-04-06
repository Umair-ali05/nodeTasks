const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = new schema({
    role: {
        type: String,
        enum : ['user' , 'admin'],
        default : 'user',
    },
    name: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        required: true,
        type: String,
    },
    otp: {
        type: Number,
    },
    isvarified: {
        type: Boolean,
        default: false
    }
}, )
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})



const model = mongoose.model('user', userSchema);
module.exports = model;
const express = require('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const auth = require('./route/auth.js')
const unauth = require('./route/unauth.js')
require('dotenv').config();
const {
    DB,
    PORT
} = process.env;
const app = express();
app.use(bodyparser.json());
app.use('/auth', auth)
app.use('/unauth', unauth)
const mongoDBurl = DB;
mongoose.connect(mongoDBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('err', console.error.bind("thier is a connection err"))


app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`);
})
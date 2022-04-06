const usermodel = require("../schema/user.js");

async function del(req, res) {
    const id = await  req.params['id'];
    const finduser = await usermodel.findOne({
        id
    })
    if (!finduser) {
        res.status(404).send({
            message :"user not fond",
            success : false,
        })
    }else if(finduser.role === "user") {
        await finduser.deleteOne(finduser)
        res.status(200).send({
            message :"deleted",
            success : true,
        })
    }
    else{
        res.status(400).send({
            message :"role is not user",
            success : false,
        })
    }
}

module.exports = del;
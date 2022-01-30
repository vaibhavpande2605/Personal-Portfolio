const jwt = require('jsonwebtoken')

const user =require ('../models/userModels')

const auth1 = async(req,res,next)=>{


    try {
        const token = req.header("Authorization");
        const verifyuser =jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(verifyuser);
    } catch (error) {
        res.status(401).send(error)
    }
}
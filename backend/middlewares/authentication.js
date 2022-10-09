const jwt  = require("jsonwebtoken")

const authentication = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.json({"msg":"Please Login!"})
    }
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,process.env.SECRET_KEY,function(err,decode){
        if(err){
            res.json({"msg":"please login!"})
        }
        else{
            req.body.userId = decode.userId
            next()
        }
    })
    
}

module.exports = {authentication}
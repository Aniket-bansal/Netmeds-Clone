require("dotenv").config();
const {Router} = require("express")
const bcrypt  = require("bcrypt")
const jwt  = require("jsonwebtoken")
const {UserModel} = require("../model/user.model.js")

const userController = Router();

userController.post("/signup",(req,res)=>{
    const {email,password,age} = req.body;
     bcrypt.hash(password,6, async function(err,hash){
        if(err){
            res.send("Something went wrong!!")
        }
        const user =  new UserModel({
            email,
            password : hash,
            age
        })
        try{
            // console.log(user)
            await user.save()
        res.json({"msg":"Signup Successful!!"})
        }
        catch(err){
            res.send("Signup failed")
        }
     })
})

userController.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    const hash = user.password
    bcrypt.compare(password, hash, function(err,result){
     if(err){
        res.send("Something went wrong, please try again later")
     }
     if(result){
        const token = jwt.sign({userId:user._id},process.env.SECRET_KEY)
        res.json({"msg":"Login Successful",token})
     }else{
        res.json({"msg":"invalid credentials/user not found"})
     }
    })
    // res.send("Login")
})

module.exports = {
    userController
}       
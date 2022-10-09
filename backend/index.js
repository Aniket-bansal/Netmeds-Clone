require("dotenv").config()
const express = require("express")
const {connection} = require("./config/db.js")
const {userController} = require("./routes/user.routes")
const {authentication} = require("./middlewares/authentication")
const cors = require("cors")
const app = express();
app.use(express.json())


// Home page
app.get("/",(req,res)=>{
    res.send("Welcome to home")
})

app.use(cors())
app.use("/user",userController);
app.use(authentication)

app.listen(process.env.PORT,async()=>{
     try{
      await connection
      console.log("Connected to db")
     }
     catch{
       console.log("Unable to connect to db, Something went wrong!")
     }
     console.log(`Listening to ${process.env.PORT}`)
})
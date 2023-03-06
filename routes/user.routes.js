const express = require("express")

const userRouter = express.Router()

userRouter.get("/",(req,res)=>{
    res.send({
        message:"All users"
    })
})

module.exports = {userRouter}
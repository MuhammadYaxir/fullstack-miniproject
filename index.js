const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")

require("dotenv").config()
const port = process.env.port

const app = express()
app.use(express.json())
app.use("/user",userRouter)



app.listen(port,async()=>{

    try{
        await connection
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
    }

    console.log("server is started on port number",port)
})
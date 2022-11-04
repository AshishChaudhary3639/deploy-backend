const express=require("express")
require("dotenv").config()
const app=express()


app.get("/",(req,res)=>{
    res.send("Welcome to backend")
})

app.listen(process.env.PORT,()=>{
    console.log(`Listing on ${process.end.PORT}`)
})
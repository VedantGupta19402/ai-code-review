require('dotenv').config()
const express=require('express')
const app=require("./src/app")
app.listen(3000,()=>{
    console.log("server is running on 3000")
})
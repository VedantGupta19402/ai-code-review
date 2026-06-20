const express=require('express');
const app=express();
const airoutes=require("./routes/routes.js")
app.use(express.json());
app.use("/ai",airoutes);
module.exports=app 
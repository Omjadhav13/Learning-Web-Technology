require('dotenv').config();

const path=require('path');

const express=require('express');
const app=express();

const publicpath=path.join(__dirname+"/public");
app.use(express.static(publicpath));

const host=process.env.HOST;
const port=process.env.PORT;

app.get("/",(req,res,next)=>{
    res.sendFile(publicpath+"/html/index.html");
    // res.send("Request started ");
})
app.get("/index",(req,res,next)=>{
    res.sendFile(publicpath+"/html/index.html");
    // res.send("Request started ");
})
app.get("/about",(req,res,next)=>{
    res.sendFile(publicpath+"/html/about.html");
    // res.send("Request started ");
})
app.get("/contact",(req,res,next)=>{
    res.sendFile(publicpath+"/html/contact.html");
    // res.send("Request started ");
})
app.get("/service",(req,res,next)=>{
    res.sendFile(publicpath+"/html/service.html");
    // res.send("Request started ");
})

app.get(/.*/,(req,res,next)=>{
    res.sendFile(publicpath+"/html/error.html");
    // res.send("Request started ");
})
app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`); 
});
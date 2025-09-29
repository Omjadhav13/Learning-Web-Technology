require('dotenv').config();

const path=require('path');
const hbs=require('hbs');

const express=require('express');
const app=express();
//path for static files
const publicpath=path.join(__dirname+"/public");

//path for dnyamic files
const viewspath=path.join(__dirname,'/templates/views');
const partialspath=path.join(__dirname,'/templates/partials');

app.use(express.static(publicpath));

// app.use(express.static(viewspath));
// app.use(express.static(partialspath));

app.set('view engine','hbs');
app.set("views",viewspath);

const host=process.env.HOST;
const port=process.env.PORT;

app.get("/",(req,res,next)=>{
    // res.sendFile(publicpath+"/html/index.html");
    res.render("index",{dev:"Om"});
    // res.send("Request started ");
})
app.get("/index",(req,res,next)=>{
    // res.sendFile(publicpath+"/html/index.html");
    res.render("index",{dev:"Om"});
    // res.send("Request started ");
})
app.get("/about",(req,res,next)=>{
    // res.sendFile(publicpath+"/html/about.html");
    res.render("index",{dev:"Om"});
    // res.send("Request started ");
})
app.get("/contact",(req,res,next)=>{
    // res.sendFile(publicpath+"/html/contact.html");
    res.render("index",{dev:"Om"});
    // res.send("Request started ");
})
app.get("/service",(req,res,next)=>{
    // res.sendFile(publicpath+"/html/service.html");
    res.render("index",{dev:"Om"});
    // res.send("Request started ");
})

app.get(/.*/,(req,res,next)=>{
    res.sendFile(publicpath+"/html/error.html");
    // res.send("Request started ");
})
app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`); 
});
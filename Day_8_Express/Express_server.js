require('dotenv').config();
const express=require('express');

const app=express();

const host=process.env.HOST;
const port=process.env.PORT;
//default
app.get("/",(req,res,next)=>{
    // res.send("Simple get request");
    res.sendFile(__dirname+"/index.html");
});
//naming routing
app.get("/index",(req,res,next)=>{
    // res.send("Response getting from home page");
    res.sendFile(__dirname+"/index.html");
});
//parameterized routing
app.get("/about/:id",(req,res,next)=>{
    // res.send("Response getting from about page");
    res.sendFile(__dirname+"/about.html");
});
//naming routing
app.get("/contact",(req,res,next)=>{
    // res.send("Response getting from about page");
    res.sendFile(__dirname+"/contact.html");
});

//wildcard routing
app.get(/.*/,(req,res,next)=>{
    res.sendFile(__dirname+"/404.html")
});


app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`);
    
})
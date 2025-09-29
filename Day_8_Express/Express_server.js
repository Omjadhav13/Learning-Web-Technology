require('dotenv').config();
const express=require('express');

const app=express();

const host=process.env.HOST;
const port=process.env.PORT;

app.get("/",(req,res,next)=>{
    res.send("Simple get request");
});

app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`);
    
})
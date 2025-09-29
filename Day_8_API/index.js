const bodyParser = require('body-parser');
const con =require('./connection');

const cors=require('cors');
const express=require('express');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res,next)=>{
    res.send("Congo!! Its running....");
});

app.get("/products",(req,res,next)=>{
    console.log("Get request for products");
    // res.send("Get request for products");
    con.query("select * from products",(error,result)=>{
        if(error)throw error;
        res.send(result);
    })
});

app.get("/products/:id",(req,res,next)=>{
    console.log("get request for single products");
    res.send("get request for single products");
});

app.put("/products/:id",(req,res,next)=>{
    console.log("Put request for single products");
    res.send("Put request for single products");
});

app.post("/products",(req,res,next)=>{
    console.log("Post request for single products");
    res.send("Post request for single products");
});

app.delete("/products/:id",(req,res,next)=>{
    console.log("Delete request for single products");
    res.send("Delete request for single products");
});

app.listen(1111,()=>{
    console.log("Server started");
});
require('dotenv').config();
const url=require('http');
const file=require('fs');

const host=process.env.HOST;
const port=process.env.PORT;

let server=url.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        let steamRead=file.createReadStream(__dirname+"/index.html","utf8");
        steamRead.pipe(res);
        
   }
   else if (req.url==="/about"){
       res.writeHead(200,{"content-type":"text/html"});
       let streamRead=file.createReadStream(__dirname+"/about.html");
       streamRead.pipe(res);
    }
    else if (req.url==="/contact"){
        res.writeHead(200,{"content-type":"text/html"});
        let stream=file.createReadStream(__dirname+"/contact.html");
        stream.pipe(res);
    }
    else if (req.url==="/index"){
        res.writeHead(200,{"content-type":"text/html"});
        let stream=file.createReadStream(__dirname+"/index.html");
        stream.pipe(res);
    }
 
});

server.listen(3333,()=>{
    console.log('server started');
    
})
const http = require('http');

let server =http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("server sarted");
        res.end();
    }
    else if (req.url=="/mobile"){
        res.write("Server for mobile");
        res.end();
    }
    else if (req.url=="/laptop"){
        res.write("Server for laptop");
        res.end();
    }
})
server.listen(1111,()=>{
    console.log("server started");
})
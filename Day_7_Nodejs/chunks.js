const file=require('fs');

const readfile=file.createReadStream("writeFile.txt","utf8",(err,result)=>{});
const writefile=file.createWriteStream("newFile.txt");

readfile.on('data',(chunk)=>{
    console.log(chunk);
    writefile.write(chunk);
});

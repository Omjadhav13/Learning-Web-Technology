const file=require('fs');

file.mkdir('./tests',(err,result)=>{
  file.writeFile("./tests/testfile.txt","Hello",(err,result)=>{
    console.log("file and folder created");
  })
});


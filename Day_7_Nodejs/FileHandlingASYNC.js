const file=require('fs');

//write file asynchronously
file.writeFile("./WriteFile2.txt","Hello Friends",(err,result)=>{
    console.log("File created."+result);
});

//read file asynchronously
file.readFile("./WriteFile2.txt","utf8",(err,result)=>{
    console.log("File Reading ."+result);
});

//Append

file.appendFile("./writeFile2.txt","\n TO AIT!!",(err,result)=>{
    console.log("File Appended."+result);
});

//Read and Write 
file.readFile("./writeFile.txt","utf8",(err,result)=>{
    file.writeFile("./writeFile2.txt",result=>{
    })
});
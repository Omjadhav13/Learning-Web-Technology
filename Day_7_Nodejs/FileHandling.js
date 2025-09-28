const file=require('fs');


//Write file 
file.writeFileSync("./writeFile.txt","Hello Node JS");
console.log("File Write/created");

//read file
let read=file.readFileSync("writeFile.txt","utf8");
console.log("File read:"+read);

// //Append

file.appendFileSync("writeFile.txt","\n BYE!!");
console.log("Changed in file");
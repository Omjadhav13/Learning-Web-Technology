const mysql=require('mysql2');

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ycpait24",
    database:"APIs"
});

conn.connect((error)=>{
    if(error)throw error;
    console.log("Conection done successfully");
});

module.exports=conn;
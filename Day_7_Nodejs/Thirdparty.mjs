import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.overline.bgGray("Om Jadhav"));

let name="";
let name2="hello";
console.log(validator.isEmpty(name)); 
console.log(validator.isEmpty(name2)); 

let email1="abc@gmil.com";
let email2="abc@";
console.log(validator.isEmail(email1));
console.log(validator.isEmail(email2));
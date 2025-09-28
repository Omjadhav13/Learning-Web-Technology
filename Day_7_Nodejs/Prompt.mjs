import chalk from "chalk";
import prompt from "prompt";
prompt.start();
prompt.get(['username','password'],function(err,result){
if(result.username==='admin'&& result.password==='admin@gmail.com'){
    console.log(chalk.bold.greenBright.italic('LOGIN SUCCESSFUL'));
    }
    else{
        console.log(chalk.bold.underline.italic.red('Wrong credentials'));
        
    }
});
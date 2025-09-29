const path=require('path');
const os=require('os');

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.extname(__filename));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('../'+__filename));
console.log(path.join(__dirname,'MyDir'));

console.log(os.arch());
console.log(os.machine());




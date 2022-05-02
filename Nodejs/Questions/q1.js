//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require('path');

//creating a folder
if(fs.existsSync('newfolder')==false)
   fs.mkdirSync('newfolder')
else
   console.log('already created');

// creating a folder
let pathofFile = path.join(__dirname,'newfolder','testfile.txt');
fs.writeFileSync(pathofFile,'new file has been made');
console.log(pathofFile);



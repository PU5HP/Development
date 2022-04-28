const { Console } = require('console');
let fs=require('fs');
let path=require('path');
//console.log(fs);


//CREATING A NEW FILE
let filepath = path.join(__dirname,"file.txt");
console.log(filepath)

//writefilesync creates a new file if not exists if it exists rewrite the information
//write file sync creates file and updates the file also

fs.writeFileSync(filepath,"ms dskd ")

//READING A FILE
let content =fs.readFileSync(filepath);
console.log(content+"");
console.log(fs.readFileSync(filepath,'utf8'));

//updating a file -->appending
fs.appendFileSync(filepath,"i am append");
console.log(fs.readFileSync(filepath,'utf-8'));

//deleting a file
//fs.unlinkSync(filepath);

//Directory operations

//create 'mydirectory' in Nodejs directory

if(!fs.existsSync("mydirectory"))
{fs.mkdirSync("mydirectory");}
else{
    console.log("Folder already exists")
}
//reading an folder
let pathofdir=__dirname;
console.log(pathofdir);
let contentofdir = fs.readdirSync(pathofdir);
console.log(contentofdir);
//deleting an empty folder 'mydirectory'
//fs.rmdirSync('mydirectory');


//copying a file testfile.txt from node js folder to modularity folder

let srcpath =path.join(__dirname,'testfile.txt');
console.log(srcpath);
let despath = path.join(__dirname,'Modularity','testfile.txt');
console.log(despath);
//copying the file
fs.copyFileSync(srcpath,despath);


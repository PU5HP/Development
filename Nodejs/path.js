//"/home/fri3nd/Development/Nodejs/path.js"
const { dirname } = require('path');
let path = require('path');
console.log(typeof(path)) //returns object

let extensionName = path.extname("/home/fri3nd/Development/Nodejs/path.js");//gives the extension of the file
console.log(extensionName);
let baseName = path.basename("/home/fri3nd/Development/Nodejs/path.js");//gives the file name
console.log(baseName);
console.log("__dirname:" ,__dirname);  //path to the directory
console.log("__filename:",__filename); //path to the file

//.join method
let dirpath=__dirname;
let filepath=path.join(dirpath,"test.js");//use comma here
console.log(filepath);
//move a file

let path = require('path');
let fs = require('fs');

let pathoffile = path.join(__dirname,"organised","move.txt");
console.log(pathoffile);

let despa = path.join(__dirname,"newfolder","move.txt");
console.log(despa);

fs.copyFileSync(pathoffile,despa);

fs.unlinkSync(pathoffile)
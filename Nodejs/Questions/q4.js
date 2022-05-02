// read content of unorganised folder and make  an array which has extension name of each file

let path = require('path');
let fs = require('fs');

let newfolpath = path.join(__dirname,"newfolder");
console.log(newfolpath);

let content_array = fs.readdirSync(newfolpath);
console.log(content_array);

let ans=[];
for(let i=0;i<content_array.length;i++){
    let extensionoffile = path.extname(content_array[i]);
    ans.push(extensionoffile);
}

console.log(ans);


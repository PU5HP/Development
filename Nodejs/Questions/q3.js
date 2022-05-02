//Q. copy selectors.html file from HTMLCSS to a new folder inside Nodejs.

//path to selecctors.html==source
let fs=require('fs');
let path=require('path');
let src = path.join(__dirname,"..","..","HTMLCSS","selectors.html");
console.log(src);
let des = path.join(__dirname,"newfolder","selectors.html")
console.log(des)
fs.copyFileSync(src,des);

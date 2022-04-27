//child,os,path,etc process is preinstalled in node
//npm node package manager is a type of google play store
let cp =require('child_process');
//console.log(cp)    //cp stores an object

//open calaculator with the help of this file replace with calc in windows

//cp.execFileSync('gnome-calculator')
//cp.execFileSync('firefox')
let content =cp.execSync("node test.js");
//execSync---> created a new terminal and run the commands in the double quotes
console.log("this is test file "+content);
console.log(content);//hexadecimal
console.log(""+content);//string
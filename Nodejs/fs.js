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







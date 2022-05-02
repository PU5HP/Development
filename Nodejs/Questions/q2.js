//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require('fs');
let path = require('path');
let arr = ['audio', 'video', 'image', 'software', 'documents', 'applications', 'other'];
let extName = ['.mp3', '.mp4', '.jpg', '.apk', '.pdf', '.apk', '.rar'];
let fileName = ['abc', 'def', 'ghi', 'xyc'];

//create a new folder named organised in node js directory
let organisedPath = path.join(__dirname, 'organised');

if (fs.existsSync(organisedPath) == false) {
    fs.mkdirSync(organisedPath);
}


for (let i = 0; i < arr.length; i++) {
    let folderkapath = path.join(organisedPath, arr[i]);
    if (fs.existsSync(folderkapath) == false) {
        fs.mkdirSync(folderkapath);
    }
    for (j = 0; j < fileName.length; j++) {
         let file = path.join(folderkapath,fileName[j]+extName[i]);
         if(fs.existsSync(file)==false){
             fs.writeFileSync(file);
         }
    }

}


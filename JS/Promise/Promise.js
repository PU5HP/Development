const fs = require('fs');

console.log("before")
let f1KaPromise = fs.promises.readFile("file1.txt");

console.log(f1KaPromise);

f1KaPromise.then(function(data){
    console.log(data+" ");
})

f1KaPromise.catch(function(error){
    console.log(error);
})
console.log("after");

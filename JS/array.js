//empty arr
let arr=[];
console.log(arr);

//filled arr
let a2=[1,2,3,4];
console.log(a2);

//filled with different data types
let a3=['ch',true,"njenr",4,32.4]
console.log(a3);
console.log(a3[4]);
console.log(a3[5]); //undefined

//mutables array
a3[0]="0 element changed"
console.log(a3);

//PUSH-->adds elements at last
let a4=[];
console.log("array before push",a4);
a4.push(34);
a4.push(2.2);
a4.push("ksnfv");
a4.push("josfn");
console.log("array after push",a4);

//POP-->deletes the last element
a4.pop();
console.log(a4);

//SHIft--->removes element from front

a4.shift();
console.log(a4);

//unshift
a4.unshift("add in front");
console.log(a4);

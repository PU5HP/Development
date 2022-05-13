//js is single threaded language
//js works from top to bottom and left to right

//CASE 1
//---------------------------------------------------------//
//console.log(a);

//let a="hello";
//Error cannot access 'a' before initialization
//--------------------------------------------------------//

//CASE 2
//---------------------------------------------------------//
//console.log(a);

//var a="hello";
//UNDEFINED
//--------------------------------------------------------//

//CASE 3
//---------------------------------------------------------//
//console.log(a);

//var a="hello";

//console.log(a)
//UNDEFINED & hello
//--------------------------------------------------------//

//case 4
console.log(a)
var a = 10;

function fun(){
    var b = 20;
    console.log(b);
}

var c=30;

console.log(c);

fun();



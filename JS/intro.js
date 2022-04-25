// Printing in console
// NEED FOR THE NODE?
// node gives run time environment for the browser running js
console.log("Hello world");

// VARIABLES IN JS
let a =10;
let b =90;
let s = "hello i am a string"
let ch = 'x';
let bool  =false;
console.log(a*b);   //number
console.log(s);     // string
console.log(ch);    //character
console.log(bool);  //bool

//LOOPS IN JS
//FOR
for(let i=0;i<5;i++){
    console.log(i);
}
//WHILE
let count=10;
while(count>1){
    console.log(count);
    count--;
}

let number =11;

function isprime(number) {
    let bool=false;
    for(let i=2;i*i<number;i++){
        if(number%i==0){
            console.log("not prime");
            bool=true;
            break;
        }
    }
    if(bool==false)
    {console.log("prime");}
}
isprime(number);
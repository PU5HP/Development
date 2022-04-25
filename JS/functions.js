//functions are first class citizens cause they are stored in variables

let a = function multiply (num1,num2){
    return num1*num2
}
console.log(a(2,3));

//IIFE -immediately invoked functions expression

(function(){
    console.log("i am iife")
})();

//IIFE -WITH PARAMETERS
(function(num1,num2){
    console.log(num1+num2);
})(24,34);






//creating an empty object
let obj={};
console.log(obj);
console.log(typeof(obj));
//object contains key and value pair

//keys are default strings and values can be any thing 
let obj1={
    "name":"pushp",
    "age":34,
    "branch":"CSE",
    "phone":34343434,
    lastname:'xyz'
};

console.log(obj1)
//access by the keys
console.log(obj1.lastname);
console.log(obj1.phone);

//new object
//adding array in object
//adding object in object
//adding function in object
let capAmerica={
    name:'stevee',
    age:34,
    //array friends
    friends:['spiderman','natasha','thor','tony'],
    //object address
    address:{
        state:'chicago',
        city:'usa'
    },
    //function in object sayhi is the function name
    sayhi:function(){
        console.log('hello cap')
        return 9;
    }
}
console.log('object before update',capAmerica);
//add a new key
capAmerica.movies=['avergers','hulk'];
console.log('object after update',capAmerica);


console.log(capAmerica);

//all the keys are accessed using keys with dot
console.log(capAmerica.friends[1]);
console.log(capAmerica.address.state);
console.log(capAmerica.sayhi());
//output: hello cap and undefined-->due to console.log(because nothing is retured)
//function call
//console.log(sayhi())
capAmerica.sayhi()

//deleting a key
delete capAmerica.age;
console.log('deleting the age key',capAmerica)

//updating a value
capAmerica.isavenger=false;
console.log('before updating:',capAmerica);
capAmerica.isavenger=true;
console.log('after updating:',capAmerica);


///second method to access key
//. converts everything after it to a string
console.log(capAmerica.name);
console.log(capAmerica['name']);
console.log(capAmerica['friends'][2]);
console.log(capAmerica['address']['city']);


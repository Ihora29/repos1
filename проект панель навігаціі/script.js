// Data types (primitives) //

//String //
const greetings = "Hello world";
console.log(typeof greetings);

//Number//
const num = 100;
console.log(typeof num);

//Boolean
const boolTrue = true;
const boolFalse = false;
console.log(typeof boolTrue);
console.log(typeof boolFalse);

//Null
const someNullValue = null;
console.log(someNullValue);

//Undefined
let someUndefiendValue ;

console.log(someUndefiendValue);

//object
const obj = {} ;
    obj.name = "Ihor";
    obj.hobby = "boxing";
    obj["age"] = 29;

    obj.age = 10;

console.log (obj.age);

// Big Int
//console.log(99999999999999999999999);
console.log(Number.MAX_SAFE_INTEGER)
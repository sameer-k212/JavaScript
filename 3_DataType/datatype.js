//  DataType : premitive and non-premitive
//  Premitive : Number, String, Boolean, Symbol, Undefined, Null, BigInt.
//  Non-Premitive : Object, Array, Function.


const score = new Number(100);
console.log(score);
console.log(typeof score); // object

console.log(score.toString().length);
console.log(score.toFixed(2)); // 100.00
console.log(score.toFixed(1)); // 100.0


const value = 123.8966;
console.log(value.toPrecision(2)); // 123.9
console.log(value.toPrecision(3)); // 

const hundred = 100000000;
console.log(hundred.toLocaleString()); // 100,000,000
console.log(hundred.toLocaleString('en-IN')); // 1,00,00,000

// maths...
console.log(Math); // Math is a built-in object in JavaScript that provides a set of mathematical constants and functions.
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.6)); // it is used to 
console.log(Math.abs(-4)); // 4






let a = 5;
console.log(typeof a); // number

let b = true;
console.log(typeof b); // boolean

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

let obj = { name: 'John', age: 34 };
console.log(typeof obj); // object


let c;
console.log(typeof c); // undefined

let d = null;
console.log(typeof d); // object

let e = 'Hello';
console.log(typeof e); // string

// const val;
// console.log(val); // SyntaxError: Missing initializer in const declaration

// console.log(value); // ReferenceError: value is not defined


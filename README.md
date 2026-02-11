# **Complete JavaScript Guide 🚀**

> This repository contains comprehensive JavaScript concepts, code examples, and projects covering everything from basics to advanced topics.

## 📚 **Table of Contents**

- [1. Variables](#1-variables)
- [2. Data Types](#2-data-types)
- [3. Objects](#3-objects)
- [4. JSON](#4-json)
- [5. Functions](#5-functions)
- [6. Callbacks](#6-callbacks)
- [7. Arrays](#7-arrays)
- [8. Strings](#8-strings)
- [9. Numbers](#9-numbers)
- [10. Arrow Functions](#10-arrow-functions)
- [11. Control Flow](#11-control-flow)
- [12. Loops](#12-loops)
- [13. Higher Order Functions](#13-higher-order-functions)
- [14. DOM Manipulation](#14-dom-manipulation)
- [15. Events](#15-events)
- [16. Asynchronous JavaScript](#16-asynchronous-javascript)
- [17. Promises](#17-promises)
- [18. Async/Await](#18-asyncawait)
- [19. Fetch API](#19-fetch-api)
- [20. Regular Expressions](#20-regular-expressions)
- [21. Projects](#21-projects)

---

## **1. Variables**

### **var, let, const**

```javascript
// const: Block scope, cannot be reassigned
const userId = 2215001565;
console.log(typeof userId); // number

// let: Block scope, can be reassigned
let email = "sameerkushwaha2003@gmail.com";
console.log(email);

// var: Function scope, can be reassigned (not recommended)
var userPassword = "949434";
console.log(userPassword);

// Global variable (without declaration)
userName = "Sameer Kushwaha";
console.log(userName);
```

### **Key Differences**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Redeclaration | Yes | No | No |

### **Scope Examples**

```javascript
// Global scope
function a() {
  g = 9; // Global variable
  let c = 19; // Block scope
  const d = 10; // Block scope
  var e = 20; // Function scope
}
a();
console.log(g); // Accessible (global)

// Function scope with var
function fun() {
  if (true) {
    var x = 10; // Function scope, not block scope
  }
  console.log(x); // Accessible
}
fun();
```

---

## **2. Data Types**

### **Primitive Data Types**
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### **Non-Primitive Data Types**
- Object
- Array
- Function

```javascript
// Number
const score = new Number(100);
console.log(score.toFixed(2)); // 100.00
console.log(score.toString().length); // 3

const value = 123.8966;
console.log(value.toPrecision(3)); // 124

const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN')); // 10,00,00,000

// Math Object
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.abs(-4)); // 4
console.log(Math.max(1, 3, 6)); // 6
console.log(Math.random()); // Random number between 0 and 1

// Random number in range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Type checking
let a = 5;
console.log(typeof a); // number

let arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true

let obj = { name: 'John' };
console.log(typeof obj); // object

let c;
console.log(typeof c); // undefined

let d = null;
console.log(typeof d); // object (JavaScript quirk)
```

---

## **3. Objects**

### **Creating Objects**

```javascript
// Object literal
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car.type); // Fiat

// Using new Object()
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
console.log(person.firstName); // John
console.log(person['firstName']); // John

// Object with methods
const person2 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person2.fullName()); // John Doe
```

### **Object Properties**

```javascript
// Objects are mutable (reference type)
const x = person;
x.firstName = "Janny";
console.log(person.firstName); // Janny (both changed)

// Delete property
delete person.age;
console.log(person); // age property removed

// Nested Objects
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
};
console.log(myObj.myCars.car1); // Ford
```

### **Object Constructor Function**

```javascript
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

// Adding property to specific object
myFather.nationality = 'India';

// Adding property to constructor (won't work directly)
Person.language = 'English';
console.log(myFather.language); // undefined

// Use prototype to add to all instances
Person.prototype.language = 'english';
console.log(myFather.language); // english

// Adding methods
function Animal(name, type, age, color) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  this.info = function() {
    return `${this.name} is a ${this.type} of age ${this.age}`;
  };
}

const cat = new Animal("Tom", "Cat", 2, 'Black');
console.log(cat.info());
```

### **Object Methods**

```javascript
const animal = {
  name: 'lion',
  age: 10,
  color: 'yellow',
  weight: 200
};

// Loop through object
for (let x in animal) {
  console.log(x + " : " + animal[x]);
}

// Object.values()
const array = Object.values(animal);
console.log(array); // ["lion", 10, "yellow", 200]

// Object.entries()
for ([key, value] of Object.entries(animal)) {
  console.log(key + ":" + value);
}

// JSON.stringify()
let myString = JSON.stringify(animal);
console.log(myString); // {"name":"lion","age":10,"color":"yellow","weight":200}
```

### **Date Object**

```javascript
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

let myCreatedDate = new Date(2020, 0, 1, 12, 0, 0, 0);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

// Get current timestamp
console.log(Date.now());

// Convert to seconds
console.log(Math.round(Date.now() / 1000));
```

---

## **4. JSON**

```javascript
const user = {
  name: "Sameer",
  age: 22
};

// JSON.stringify() - Convert object to JSON string
const string = JSON.stringify(user);
console.log(string); // {"name":"Sameer","age":22}
console.log(string['name']); // undefined (it's a string)

// JSON.parse() - Convert JSON string to object
const object = JSON.parse(string);
console.log(object); // { name: 'Sameer', age: 22 }
console.log(object["name"]); // Sameer
```

---

## **5. Functions**

### **Function Declaration**

```javascript
function product(a, b) {
  return a * b;
}
console.log(product(2, 3)); // 6

// Function scope
function myFunction() {
  let carName = "Volvo"; // Local variable
}
// carName not accessible outside
```

### **Function Expression**

```javascript
let fun = function() {
  console.log("this is anonymous function");
}
fun();
```

### **Named Function Expression (NFE)**

```javascript
var y = function outer() {
  console.log("inside outer function");
}
console.log(y); // Function definition
// console.log(outer); // Error: outer not defined globally
```

### **IIFE (Immediately Invoked Function Expression)**

```javascript
// Named IIFE
(function myFun1() {
  console.log("Hello World1");
})();

// Anonymous IIFE
(function() {
  console.log('new World');
})();

// Arrow function IIFE
(() => console.log("Hello world from arrow function"))();

// IIFE with parameters
(function(name) {
  console.log(`new ${name}`);
})("world");
```

---

## **6. Callbacks**

```javascript
console.log("Start");

function fn() {
  for (let i = 0; i < 1e9; i++) {}
  console.log("Data is Fetched");
}

function fetchData(callback) {
  callback();
}

const data = fetchData(fn);
console.log("End");
```

---

## **7. Arrays**

### **Array Basics**

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

// Access elements
let fruit = fruits.at(-1); // Last element: Mango
console.log(fruit);
```

### **Array Methods**

```javascript
// push() - Add to end, returns new length
let len = fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// pop() - Remove from end, returns removed element
const deletedValueLast = fruits.pop();
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// shift() - Remove from start, returns removed element
const deletedValueFront = fruits.shift();
console.log(fruits); // ["Orange", "Apple", "Mango"]

// unshift() - Add to start, returns new length
len = fruits.unshift("Lemon");
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango"]

// concat() - Merge arrays
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat(arr2);
console.log(arr3); // ["a", "b", "c", "d", "e", "f"]

// forEach() - Iterate
fruits.forEach(function(item, index) {
  console.log(item, index);
});

// map() - Transform each element
let newArr = [1, 2, 3].map(function(item) {
  return item * 2;
});
console.log(newArr); // [2, 4, 6]

// filter() - Filter based on condition
let filtered = [1, 2, 3, 4, 5].filter(function(item) {
  return item > 3;
});
console.log(filtered); // [4, 5]

// find() - Find first matching element
let found = [1, 2, 3, 4, 5].find(function(item) {
  return item > 3;
});
console.log(found); // 4

// reduce() - Reduce to single value
const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

// sort() - Sort array
let arr = [5, 2, 3, 4, 1];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr); // [1, 2, 3, 4, 5]
```

---

## **8. Strings**

```javascript
// String methods
const str = "Hello World";

console.log(str.length); // 11
console.log(str.indexOf("World")); // 6
console.log(str.lastIndexOf("World")); // 6
console.log(str.slice(0, 5)); // Hello
console.log(str.substring(0, 5)); // Hello
console.log(str.replace("World", "JavaScript")); // Hello JavaScript
console.log(str.split(" ")); // ["Hello", "World"]
console.log("  Hello World  ".trim()); // "Hello World"
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
```

---

## **9. Numbers**

```javascript
// parseInt() - Parse string to integer
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("3.14")); // 3

// parseFloat() - Parse string to float
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("42")); // 42
console.log(parseFloat("42px")); // 42
```

---

## **10. Arrow Functions**

### **this Keyword**

```javascript
const user = {
  username: "sameer",
  price: 999,
  welcomeMessage: function() {
    console.log(`${this.username}, Welcome to my website`);
    console.log(this); // Refers to user object
  }
};
user.welcomeMessage();
```

### **Arrow Function Syntax**

```javascript
// Explicit return
const sumTwoNum = (num1, num2) => {
  return num1 + num2;
};
console.log(sumTwoNum(1, 2)); // 3

// Implicit return
const sumTwoNum2 = (num1, num2) => num1 + num2;
console.log(sumTwoNum2(1, 2)); // 3

// Returning object (use parentheses)
const obj2 = () => ({ name: "sameer", age: 21 });
console.log(obj2()); // {name: "sameer", age: 21}

// Array iteration
let arr = [1, 2, 34.5, 89, 2];
arr.forEach(() => console.log("hello"));
```

---

## **11. Control Flow**

```javascript
// if statement
if (2 == 2) { // true
  console.log("2 is equal to 2");
}

if (2 == "2") { // true (type coercion)
  console.log("2 is equal to '2'");
}

if (2 === "2") { // false (strict equality)
  console.log("2 is equal to 2");
}

// Falsy values: false, 0, "", null, undefined, NaN, -0, 0n
// Truthy values: true, 1, "hello", {}, [], function(){}

// Check if object is empty
const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??)
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 11; // 11
val1 = undefined ?? 13; // 13
val1 = null ?? 5 ?? 10; // 5
console.log(val1);
```

---

## **12. Loops**

### **Array Iteration**

```javascript
const arr = [1, 2, 0, 4, 5];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of loop (values)
for (let i of arr) {
  console.log(i);
}

// for...in loop (indices)
for (let i in arr) {
  console.log(i);
}

// forEach
arr.forEach((element) => {
  console.log(element);
});
```

### **Object Iteration**

```javascript
const obj = {
  name: 'Rahul',
  age: 20,
  city: 'Delhi'
};

// for...in loop
for (let i in obj) {
  console.log(`${i} : ${obj[i]}`);
}

// Object.keys()
for (let i of Object.keys(obj)) {
  console.log(`${i} : ${obj[i]}`);
}

// Object.values()
for (const value of Object.values(obj)) {
  console.log(value);
}

// Object.entries()
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

// forEach with Object methods
Object.keys(obj).forEach(key => {
  console.log(key);
});

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

### **Map Iteration**

```javascript
const map = new Map();
map.set('name', 'Rahul');
map.set('age', 20);
map.set(1, 'one');

// for...of with Map
for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}

// forEach
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Keys and values
for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}
```

---

## **13. Higher Order Functions**

### **filter()**

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); // [5, 6, 7, 8, 9, 10]

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981 },
  { title: 'Book Two', genre: 'History', publish: 1999 },
  { title: 'Book Three', genre: 'Science', publish: 2009 }
];

let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);
```

### **map()**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Chaining
const result = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(result); // [41, 51]
```

### **reduce()**

```javascript
const array = [1, 2, 3];
const sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "py course", price: 999 },
  { itemName: "mobile dev course", price: 5999 }
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total); // 9997
```

---

## **14. DOM Manipulation**

### **Selecting Elements**

```javascript
// getElementById
const head = document.getElementById('head');

// querySelector (returns first match)
const head2 = document.querySelector('#head');

// querySelectorAll (returns NodeList)
const para = document.querySelectorAll('p');

// getElementsByClassName
const spclPara = document.querySelectorAll('.spclPara');
```

### **Styling Elements**

```javascript
head.style.color = 'red';
head.style.border = '2px solid green';
head.style.backgroundColor = 'aqua';
head.style.width = '60vw';

// Loop through elements
for (let p of para) {
  p.style.border = '3px solid yellow';
}
```

### **Attributes**

```javascript
const para = document.querySelectorAll('p')[1];
para.setAttribute('class', 'spclPara');

const img = document.querySelector('img');
img.setAttribute('src', 'i3.jpg');
img.style.width = '50vw';
console.log(img.getAttribute('src'));
```

### **Class Manipulation**

```javascript
const para2 = document.querySelectorAll('p')[3];
para2.classList.add('one');
para2.classList.add('two');
para2.classList.remove('two');
para2.classList.toggle('two');
```

### **DOM Traversal**

```javascript
const spclCity = document.querySelector('#spclCity');
spclCity.previousElementSibling.style.border = '2px solid yellow';
spclCity.nextElementSibling.style.border = '2px solid violet';
spclCity.parentElement.style.border = '3px solid black';

const ul = spclCity.parentElement;
ul.children[1].style.color = "blue";
```

### **Creating and Appending Elements**

```javascript
const x = document.createElement('li');
x.innerHTML = 'GOA';
ul.append(x); // Append element
ul.appendChild(x); // Append only supported elements
ul.append('text'); // Can append text
```

---

## **15. Events**

### **Event Types**
- onclick
- onchange
- onmouseover
- onmouseout
- onmousedown
- onmouseup
- ondblclick
- onkeydown
- onkeyup
- onload
- onunload
- onresize
- onfocus
- onblur

### **Event Handling**

```javascript
// HTML attribute
<button onclick="console.log('Clicked')">Click Me</button>

// addEventListener
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  console.log('Button clicked');
});
```

---

## **16. Asynchronous JavaScript**

### **Closures**

```javascript
function outer() {
  var money = 50;
  function inner() {
    var a = 10;
    console.log(a);
    console.log(money); // Can access outer variable
  }
  return inner;
}
var x = outer();
x(); // Closure in action
```

### **Higher Order Functions**

```javascript
function fun(a) {
  a(); // Callback function
  var a = 10;
  return a;
}

var b = () => {
  console.log("inside b function");
};

var y = fun(b); // Higher order function
console.log(y);
```

### **Event Loop & Execution**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output: Start, End, Promise, Timeout
// Microtask queue (Promise) has higher priority than task queue (setTimeout)
```

---

## **17. Promises**

```javascript
// Creating a Promise
let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve data");
  }, 3000);
});

// Consuming Promise
pr
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise with condition
function check(willCome) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willCome) {
        resolve("party dega");
      } else {
        reject("party nai dega");
      }
    }, 4000);
  });
  return pr;
}

check(true)
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(err);
  });
```

---

## **18. Async/Await**

```javascript
let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data is resolved");
  }, 3000);
});

// Using async/await
async function fetchdata() {
  let x = await pr;
  console.log(x);
}

console.log("start");
fetchdata();
console.log("end");

// Output: start, end, data is resolved
```

### **Async Function Execution Flow**

```javascript
async function a() {
  console.log(1);
  await b();
  console.log(2);
}

async function b() {
  console.log(3);
  c();
  console.log(4);
}

async function c() {
  console.log(5);
  await d();
  console.log(6);
}

async function d() {
  console.log(7);
}

a();
console.log(8);

// Output: 1, 3, 5, 7, 4, 8, 6, 2
```

---

## **19. Fetch API**

### **Basic Fetch**

```javascript
const URL = "https://dummyjson.com/recipes";

// Using Promises
fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// Using async/await
const getFact = async () => {
  console.log("getting data....");
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
};

const btn = document.querySelector('#btn');
btn.addEventListener('click', getFact);
```

### **Fetch with Search**

```javascript
const btn = document.getElementById('search_btn');
const url = 'http://universities.hipolabs.com/search?country=United+States';
const input = document.getElementById('search_input');

btn.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const search = input.value.toLowerCase();
      const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(search)
      );
      console.log(filteredData);
    })
    .catch(error => console.error('Error:', error));
});
```

---

## **20. Regular Expressions**

Regular expressions (regex) are patterns used to match character combinations in strings.

### **Common Patterns**
- `.` - Any character except newline
- `\d` - Any digit (0-9)
- `\w` - Any word character (a-z, A-Z, 0-9, _)
- `\s` - Any whitespace character
- `^` - Start of string
- `$` - End of string
- `*` - 0 or more occurrences
- `+` - 1 or more occurrences
- `?` - 0 or 1 occurrence
- `{n}` - Exactly n occurrences
- `[abc]` - Any character in brackets
- `[^abc]` - Any character NOT in brackets

---

## **21. Projects**

### **Calculator**
Location: `ZProjects/Calculator/`
- Basic arithmetic operations
- HTML, CSS, JavaScript

### **Stone Paper Scissors**
Location: `ZProjects/StonePaperScissors/`
- Game logic implementation
- DOM manipulation
- Event handling

### **Tic Tac Toe**
Location: `ZProjects/TicTacToe/`
- Game board creation
- Win condition checking
- Player turns

### **Toggle Button**
Location: `ZProjects/ToggleButton/`
- Theme switching
- State management

### **Typing Test**
Location: `ZProjects/TypingTest/`
- WPM calculation
- Accuracy tracking
- Timer implementation

---

## **Key Concepts Summary**

### **Execution Context**
1. **Call Stack** - Executes synchronous code
2. **Web APIs** - Handles async operations (setTimeout, fetch)
3. **Task Queue** - Holds callbacks from Web APIs
4. **Microtask Queue** - Holds Promise callbacks (higher priority)
5. **Event Loop** - Moves tasks from queues to call stack

### **Execution Order**
1. Synchronous code executes first
2. Microtask queue executes (Promises, queueMicrotask)
3. Task queue executes (setTimeout, setInterval)

### **Best Practices**
- Use `const` by default, `let` when reassignment needed
- Avoid `var` (function scope issues)
- Use arrow functions for concise syntax
- Prefer `async/await` over Promise chains
- Use strict equality (`===`) over loose equality (`==`)
- Always handle errors in async code
- Use meaningful variable names
- Keep functions small and focused

---

## **Resources**

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [W3Schools](https://www.w3schools.com/js/)

---

**Happy Coding! 🚀**


---

## **🎯 Interview Preparation Guide for Infosys L3 Specialist Programmer**

### **22. JavaScript Interview Questions & Concepts**

#### **22.1 Hoisting**

```javascript
// Variable Hoisting
console.log(x); // undefined (var is hoisted)
var x = 5;

console.log(y); // ReferenceError (let is not hoisted)
let y = 10;

// Function Hoisting
greet(); // Works! Function declarations are hoisted
function greet() {
  console.log("Hello");
}

sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi");
};
```

**Interview Answer:** Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. `var` declarations are hoisted with `undefined`, while `let` and `const` are in temporal dead zone.

---

#### **22.2 Closures (Important)**

```javascript
// Counter using Closure
function createCounter() {
  let count = 0;
  return {
    increment: function() { return ++count; },
    decrement: function() { return --count; },
    getCount: function() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2

// Private Variables
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance >= amount ? balance -= amount : "Insufficient",
    getBalance: () => balance
  };
}
```

**Interview Answer:** A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. Used for data privacy and factory functions.

---

#### **22.3 Prototypes & Inheritance**

```javascript
// Prototype Chain
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

const john = new Person("John", 30);
console.log(john.greet()); // Hi, I'm John
console.log(john.__proto__ === Person.prototype); // true

// ES6 Classes (Syntactic Sugar)
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  
  getDetails() {
    return `${this.name} - ${this.role}`;
  }
}

const emp = new Employee("Alice", 25, "Developer");
console.log(emp.getDetails()); // Alice - Developer
```

**Interview Answer:** Every JavaScript object has a prototype. Prototype is an object from which other objects inherit properties. Prototype chain is used for inheritance.

---

#### **22.4 Event Delegation**

```javascript
// Instead of adding listeners to each button
document.getElementById('parent').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});
```

**Interview Answer:** Event delegation uses event bubbling to handle events at a higher level in the DOM. Efficient for dynamic elements and reduces memory usage.

---

#### **22.5 Debouncing & Throttling**

```javascript
// Debouncing - Execute after delay
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage: Search input
const searchAPI = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

// Throttling - Execute at intervals
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage: Scroll event
const handleScroll = throttle(() => {
  console.log('Scrolled!');
}, 1000);
```

**Interview Answer:** 
- **Debouncing:** Delays execution until after a pause in events (e.g., search input)
- **Throttling:** Limits execution to once per time interval (e.g., scroll events)

---

#### **22.6 Call, Apply, Bind**

```javascript
const person = {
  name: 'John',
  greet: function(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
  }
};

const anotherPerson = { name: 'Alice' };

// call - invoke immediately with arguments
console.log(person.greet.call(anotherPerson, 'Hi', '!')); // Hi, I'm Alice!

// apply - invoke immediately with array
console.log(person.greet.apply(anotherPerson, ['Hello', '.'])); // Hello, I'm Alice.

// bind - returns new function
const greetAlice = person.greet.bind(anotherPerson, 'Hey');
console.log(greetAlice('?')); // Hey, I'm Alice?
```

**Interview Answer:** All three methods set the `this` context. `call` and `apply` invoke immediately (apply takes array), `bind` returns a new function.

---

#### **22.7 Currying**

```javascript
// Currying - Transform function with multiple args into sequence of functions
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

// Example
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
```

**Interview Answer:** Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument. Useful for partial application and function composition.

---

#### **22.8 Deep Copy vs Shallow Copy**

```javascript
// Shallow Copy
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
shallow.b.c = 99;
console.log(original.b.c); // 99 (nested object is still referenced)

// Deep Copy Methods
// 1. JSON method (limitations: no functions, undefined, Date, etc.)
const deep1 = JSON.parse(JSON.stringify(original));

// 2. Recursive function
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepCopy(item));
  
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

// 3. structuredClone (Modern browsers)
const deep2 = structuredClone(original);
```

**Interview Answer:** Shallow copy copies only first level, nested objects are referenced. Deep copy creates completely independent copy of all levels.

---

#### **22.9 Memoization**

```javascript
// Memoization - Cache function results
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('From cache');
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Example: Fibonacci
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast with memoization
```

**Interview Answer:** Memoization is an optimization technique that caches function results based on inputs to avoid redundant calculations.

---

#### **22.10 Promise Methods**

```javascript
// Promise.all - Wait for all promises (fails if any fails)
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(results => console.log(results)); // [1, 2, 3]

// Promise.allSettled - Wait for all, regardless of success/failure
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3)
]).then(results => console.log(results));
// [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'error'}, ...]

// Promise.race - First to settle wins
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 100))
]).then(result => console.log(result)); // 'fast'

// Promise.any - First to fulfill wins (ignores rejections)
Promise.any([
  Promise.reject('error1'),
  Promise.resolve('success'),
  Promise.reject('error2')
]).then(result => console.log(result)); // 'success'
```

**Interview Answer:** 
- `Promise.all`: All must succeed
- `Promise.allSettled`: Wait for all, get all results
- `Promise.race`: First to settle (resolve/reject)
- `Promise.any`: First to fulfill (ignores rejections)

---

#### **22.11 Error Handling**

```javascript
// try-catch with async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error; // Re-throw if needed
  } finally {
    console.log('Cleanup code here');
  }
}

// Custom Error Classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required');
  }
}
```

---

#### **22.12 Array Methods Comparison**

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - No return value, just iterate
numbers.forEach(n => console.log(n));

// map - Transform and return new array
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - Return filtered array
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - Reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - Return first match
const found = numbers.find(n => n > 3); // 4

// findIndex - Return index of first match
const index = numbers.findIndex(n => n > 3); // 3

// some - Check if any element passes test
const hasEven = numbers.some(n => n % 2 === 0); // true

// every - Check if all elements pass test
const allPositive = numbers.every(n => n > 0); // true

// flat - Flatten nested arrays
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// flatMap - Map then flatten
const arr = [1, 2, 3];
console.log(arr.flatMap(n => [n, n * 2])); // [1, 2, 2, 4, 3, 6]
```

---

#### **22.13 Object Methods**

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Object.keys - Get array of keys
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Object.values - Get array of values
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries - Get array of [key, value] pairs
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// Object.fromEntries - Create object from entries
const entries = [['x', 10], ['y', 20]];
console.log(Object.fromEntries(entries)); // {x: 10, y: 20}

// Object.assign - Merge objects (shallow)
const merged = Object.assign({}, obj, { d: 4 }); // {a: 1, b: 2, c: 3, d: 4}

// Object.freeze - Make immutable
const frozen = Object.freeze({ name: 'John' });
frozen.name = 'Jane'; // Fails silently (or throws in strict mode)

// Object.seal - Prevent adding/removing properties
const sealed = Object.seal({ age: 25 });
sealed.age = 30; // Works
sealed.name = 'John'; // Fails

// Object.hasOwnProperty - Check own property
console.log(obj.hasOwnProperty('a')); // true
```

---

#### **22.14 ES6+ Features**

```javascript
// Destructuring
const { name, age, city = 'Unknown' } = { name: 'John', age: 30 };
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a: 1, b: 2, c: 3}

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Template Literals
const name = 'John';
const greeting = `Hello, ${name}!`;

// Optional Chaining
const user = { profile: { name: 'John' } };
console.log(user?.profile?.name); // 'John'
console.log(user?.address?.city); // undefined (no error)

// Nullish Coalescing
const value = null ?? 'default'; // 'default'
const value2 = 0 ?? 'default'; // 0 (not 'default')

// Default Parameters
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

// Arrow Functions
const add = (a, b) => a + b;

// Modules
// export const PI = 3.14;
// export default function() {}
// import { PI } from './math.js';
// import myFunc from './utils.js';
```

---

#### **22.15 Set and Map**

```javascript
// Set - Unique values
const set = new Set([1, 2, 2, 3, 3, 4]);
console.log(set); // Set {1, 2, 3, 4}
set.add(5);
set.delete(1);
console.log(set.has(2)); // true
console.log(set.size); // 4

// Remove duplicates from array
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)]; // [1, 2, 3, 4]

// Map - Key-value pairs (any type as key)
const map = new Map();
map.set('name', 'John');
map.set(1, 'one');
map.set({ id: 1 }, 'object key');

console.log(map.get('name')); // 'John'
console.log(map.has(1)); // true
console.log(map.size); // 3

// Iterate Map
for (let [key, value] of map) {
  console.log(key, value);
}

// WeakMap & WeakSet - Garbage collection friendly
const weakMap = new WeakMap();
let obj = { id: 1 };
weakMap.set(obj, 'data');
obj = null; // Object can be garbage collected
```

---

#### **22.16 Performance Optimization**

```javascript
// 1. Use const/let instead of var
const x = 10; // Block scoped, better performance

// 2. Avoid global variables
(function() {
  // Code here
})();

// 3. Use event delegation
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    // Handle click
  }
});

// 4. Debounce expensive operations
const expensiveOperation = debounce(() => {
  // Heavy computation
}, 300);

// 5. Use DocumentFragment for multiple DOM insertions
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
document.getElementById('list').appendChild(fragment);

// 6. Lazy loading
const lazyLoad = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(lazyLoad);
document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
```

---

### **23. Common Coding Problems**

#### **23.1 Palindrome Check**

```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

#### **23.2 Anagram Check**

```javascript
function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // true
```

#### **23.3 Find Duplicates**

```javascript
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });
  
  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // [2, 3]
```

#### **23.4 Flatten Array**

```javascript
function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
```

#### **23.5 Group By Property**

```javascript
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const groupKey = obj[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(obj);
    return acc;
  }, {});
}

const users = [
  { name: 'John', role: 'admin' },
  { name: 'Jane', role: 'user' },
  { name: 'Bob', role: 'admin' }
];

console.log(groupBy(users, 'role'));
// { admin: [{...}, {...}], user: [{...}] }
```

#### **23.6 Debounce Implementation**

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

#### **23.7 Throttle Implementation**

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

---

### **24. Important Interview Topics**

#### **24.1 Difference Between == and ===**

```javascript
console.log(5 == '5');   // true (type coercion)
console.log(5 === '5');  // false (strict equality)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

#### **24.2 Temporal Dead Zone**

```javascript
// TDZ - Time between entering scope and variable declaration
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;

// var doesn't have TDZ
console.log(y); // undefined
var y = 10;
```

#### **24.3 Event Bubbling vs Capturing**

```javascript
// Bubbling (default) - Event goes from target to root
element.addEventListener('click', handler); // Bubbling phase

// Capturing - Event goes from root to target
element.addEventListener('click', handler, true); // Capturing phase

// Stop propagation
element.addEventListener('click', (e) => {
  e.stopPropagation(); // Stops bubbling/capturing
});
```

#### **24.4 localStorage vs sessionStorage vs Cookies**

```javascript
// localStorage - Persists until manually cleared
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();

// sessionStorage - Cleared when tab closes
sessionStorage.setItem('key', 'value');

// Cookies - Can set expiration, sent with HTTP requests
document.cookie = "username=John; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
```

**Differences:**
- localStorage: 10MB, persists forever
- sessionStorage: 5MB, cleared on tab close
- Cookies: 4KB, sent with every HTTP request, can set expiration

---

### **25. Best Practices for Infosys Interview**

1. **Code Quality**
   - Write clean, readable code
   - Use meaningful variable names
   - Add comments for complex logic
   - Follow DRY principle

2. **Problem Solving Approach**
   - Understand the problem first
   - Ask clarifying questions
   - Think about edge cases
   - Optimize time and space complexity

3. **Communication**
   - Explain your thought process
   - Discuss trade-offs
   - Be open to feedback

4. **Common Topics to Prepare**
   - Closures and scope
   - Promises and async/await
   - Array and object methods
   - Event loop and asynchronous JavaScript
   - ES6+ features
   - DOM manipulation
   - Error handling
   - Performance optimization

---

### **26. Quick Reference Cheat Sheet**

```javascript
// Array Methods
map()      // Transform elements
filter()   // Filter elements
reduce()   // Reduce to single value
forEach()  // Iterate (no return)
find()     // Find first match
some()     // Check if any passes
every()    // Check if all pass
flat()     // Flatten array
sort()     // Sort array

// Object Methods
Object.keys()        // Get keys
Object.values()      // Get values
Object.entries()     // Get [key, value] pairs
Object.assign()      // Merge objects
Object.freeze()      // Make immutable
Object.seal()        // Prevent add/remove

// String Methods
split()      // Split to array
join()       // Join array to string
slice()      // Extract substring
substring()  // Extract substring
indexOf()    // Find index
includes()   // Check if contains
trim()       // Remove whitespace
replace()    // Replace substring

// Promise Methods
Promise.all()        // Wait for all
Promise.race()       // First to settle
Promise.allSettled() // Wait for all results
Promise.any()        // First to fulfill
```

---

**Good Luck with Your Infosys L3 Interview! 🚀**


---

## **📖 Detailed Definitions & Concepts**

### **Core JavaScript Concepts**

#### **1. Variables**
- **var**: Function-scoped variable declaration that can be redeclared and updated. Hoisted to the top with undefined value.
- **let**: Block-scoped variable declaration that can be updated but not redeclared in the same scope.
- **const**: Block-scoped constant declaration that cannot be updated or redeclared. Must be initialized at declaration.
- **Hoisting**: JavaScript's default behavior of moving declarations to the top of the current scope before code execution.
- **Scope**: The accessibility of variables, functions, and objects in particular parts of code during runtime.
- **Block Scope**: Variables declared inside a {} block cannot be accessed from outside.
- **Function Scope**: Variables declared within a function are only accessible within that function.
- **Global Scope**: Variables declared outside any function or block are accessible everywhere.

#### **2. Data Types**
- **Primitive Types**: Immutable data types stored directly in the variable (Number, String, Boolean, Undefined, Null, Symbol, BigInt).
- **Reference Types**: Mutable data types stored as references (Object, Array, Function).
- **typeof**: Operator that returns a string indicating the type of the operand.
- **Number**: Represents both integer and floating-point numbers.
- **String**: Represents textual data enclosed in quotes.
- **Boolean**: Represents logical entity with two values: true and false.
- **Undefined**: Variable declared but not assigned a value.
- **Null**: Intentional absence of any object value.
- **Symbol**: Unique and immutable primitive value used as object property keys.
- **BigInt**: Numeric primitive for representing integers larger than 2^53 - 1.

#### **3. Type Conversion**
- **Implicit Conversion (Coercion)**: Automatic type conversion by JavaScript.
- **Explicit Conversion (Casting)**: Manual type conversion using functions like Number(), String(), Boolean().
- **parseInt()**: Parses a string and returns an integer.
- **parseFloat()**: Parses a string and returns a floating-point number.
- **toString()**: Converts a value to a string.
- **toFixed()**: Formats a number using fixed-point notation.
- **toPrecision()**: Returns a string representing the number to a specified precision.
- **toLocaleString()**: Returns a string with language-sensitive representation of the number.

#### **4. Operators**
- **Arithmetic Operators**: +, -, *, /, %, ++ (increment), -- (decrement)
- **Assignment Operators**: =, +=, -=, *=, /=, %=
- **Comparison Operators**: ==, ===, !=, !==, >, <, >=, <=
- **Logical Operators**: && (AND), || (OR), ! (NOT)
- **Ternary Operator**: condition ? expr1 : expr2
- **Nullish Coalescing (??)**:Returns right operand when left is null or undefined.
- **Optional Chaining (?.)**:Safely access nested object properties without checking each level.
- **Spread Operator (...)**: Expands iterables into individual elements.
- **Rest Parameter (...)**: Collects multiple elements into an array.

#### **5. Functions**
- **Function Declaration**: Named function defined using function keyword, hoisted.
- **Function Expression**: Function assigned to a variable, not hoisted.
- **Arrow Function**: Concise syntax using =>, doesn't have own this binding.
- **Anonymous Function**: Function without a name.
- **Named Function Expression (NFE)**: Function expression with a name, name only accessible inside function.
- **IIFE (Immediately Invoked Function Expression)**: Function that runs as soon as it's defined.
- **Callback Function**: Function passed as an argument to another function.
- **Higher-Order Function**: Function that takes function as argument or returns a function.
- **Pure Function**: Function that always returns same output for same input, no side effects.
- **First-Class Functions**: Functions treated as first-class citizens (can be assigned, passed, returned).
- **Function Parameters**: Variables listed in function definition.
- **Function Arguments**: Actual values passed to function when invoked.
- **Default Parameters**: Parameters with default values if no argument is provided.
- **Rest Parameters**: Allows function to accept indefinite number of arguments as array.

#### **6. Objects**
- **Object**: Collection of key-value pairs (properties and methods).
- **Object Literal**: Creating object using {} notation.
- **Object Constructor**: Creating object using new Object() or constructor function.
- **Property**: Key-value pair in an object.
- **Method**: Function stored as object property.
- **this Keyword**: Refers to the object that is executing the current function.
- **Prototype**: Object from which other objects inherit properties.
- **Prototype Chain**: Series of links between objects through prototypes.
- **__proto__**: Property that points to the prototype of an object.
- **Constructor Function**: Function used to create objects with new keyword.
- **Object.keys()**: Returns array of object's own property names.
- **Object.values()**: Returns array of object's own property values.
- **Object.entries()**: Returns array of [key, value] pairs.
- **Object.assign()**: Copies properties from source objects to target object.
- **Object.freeze()**: Makes object immutable (cannot add, delete, or modify properties).
- **Object.seal()**: Prevents adding or removing properties but allows modifying existing ones.
- **Object.create()**: Creates new object with specified prototype.
- **hasOwnProperty()**: Checks if object has specified property as own property.
- **Destructuring**: Extracting values from objects or arrays into distinct variables.

#### **7. Arrays**
- **Array**: Ordered collection of values accessed by numeric index.
- **Array Literal**: Creating array using [] notation.
- **Array Constructor**: Creating array using new Array().
- **Index**: Numeric position of element in array (starts from 0).
- **Length**: Property that returns number of elements in array.
- **push()**: Adds elements to end of array, returns new length.
- **pop()**: Removes last element from array, returns removed element.
- **shift()**: Removes first element from array, returns removed element.
- **unshift()**: Adds elements to beginning of array, returns new length.
- **concat()**: Merges two or more arrays, returns new array.
- **slice()**: Returns shallow copy of portion of array.
- **splice()**: Changes array by removing, replacing, or adding elements.
- **forEach()**: Executes function for each array element, returns undefined.
- **map()**: Creates new array with results of calling function on every element.
- **filter()**: Creates new array with elements that pass test function.
- **reduce()**: Reduces array to single value by executing reducer function.
- **find()**: Returns first element that satisfies test function.
- **findIndex()**: Returns index of first element that satisfies test function.
- **some()**: Tests whether at least one element passes test function.
- **every()**: Tests whether all elements pass test function.
- **sort()**: Sorts elements of array in place.
- **reverse()**: Reverses order of elements in array.
- **includes()**: Determines whether array includes certain element.
- **indexOf()**: Returns first index at which element is found.
- **lastIndexOf()**: Returns last index at which element is found.
- **join()**: Joins all array elements into a string.
- **flat()**: Creates new array with sub-array elements concatenated.
- **flatMap()**: Maps each element using function, then flattens result.
- **Array.isArray()**: Determines whether passed value is an array.
- **Array.from()**: Creates new array from array-like or iterable object.

#### **8. Strings**
- **String**: Sequence of characters used to represent text.
- **String Literal**: Creating string using quotes (' ', " ", ` `).
- **Template Literal**: String using backticks allowing embedded expressions.
- **String Interpolation**: Embedding expressions in template literals using ${}.
- **length**: Property that returns number of characters in string.
- **charAt()**: Returns character at specified index.
- **charCodeAt()**: Returns Unicode of character at specified index.
- **concat()**: Combines two or more strings.
- **indexOf()**: Returns index of first occurrence of specified value.
- **lastIndexOf()**: Returns index of last occurrence of specified value.
- **slice()**: Extracts section of string and returns new string.
- **substring()**: Returns part of string between start and end indexes.
- **substr()**: Returns part of string starting at specified index.
- **toLowerCase()**: Converts string to lowercase.
- **toUpperCase()**: Converts string to uppercase.
- **trim()**: Removes whitespace from both ends of string.
- **trimStart()**: Removes whitespace from beginning of string.
- **trimEnd()**: Removes whitespace from end of string.
- **split()**: Splits string into array of substrings.
- **replace()**: Replaces specified value with another value.
- **replaceAll()**: Replaces all occurrences of specified value.
- **match()**: Retrieves result of matching string against regular expression.
- **search()**: Searches string for specified value and returns position.
- **includes()**: Determines whether string contains specified value.
- **startsWith()**: Determines whether string begins with specified characters.
- **endsWith()**: Determines whether string ends with specified characters.
- **repeat()**: Returns new string with specified number of copies.
- **padStart()**: Pads string from start with another string.
- **padEnd()**: Pads string from end with another string.

#### **9. Control Flow**
- **if Statement**: Executes code block if condition is true.
- **else Statement**: Executes code block if if condition is false.
- **else if**: Tests multiple conditions sequentially.
- **switch Statement**: Executes code block based on different cases.
- **Ternary Operator**: Shorthand for if-else statement (condition ? true : false).
- **Truthy Values**: Values that evaluate to true in boolean context.
- **Falsy Values**: Values that evaluate to false (false, 0, "", null, undefined, NaN).
- **Type Coercion**: Automatic conversion of values from one type to another.
- **Strict Equality (===)**: Compares values without type coercion.
- **Loose Equality (==)**: Compares values with type coercion.

#### **10. Loops**
- **for Loop**: Repeats code block specified number of times.
- **while Loop**: Repeats code block while condition is true.
- **do...while Loop**: Executes code block once, then repeats while condition is true.
- **for...in Loop**: Iterates over enumerable properties of object.
- **for...of Loop**: Iterates over iterable objects (arrays, strings, maps, sets).
- **forEach()**: Array method that executes function for each element.
- **break**: Exits loop immediately.
- **continue**: Skips current iteration and continues with next.
- **Iteration**: Process of repeating steps.
- **Iterator**: Object that defines sequence and return value upon termination.
- **Iterable**: Object that can be iterated over.

#### **11. Asynchronous JavaScript**
- **Synchronous**: Code executed line by line, blocking execution.
- **Asynchronous**: Code executed without blocking, allows other operations to continue.
- **Callback**: Function passed as argument to be executed later.
- **Callback Hell**: Nested callbacks making code hard to read and maintain.
- **Promise**: Object representing eventual completion or failure of async operation.
- **Promise States**: Pending (initial), Fulfilled (success), Rejected (failure).
- **then()**: Method to handle fulfilled promise.
- **catch()**: Method to handle rejected promise.
- **finally()**: Method executed regardless of promise outcome.
- **async Function**: Function that returns a promise.
- **await**: Pauses async function execution until promise is resolved.
- **Promise.all()**: Waits for all promises to resolve or any to reject.
- **Promise.race()**: Returns first promise to settle (resolve or reject).
- **Promise.allSettled()**: Waits for all promises to settle regardless of outcome.
- **Promise.any()**: Returns first promise to fulfill, ignores rejections.
- **Event Loop**: Mechanism that handles asynchronous operations.
- **Call Stack**: Data structure tracking function execution.
- **Task Queue (Callback Queue)**: Queue holding callbacks from async operations.
- **Microtask Queue**: Queue with higher priority for promises and mutation observers.
- **Web APIs**: Browser-provided APIs for async operations (setTimeout, fetch, DOM events).

#### **12. Closures**
- **Closure**: Function that has access to outer function's variables even after outer function returns.
- **Lexical Scope**: Function's access to variables defined in its outer scope.
- **Scope Chain**: Chain of scopes from inner to outer functions.
- **Private Variables**: Variables accessible only within closure, not from outside.
- **Factory Function**: Function that returns new objects.
- **Module Pattern**: Design pattern using closures to create private and public members.

#### **13. DOM Manipulation**
- **DOM (Document Object Model)**: Programming interface for HTML documents.
- **Node**: Basic unit in DOM tree (element, text, comment).
- **Element**: HTML tag represented as object in DOM.
- **Document**: Root node of DOM tree.
- **getElementById()**: Selects element by its id attribute.
- **getElementsByClassName()**: Selects elements by class name.
- **getElementsByTagName()**: Selects elements by tag name.
- **querySelector()**: Selects first element matching CSS selector.
- **querySelectorAll()**: Selects all elements matching CSS selector.
- **createElement()**: Creates new HTML element.
- **appendChild()**: Adds node as last child of parent.
- **append()**: Adds nodes or strings as last children.
- **removeChild()**: Removes child node from parent.
- **remove()**: Removes element from DOM.
- **innerHTML**: Gets or sets HTML content of element.
- **textContent**: Gets or sets text content of element.
- **innerText**: Gets or sets visible text content.
- **setAttribute()**: Sets value of attribute on element.
- **getAttribute()**: Gets value of attribute from element.
- **removeAttribute()**: Removes attribute from element.
- **classList**: Property to access element's class list.
- **classList.add()**: Adds class to element.
- **classList.remove()**: Removes class from element.
- **classList.toggle()**: Toggles class on element.
- **classList.contains()**: Checks if element has class.
- **style**: Property to access inline styles of element.
- **parentElement**: Returns parent element.
- **children**: Returns collection of child elements.
- **firstElementChild**: Returns first child element.
- **lastElementChild**: Returns last child element.
- **nextElementSibling**: Returns next sibling element.
- **previousElementSibling**: Returns previous sibling element.

#### **14. Events**
- **Event**: Action or occurrence detected by browser.
- **Event Handler**: Function that runs when event occurs.
- **Event Listener**: Interface for handling events.
- **addEventListener()**: Attaches event handler to element.
- **removeEventListener()**: Removes event handler from element.
- **Event Object**: Object containing information about event.
- **event.target**: Element that triggered event.
- **event.currentTarget**: Element to which event handler is attached.
- **event.preventDefault()**: Prevents default action of event.
- **event.stopPropagation()**: Stops event from bubbling up.
- **Event Bubbling**: Event propagates from target to root.
- **Event Capturing**: Event propagates from root to target.
- **Event Delegation**: Technique of handling events at parent level.
- **onclick**: Event fired when element is clicked.
- **onchange**: Event fired when value of element changes.
- **onsubmit**: Event fired when form is submitted.
- **onload**: Event fired when page or image finishes loading.
- **onkeydown**: Event fired when key is pressed down.
- **onkeyup**: Event fired when key is released.
- **onmouseover**: Event fired when mouse enters element.
- **onmouseout**: Event fired when mouse leaves element.

#### **15. Error Handling**
- **Error**: Object representing runtime error.
- **try**: Block of code to test for errors.
- **catch**: Block of code to handle errors.
- **finally**: Block of code executed regardless of error.
- **throw**: Creates custom error.
- **Error Types**: SyntaxError, ReferenceError, TypeError, RangeError, etc.
- **Stack Trace**: List of function calls leading to error.
- **Error.message**: Description of error.
- **Error.name**: Name of error type.
- **Custom Errors**: User-defined error classes extending Error.

#### **16. ES6+ Features**
- **let & const**: Block-scoped variable declarations.
- **Arrow Functions**: Concise function syntax with lexical this.
- **Template Literals**: String literals with embedded expressions.
- **Destructuring**: Extracting values from arrays or objects.
- **Spread Operator**: Expands iterable into individual elements.
- **Rest Parameters**: Collects arguments into array.
- **Default Parameters**: Default values for function parameters.
- **Classes**: Syntactic sugar for constructor functions and prototypes.
- **Modules**: Import/export functionality for code organization.
- **Promises**: Native promise implementation.
- **async/await**: Syntactic sugar for working with promises.
- **Symbol**: New primitive type for unique identifiers.
- **Map**: Collection of key-value pairs with any type as key.
- **Set**: Collection of unique values.
- **WeakMap**: Map with weak references to keys.
- **WeakSet**: Set with weak references to values.
- **Optional Chaining**: Safe property access with ?. operator.
- **Nullish Coalescing**: ?? operator for null/undefined checks.
- **BigInt**: Arbitrary precision integers.
- **for...of**: Loop for iterating over iterables.

#### **17. Advanced Concepts**
- **Hoisting**: Moving declarations to top of scope.
- **Temporal Dead Zone**: Period between entering scope and variable declaration.
- **Scope Chain**: Chain of variable scopes from inner to outer.
- **Execution Context**: Environment where code is executed.
- **Call Stack**: Stack tracking function execution.
- **Memory Heap**: Memory allocation for objects.
- **Garbage Collection**: Automatic memory management.
- **Memoization**: Caching function results for optimization.
- **Debouncing**: Delaying function execution until after pause.
- **Throttling**: Limiting function execution frequency.
- **Currying**: Transforming function with multiple arguments into sequence of functions.
- **Partial Application**: Fixing some arguments of function.
- **Function Composition**: Combining functions to create new function.
- **Immutability**: Data that cannot be changed after creation.
- **Pure Functions**: Functions without side effects.
- **Side Effects**: Changes to state outside function scope.
- **Recursion**: Function calling itself.
- **Tail Call Optimization**: Optimization for recursive functions.
- **Event Loop**: Mechanism handling async operations.
- **Microtasks**: High-priority tasks (promises, mutation observers).
- **Macrotasks**: Regular tasks (setTimeout, setInterval, I/O).

#### **18. Performance & Optimization**
- **Lazy Loading**: Loading resources only when needed.
- **Code Splitting**: Breaking code into smaller chunks.
- **Tree Shaking**: Removing unused code.
- **Minification**: Reducing code size by removing whitespace and comments.
- **Bundling**: Combining multiple files into one.
- **Caching**: Storing data for faster access.
- **Debouncing**: Delaying execution until pause in events.
- **Throttling**: Limiting execution frequency.
- **Memoization**: Caching function results.
- **Virtual DOM**: In-memory representation of DOM.
- **Batch Updates**: Grouping multiple updates together.
- **RequestAnimationFrame**: Optimizing animations.
- **Web Workers**: Running scripts in background threads.
- **Service Workers**: Scripts for offline functionality and caching.

#### **19. Storage**
- **localStorage**: Persistent storage with no expiration.
- **sessionStorage**: Storage cleared when tab closes.
- **Cookies**: Small data stored in browser, sent with requests.
- **IndexedDB**: Low-level API for storing large amounts of data.
- **Cache API**: Storing request/response pairs for offline use.
- **Storage Limits**: Browser-specific limits on storage size.
- **Storage Events**: Events fired when storage changes.

#### **20. Regular Expressions**
- **RegExp**: Object for matching text patterns.
- **Pattern**: Sequence of characters defining search pattern.
- **Flags**: Modifiers for regex (g, i, m, s, u, y).
- **test()**: Tests for match in string.
- **exec()**: Executes search for match in string.
- **match()**: Retrieves matches when matching string against regex.
- **search()**: Tests for match and returns index.
- **replace()**: Replaces matched substring.
- **split()**: Splits string using regex as separator.
- **Character Classes**: Patterns matching specific character sets.
- **Quantifiers**: Specify number of occurrences.
- **Anchors**: Match positions (^, $).
- **Groups**: Capturing and non-capturing groups.
- **Lookahead/Lookbehind**: Assertions for matching without consuming.

---

**This comprehensive definitions section covers all JavaScript concepts used in the codebase!** 📚✨

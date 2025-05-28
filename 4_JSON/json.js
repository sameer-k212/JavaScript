const user = {
  name : "Sameer",
  age : 22
}


// JSON.stringify() is used to convert a JavaScript object into a JSON string.
const string = JSON.stringify(user);
console.log(string); // {"name":"Sameer","age":22} - This is a string
console.log(string['name']); // undefined - this is a string, not an object.


// JSON.parse() is used to convert a JSON string into a JavaScript object.
const object = JSON.parse(string);
console.log(object); // { name: 'Sameer', age: 22 } - This is an object
console.log(object["name"]); // Sameer
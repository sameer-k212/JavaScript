// for loop
const arr = [1, 2, 0, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + ' ');
}
console.log();
console.log(...arr);
// for of loop
for (let i of arr){
    console.log(i);
}
// for in loop
for(let i in arr){
    console.log(i);
}
// for each loop
arr.forEach((element)=>{
    console.log(element);
});





// traversal on object
const obj = {
    name: 'Rahul',
    age: 20,
    city: 'Delhi'
}
console.log("-------------------------------------------------------------------");
// for in loop
for(let i in obj){
    console.log(`${i} : ${obj[i]}`);
}
console.log("-------------------------------------------------------------------");
// for of loop
for(let i of Object.keys(obj)){
    console.log(`${i} : ${obj[i]}`);
}
console.log("---------------------------------------------------------------------");
for (const value of Object.values(obj)) {
    console.log(value); // 1, 2, 3
}
console.log("---------------------------------------------------------------------");
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`); 
}
console.log("---------------------------------------------------------------------");
// obj.forEach((item)=>{ // you can not use directly forEach on object
//     console.log(item);
// })
Object.keys(obj).forEach(key => {
  console.log(key); // a, b, c
});
console.log("---------------------------------------------------------------------");
Object.values(obj).forEach(value => {
    console.log(value); // 1, 2, 3
  });
console.log("---------------------------------------------------------------------");
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});




// Strings
console.log("---------------------------------------------------------------------");
const str = "Hello";
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}
console.log("---------------------------------------------------------------------");
for(let element of str){
    console.log(element);
}
console.log("---------------------------------------------------------------------");
for(let idx in str){
    console.log(idx);
}
// In this example, the loop prints 0, 1, 2, 3, 4 because
//  these are the indices of the characters in the string "hello".

console.log("For each Loop-------------------------------------------------------------");
// for each loop
str.split('').forEach(char => {
    console.log(char);
  });
  


  console.log("---------------------------------------------------------------------");
// maps : preserve order of insertion
const map = new Map();
map.set('name', 'Rahul');
map.set('age', 20);
map.set('city', 'Delhi');
map.set(1,'one');
map.set(1,'two');
map.set(1,'1');
console.log(map);
// for of loop
for(let key of map){
    console.log(key); // [ 'name', 'Rahul' ], [ 'age', 20 ], [ 'city', 'Delhi' ]
}
console.log("---------------------------------------------------------------------");

for(let [key, value] of map){
    console.log(`${key} : ${value}`); // name : Rahul, age : 20, city : Delhi
}
console.log("---------------------------------------------------------------------");

// for in loop : can not be used 
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  console.log("---------------------------------------------------------------------");

// For keys
for (const key of map.keys()) {
   console.log(key);
}
console.log("---------------------------------------------------------------------");

// For values
for (const value of map.values()) {
   console.log(value);
}
console.log("---------------------------------------------------------------------");

for (const [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}
      


console.log("---------------------------------------------------------------------");
// for each on array of objects.... very very important;
  const array = [
    {
        a : 'apple',
        b : 'banana',
    },
    {
        a : 'ant',
        c : 'cat',
        d : 'dog',
    }
  ];
array.forEach((item)=>{
    console.log(item.a);
})



// heigh order functions: 

// Higher-order array methods in JavaScript are functions that operate on arrays and either take
// other functions as arguments or return functions. These methods enable concise and expressive manipulation of array data. 

// Common higher-order array methods include:

// forEach(): Executes a provided function once for each array element.

// map(): Creates a new array with the results of calling a provided function on every element in the calling array.

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// reduce(): Executes a reducer function (provided by the user) on each element of the array, resulting in a single output value.

// sort(): Sorts the elements of an array in place and returns the sorted array.

// find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

// every(): Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// some(): Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
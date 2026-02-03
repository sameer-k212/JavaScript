// global scope
function a(){
  g = 9;
  let c = 19;
  const d = 10;
  var e = 20;
}
a();
console.log(g); // accessible because it has a global scope. 
// console.log(c); // not accessible because it has a block scope.
// console.log(d); // not accessible because it has a block scope.
// console.log(e); // not accessible because it has a functional scope.



// justifying how var has function scope
function fun(){
  if(true){
    var x = 10; // not block scope but has functional scope.
  }
  console.log(x);
};
fun();



// we can create variables using let var const in global context as well Example:-
var a = 100;     // Global variable using `var`
let b = 200;     // Global variable using `let` (in the global context)
const c = 300;   // Global constant

console.log(a, b, c);    // Accessible: 100, 200, 300

function test() {
  console.log(a,b,c);    // Accessible: 100
}
test();

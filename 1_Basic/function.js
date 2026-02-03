function fun(){
    console.log("inside the function")
}

var a = fun; // a has a function definition.
console.log(a);  // it will print the function definition.
console.log(fun); // it will print the function definition.




var y = function outer(){
    console.log("inside outer function")
}
console.log(y); // it will print the function definition.
// console.log(outer); // it will give error because outer is not defined in the global scope.


// Key Concept:
// This is called a named function expression (NFE) because:
// It is a function expression (assigned to a variable).
// It has an internal name (outer), which is only available inside the function body.
// If you want outer to be accessible globally, you should use a function declaration instead:

// NFE : Named Function Expression

var prime = ()=>{
    console.log("funtion..");
}

console.log(prime); // 

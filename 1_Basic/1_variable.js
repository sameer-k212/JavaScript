// use prefere not to use var: because it has global scope and functional scope
// do not use var date type
// recomend to use only const and let


// 1. const : used for constant value and it has block scope.
const userId = 2215001565; 
console.log(typeof userId); // it will give number
const c = 'a';
console.log(typeof c); // it will give string

// changing value;
// const val = 9;
// val = 8  // if we do, get compile time error.
// console.log(val);            


// 2.let : used for variable and it has block scope.
let data;
console.log(data);  // it will give undefined.
//  console.log(email);   it will give error because it is not defined
let email = "sameerkushwaha2003@gmail.com"
console.log(email); 



// 3. var : used for variable and it has functional scope.
console.log(userPassword);  // it will give undefined because it is not defined
var userPassword = "949434"
userPassword = "89839"
console.log(userPassword);



//4. self defined variable: global variable(scope)
userName = "Sameer Kushwaha";
email = "sameer.kushawaha_cs22@gla.ac.in";
userName  = "Sam";
console.log(userName);
console.log(email);



// table
console.table([userId,email,userPassword,userName]);



// spliting text into array
str = "hello my name is sameer kushwaha"
var a = str.split("name");
console.log(a);


console.log(eval('2+6')); // it will give 8
console.log(eval('2+6+8')); // it will give 16
console.log(eval('2'+6)); // 26
console.log(eval('2'+'2')); // 22
console.log(eval('2+6'+'8'+3)); // 685


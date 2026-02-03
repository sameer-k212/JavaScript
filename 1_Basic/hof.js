// higher order funtion..

function fun(a){     // 
   a()
    var a = 10;
    return a;

}
var b = ()=>{   // call back funtion.. or accepting function..
    console.log("insider b funtion"); 
}

var y = fun(b);  // higher order funtion becasue it is accepting function as an argument..

console.log(y);








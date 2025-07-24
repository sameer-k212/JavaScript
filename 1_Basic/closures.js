function outer(){
    var money = 50;
    function inner(){
        var a = 10;
        console.log(a);
        console.log(money);
    }
    return inner;
}
var x = outer;
console.log(x);




function outer(){
    var money = 50;
    function inner(){
        var a = 10;
        console.log(a);
        console.log(money);
    }
    return inner();   // inner() is called here  and it will return 
}
var x = outer();
console.log(x);



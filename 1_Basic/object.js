var obj = {'name1':'Sameer',age1:45,city1:'delhi'}
console.log(typeof obj) // object
console.log(obj);

console.log(obj.age1) // 

for(var i in obj){
    console.log(i)  //  key
    console.log(obj.i) //  undefine
}

for(var i in obj){
    console.log(i)  // key
    console.log(obj[i]) // element
}


obj = {'full name':'Sameer',age1:45,city1:'delhi'}
console.log(obj['full name'])

var money = 100;
var str = 'i have money rs'
console.log(str)


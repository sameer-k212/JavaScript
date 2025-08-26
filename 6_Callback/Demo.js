console.log("Start");

function fn(){
    for(let i = 0; i < 1e9; i++){}
    console.log("Data is Fatched");
}

function fetchData(callback){
    callback();
}

const data = fetchData(fn)

console.log("End");




async function f1(){
    console.log("1");
    await a();
    console.log("2");
}
async function a(){
    console.log("3");
    await c();
    console.log("4");
}
async function c(){
    console.log("5");
    d();
    console.log("6");
    await e();
    console.log("7");
    console.log("8");
}
async function d(){
    console.log("11");
}
async function e(){
    console.log("12");
}
f1();
console.log("9");
console.log("10");
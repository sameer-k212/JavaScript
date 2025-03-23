async function a() {
    console.log(1);
    await b();
    console.log(2);
}

async function b() {
    console.log(3);
    c();
    console.log(4);
    console.log(9);
}

async function c() {
    console.log(5);
    await d();
    console.log(6);
}

async function d() {
    console.log(7);
}

a();
console.log(8);
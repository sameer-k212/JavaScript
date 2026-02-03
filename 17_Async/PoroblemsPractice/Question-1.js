console.log("Start");

setTimeout(() => {              // after 0 ms it will go to task queue
    console.log("Timeout");
}, 0);

Promise.resolve("heo").then((value) => { // it will go to microtask queue
    console.log("Promise" + value);
});

console.log("End");

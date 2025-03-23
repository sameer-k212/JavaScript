async function taskA() {
    console.log("Task A: Start");
    await new Promise((resolve) => setTimeout(resolve, 500)); // goes to microtask queue AND wait taskA
    console.log("Task A: End");
}
async function taskB() {
    console.log("Task B: Start");
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate async operation
    console.log("Task B: End");
}

async function taskC() {
    console.log("Task C: Start");
    await taskA();
    await taskB(); // pause pe aa jayenge sab  wait taskC
    console.log("Task C: End");
}

async function taskD() {
    console.log("Task D: Start");
    await new Promise((resolve) => setTimeout(resolve, 100)); // went to microtask queue AND wait taskD
    console.log("Task D: End");
}

console.log("Main: Start");
taskC();
taskD();
console.log("Main: End");


// output : Main: Start
// Task C: Start
// Task A: Start
// Task D: Start
// Main: End
// Task D: End
// Task A: End
// Task B: Start
// Task B: End
// Task C: End
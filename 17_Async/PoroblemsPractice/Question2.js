async function taskA() {
    console.log("Task A: Start");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("Task A: End");
}
async function taskB() {
    console.log("Task B: Start");
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 500ms
    console.log("Task B: End");
}
async function runTasks() {
    console.log("Run Tasks: Start");
    await Promise.all([taskA(), taskB()]); // Run tasks concurrently
    console.log("Run Tasks: End");
}

console.log("Main: Start");
runTasks();
console.log("Main: End");
// Async keyword ka use hame waha karte hain karte hain jana pe hame await karna hota hain function ke andar
// await — kisi asynchronous operation ka result wait karne ke liye use hota hai, par sirf async function ke andar hi kaam karta hai.

// 🔍 async बनाने का मतलब क्या है?
// async का मतलब होता है कि आप एक ऐसा function बना रहे हैं जो asynchronous (असिंक्रोनस)
// तरीके से काम करेगा — यानी वो function background में काम करेगा और जब उसका result ready होगा, 
// तभी आगे का code चलेगा।

// async function वो होता है:
// जो automatically Promise return करता है।
// जिसके अंदर आप await का इस्तेमाल कर सकते हो — जिससे आप asynchronous code को सिंक्रोनस की तरह पढ़ और लिख सकते हो।


// JavaScript ka saara code main thread par hi run hota hai — but asynchronous 
// kaam (like setTimeout, fetch, etc.) Web APIs aur queues ka use karke handle kiya jata hai, 
// lekin ultimately main thread hi unhe execute karta hai.

// 🔁 Details:
// 🧵 1. JavaScript = Single Threaded
// JavaScript engine (like V8 in Chrome) ek single main thread par kaam karta hai.

// Saare synchronous tasks, jaise:
// console.log()
// for loops
// variable assignment
// function calls
// → ye sab main thread mein hi execute hote hain.

// ⏳ 2. Asynchronous Tasks (Web APIs + Event Loop)
// Example: 
// setTimeout(() => console.log("Hello"), 1000);
// console.log("World");
// | Step | Kya hota hai                  | Kahan hota hai                                          |
// | ---- | ----------------------------- | ------------------------------------------------------- |
// | 1    | `setTimeout` call             | 🔁 Main thread                                          |
// | 2    | Timer start hota hai          | 🌐 Web API (browser side)                               |
// | 3    | `console.log("World")`        | 🔁 Main thread                                          |
// | 4    | Timer complete hone ke baad   | 📥 Callback goes to **task queue**                      |
// | 5    | Jab main thread free hota hai | 🔁 Callback is picked from queue and run on main thread |

// So Web APIs sirf background me timer ya fetch handle karte hain,
// callback tabhi execute hota hai jab main thread free hota hai.

// Q. but syncronous and async task parallely kaise execute hote hain
// ans: Synchronous and asynchronous tasks do not execute in true parallel in JavaScript (kyunki JS single-threaded hai),
// but they appear as if they’re parallel thanks to the event loop, Web APIs, and task queues.

// | Type         | Where It Runs            | When It Runs                                               |
// | ------------ | ------------------------ | ---------------------------------------------------------- |
// | Synchronous  | 🧠 Main thread           | Immediately, line by line                                  |
// | Asynchronous | 🌐 Web APIs + Event Loop | Background mein wait, then main thread par jab chance mile |

// 🔄 Event Loop Example:
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// console.log("C");

// 🧠 Execution:
// console.log("A") → Prints "A" immediately.
// setTimeout(...) → Goes to Web API (browser waits in background).
// console.log("C") → Prints "C" immediately.
// After main thread is free, callback "B" is queued and executed.

// 🔄 How They Appear Parallel
// fetch("https://api.com/data")
//   .then(res => res.json())
//   .then(data => console.log("Done"));

// console.log("Loading...");
// fetch() → Goes to Web API (browser handles network)
// Meanwhile, main thread is free to run console.log("Loading...")
// When data comes, the .then() callback is put in the microtask queue
// Event loop pushes that back into main thread when it’s free


// 🧠 So… "Parallel" Illusion
// JavaScript:
// Doesn't run code truly in parallel
// BUT it delegates time-consuming things (network, timer, etc.) to browser's Web APIs
// Main thread keeps running
// Once async task finishes, the callback is queued, and when main thread is free, it's executed


// Keep In Mind: jo bhi asynchronous task hota hian use async-await ya then-catch ke through handle karte hain.
// Remember setTimeout is not a async function, it is a web api function that will be executed after the specified time.


// JavaScript Asynchronous Execution Example
// async function greet() {
//   return "Hello, Sameer!";
// }
// greet().then((msg)=> console.log(msg));   // Output: Hello, Sameer!

// JavaScript Asynchronous Execution Example with await
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

// Main Thread:
//  ┌──────────────────────────────────────────────────────────────────────────┐
//  │ a()         → console.log(1)                                             │
//  │               ↓                                                          │
//  │ await b()     → console.log(3)                                           │
//  │                 ↓                                                        │
//  │               c() → console.log(5) → await d() → console.log(7)          │
//  │                                     ↓                                    │
//  │               console.log(4) → console.log(9)                            │
//  │ a() paused...                                                            │
//  │ console.log(8)                                                           │
//  └──────────────────────────────────────────────────────────────────────────┘

// Microtask Queue (after all above is done):
//  ┌───────────────────────-┐
//  │ console.log(6) (from c)│
//  │ console.log(2) (from a)│
//  └───────────────────────-┘

// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms)); // Returns a promise that resolves after `2` seconds
// }

// async function sayHi() {
//   console.log("Before wait");
//   await wait(2000); // Waits for 2 seconds
//   console.log("After 2 seconds"); // because of await, this will execute from the microtask queue
// }

// sayHi();

// ✅ Realistic Use Case (with fetch)
// async function getUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   console.log(data.name);
// }
// getUser();

// | Keyword | Meaning                            |
// | ------- | ---------------------------------- |
// | `async` | Marks function to return a Promise | thats why it goes to microtask queue
// | `await` | Waits for a Promise to resolve     |


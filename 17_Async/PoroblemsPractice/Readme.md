# Sab Kuchh Pahel call stack me phir call stack se ya toh  (web api se task queue me) ya (microtask queue me ata hai) phir event loop se call stack me ata hai...... (pahle micro task queue completely execute hota hain phir, )


Promise . resolve()    // this create a new promise object that instantly resolve
. then(()=> console.log(1));    //this line first come to call stack and then so promise is already resolved
                                 // so the handler will immediately move this promise to microtask queue.

setTimeout(()=>console. log(2) ,10);  // this will first come to call stack which is responsible for 
                                      //initiating timer it will immediately goes to web api and after
                                      //  10ms it will come to task queue.

queueMicrotask(()=>{   // this will first come to call stack and then it will move to microtask queue
    console. log (3);
    queueMicrotask(()=>{
        console.log(5);
    })
});
    
console. log(4); // and then it will come to call stack and print 4.

// output: (4), then micro queue will execute completely(1,3,5), and then task queue will execute completely(2).
----------------------------------------------------------------------------------------------------------------

# Async & Sync
- Js is a single-threaded language. I has only one thread which is known as the main thread.
  The main thread is responsible for executing the code in the order it is written.
  If the main thread is busy executing a task, it cannot execute other tasks until the current task is completed.
  This can lead to performance issues and slow down the execution of the code.
- To overcome this issue, JavaScript introduced the concept of asynchronous programming.
  Asynchronous programming allows the main thread to continue executing other tasks while waiting for a task to complete.
  This can improve the performance of the code and make it more responsive.
- JavaScript provides several ways to perform asynchronous programming, including callbacks, promises, and    
  async/await.

-------------------------------------------------------------------------------------------------------------
# Question: 
console.log("Start");  

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

# Execution Flow
1. Main thread executes all synchronous code first.

2. Async code (e.g., setTimeout, fetch, Promise) is sent to Web APIs (browser handles them).

3. Once the main thread is empty, the Event Loop moves async tasks back to the Call Stack.

# SOLUTION: 
"Start" is printed (synchronous).
setTimeout() is sent to Web APIs.
Promise.resolve().then(...) is sent to the Microtask Queue (higher priority than setTimeout).
"End" is printed (synchronous).
"Promise" is printed (Microtask Queue executes before setTimeout).
"Timeout" is printed (Event Loop moves it back last).

- Suno kya hoga iss program me sbse pahle execution context create hoga phir..
1. First Line --> console.log("Start"); jo ki sync hoga toh ise main thread abhi execute kardega.
2. Second Line --> setTimeout; jo ki async hoga toh ye call stack se  web api me chala jayega
                   loop.
3. Third Line --> Promise; jo ki async hoga toh ise microtask queue me daal diya jayega.
4. Fourth Line --> console.log("End"); jo ki sync hoga toh ise main thread abhi execute kardega.
                   So abb sync code execute ho chuka hoga toh abb async code execute hoga based on 
                   Priority(Microtask Queue (higher priority than setTimeout))

# Question:
async function a() {
    console.log(1);
    await b();
    console.log(2);
}
async function b() {
    console.log(3);
    await c();
    console.log(4);
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

# SOLUTION: 
kaam ki baat : abb tum soch rahe ho ki first line call hua jo ki a(); hai toh ye toh async hain matlab ise main thread execute nahi kareg aur event loop ki help se web api me daldega.
-- but but but -- aisa nahi hoga kyunki agar koi asyc funtion(user defined) hain toh vo bhi synchrone hi 
                  execute hoga jab tak await na mile..
                  jaise hi await milega toh vo function(in which await statement is present) move ho jayega
                  microtask queue me.

1. First line --> a(); jo ki async tabhi execute hoga kyunki ye async function user defined hian tab tak jab    
    tak await na mil jaye..so abb a(); call hoga toh a() ki execution context create hoga.
    
    1. isme first line --> console.log(1); jo ki sync hoga toh main thread ise abhi execute kardega.
    2. await b(); --> abb await encounter hua toh abb a() ko microtask queue me daldega; b() ki execution    
        context create hoga.
        1. isme first line --> console.log(3); jo ki sync hoga toh main thread ise abhi execute kardega.
        2. await c(); --> abb await encounter hua toh abb b() ko microtask queue me daldega;
            c() ki execution context create hoga.
            1. isme first line --> console.log(5); jo ki sync hoga toh main thread ise abhi execute kardega.
            2. await d(); --> abb await encounter hua toh abb c() ko microtask queue me daldega.
                    
--> kyunki abb sare asyc funtions abb microtask queue me dal chuke hain toh. main thread check karega ki kya koi sync code bacha toh nahi toh  microtask queue ke code execute hone pahle vo execute hoga.

last line --> console.log(8); jo ki sync hoga toh main thread ise abhi execute kardega.

--> and then next microtask queue se call stack me ayega and then rest async code will execute sequentially.

link : https://www.youtube.com/watch?v=eiC58R16hb8  (concept)
 

---------------------------------------------------------------------------------------------------------------
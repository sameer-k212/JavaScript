// Browser Environment (Client-Side JS) : 

// In a browser, setTimeout is a method of the window object (window.setTimeout), which provides access to the Web APIs.


// Node.js Environment (Server-Side JS):

// In Node.js, there is no window object, but Node.js provides its own Timer API, which includes setTimeout.
// The setTimeout function in Node.js is not part of the global window but is instead part of Node.js’s timers module.
// You can call setTimeout directly because it is available as a global function in both environments.

setTimeout(function(){
    console.log("Hello World");
},5000);
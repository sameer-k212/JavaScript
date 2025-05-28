Promise . resolve()    // this create a new promise object that instantly resolve
. then(()=> console.log(1));    //this line first come to call stack and then so promise is already resolved
                                 // so the handler will immediately move this promise to microtask queue.

// SetTimeout is not a async function, it is a web api function that will be executed after the specified time.
setTimeout(()=>console. log(2) ,10);  // this will first come to call stack which is responsible for 
                                      // initiating timer it will immediately goes to web api and after
                                      //  10ms it will come to task queue.

queueMicrotask(()=>{   // this will first come to call stack and then it will move to microtask queue
    console. log (3);
    queueMicrotask(()=>{
        console.log(5);
    })
});
    
console. log(4); // and then it will come to call stack and print 4.

// output: (4), then micro queue will execute completely(1,3,5), and then task queue will execute completely(2).
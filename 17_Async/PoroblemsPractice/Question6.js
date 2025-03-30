fetch()
  .then(() => console.log("2. Fetch then"));

Promise.resolve()
 .then(() => console.log("3. Promise"));

setTimeout(() => console.log("4. setTimeout"), 0);
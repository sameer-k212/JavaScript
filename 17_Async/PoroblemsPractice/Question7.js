console.log("1. Start");

fetch()
  .then(() => console.log("2. Fetch then"))
  .catch(() => console.log("2. Fetch catch"));

Promise.resolve()
 .then(() => console.log("3. Promise"));

setTimeout(() => console.log("4. setTimeout"), 0);

console.log("5. End");
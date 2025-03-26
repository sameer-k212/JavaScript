async function fetch() {
    return new Promise((resolve) => {
        resolve("fetched"); 
    });
}

async function exp() {
    console.log("Start");
    await fetch();
    console.log("data");
    console.log("End");
}

exp();
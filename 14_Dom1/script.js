// // document and window are the part of browser object not strictly javascript.
// // these objects are provide by the browser environment that allow javaScript to interact with 
// // the current loaded pages and its window propertiese respectively.

console.dir(document);
console.dir(document.body);

console.dir(document.html);
console.dir(document.head);

console.dir(document.title);

console.dir(document.URL);

console.dir(document.links);

console.log(document.head);
console.log(document.html);

console.log(document.body.childNodes);
document.body.childNodes[1].style.backgroundColor = "yellow";


// Select element by id
let para = document.getElementById("para1");
console.log(para);
console.dir(para);

// // select elemnet by class name
let headings = document.getElementsByClassName("heading");
console.log(headings);
console.dir(headings);


// // select element by tag name
let heading = document.getElementsByTagName("h2");
console.log(heading);



// // best way to use html element is querySelector : using querry selector we can 
// // pic(directly using tag name, class name, id name) any html element.
// selcecting id
let id1 =  document.querySelector("#idi"); // first element 
console.log(id1.tagName);
console.log(id1);
console.dir(id1);

// selecting class
let parag = document.querySelectorAll(".para1"); // all element
console.dir(parag);

// selecting tag
let tag = document.querySelectorAll("p"); // all element
console.log(tag);

let tag1 = document.querySelector("p"); // all element
console.log(tag1.tagName);

// dom tree
console.dir(document.body.firstChild);
console.dir(document.body.lastChild);

console.dir(document.body.childNodes);
console.dir(document.body.childNodes[1]);

console.dir(document.body.localName);

console.dir(document.body.firstElementChild);
console.dir(document.body.lastElementChild);

console.dir(document.body.children);
console.dir(document.querySelector("div").children);
console.dir(document.querySelector("div").childNodes);


//Dom Menupulation properties
console.dir(document.querySelector("div").innerHTML);
console.dir(document.querySelector("div").textContent);
console.dir(document.querySelector("div").innerText);
console.dir(document.querySelector("div").outerHTML);


// working on div
let divs = document.querySelectorAll("div");
console.log(divs);
console.log(divs[0].childNodes);
console.log(divs[1].childNodes);

divs[0].innerText = "hello Sameer How are You";
divs[0].innerText = "Hello Kajal How are You";

// you can iterate over for loop also 
let idx= 0;
for(div of divs){
    div.innerText = `Hello Kajal How are You ${idx}`;
    idx++;
}


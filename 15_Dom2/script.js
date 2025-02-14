// DOM Attribute..
//1. getAttribute()
//2. setAttribute()
//3. removeAttribute()

// 1. getAttribute()
const div = document.querySelector('div');   
console.log(div.getAttribute('id'));
console.log(div.getAttribute('class'));
console.log(div.getAttribute('type'));
console.log("Before changing class...");
console.log(div.outerHTML);

// 2. setAttribute()
div.setAttribute('class', 'newBox');
console.log("After changin class..");
console.log(div.outerHTML);
console.log(div.getAttribute('class'));

// 3. removeAttribute()
console.log(div.getAttribute('class'));
div.removeAttribute('class');
console.log(div.getAttribute('class'));

// again setting atribute to div.
div.setAttribute('id', 'boxId');
console.log(div.getAttribute('id'));

// 4. classList
// a. add() 
// b. remove()
// c. toggle()
// d. contains()

// 1. add()
div.classList.add('newClass');
console.log(div.getAttribute("class"));

// 2. remove()
div.classList.remove('newClass');
console.log(div.getAttribute("class")); // it will return '';

// 3. toggle() : if class is there it will remove it and if class is not there it will add it.
div.classList.toggle('newClass');
console.log(div.getAttribute("class"));

// 4. contains() : it will check there is class with that name present or not ??
console.log(div.classList.contains('newClass'));

// 5. style
// 1. style.propertyName
// 2. style.cssText

// 1. style.propertyName
div.style.backgroundColor = 'red';

// 2. style.cssText
div.style.cssText = 'background-color: green; color: white;';

// 6. innerHTML
// 1. innerHTML
// 2. innerText

// 1. innerHTML
console.log(div.innerHTML);

// 2. innerText
console.log(div.innerText);

// 7. createElement()
const newDiv = document.createElement('div');
newDiv.innerText = 'This is a new div';
newDiv.style.backgroundColor = 'red';
newDiv.style.color = 'white';
newDiv.style.padding = '20px';
newDiv.style.margin = '20px';
newDiv.style.border = '1px solid black';
document.body.appendChild(newDiv);
document.body.prepend(newDiv);
document.body.before(newDiv);
document.body.after(newDiv);
// document.body.replaceChild(newDiv, div);
// document.body.removeChild(div);


// 14. cloneNode()
const cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);


// 15. querySelectorAll()
const divs9 = document.querySelectorAll('div');
console.log(divs9);

// 16. querySelector()
let div6 = document.querySelector('div');
console.log(div6);


// 17. getElementById() 
let div5 = document.getElementById('boxId');
console.log(div5);

// 18. getElementsByClassName()
const divs0 = document.getElementsByClassName('.newBox');
console.log(divs0);

// 19. getElementsByTagName()
const divs1 = document.getElementsByTagName('div');
console.log(divs1);

// 20. getElementsByName()
const divs2 = document.getElementsByName('name1');
console.log(divs2);

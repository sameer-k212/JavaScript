const para = document.querySelectorAll('p')[1];
para.style.border = '2px solid black';
para.setAttribute('class','spclPara')

const img = document.querySelector('img')
img.setAttribute('src','i3.jpg')
img.style.width = '50vw';
img.style.height = '50vh';
console.log(img.getAttribute('src'));


const para2 = document.querySelectorAll('p')[3];
para2.classList.add('one');
para2.classList.add('two');
para2.classList.remove('two');
para2.classList.toggle('two');
para2.classList.toggle('two');


const spclCity = document.querySelector('#spclCity')
spclCity.style.border = '2px solid green';
spclCity.previousElementSibling.style.border = '2px solid yellow';
spclCity.nextElementSibling.style.border = '2px solid violet';

spclCity.parentElement.style.border = '3px solid black';
const ul = spclCity.parentElement;
console.log(ul.children[1]);
ul.children[1].style.color = "blue";

const x = document.createElement('li');
x.innerHTML = 'GOA';
console.log(x);
ul.append(x); //in append we append anythin like string or whatever we want
ul.appendChild(x); //in this we append only supported things lik =e in this onmly li
ul.append('aefew');

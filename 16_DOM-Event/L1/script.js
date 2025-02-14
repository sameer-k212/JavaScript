const head = document.querySelectorAll('h1')[0]

console.log(head);

head.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.style.color = 'red';
})


head.addEventListener('copy',(e)=>{
    console.log(e.target);
    e.target.innerText="cheating kar ta hai mck"
})
head.addEventListener('mouseleave',(e)=>{
    console.log(e.target);
    e.target.innerText="radha radha"
})

const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    const body = document.querySelector('body');
    body.classList.toggle('dark');
})
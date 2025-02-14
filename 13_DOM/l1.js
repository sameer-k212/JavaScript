// const head=document.getElementById('head')
const head=document.querySelector('#head')

// console.log(head)

head.style.color='red'
head.style.border='2px solid green'
head.style.backgroundColor='aqua'
head.style.position='relative'
head.style.width='60vw'

// const para=document.getElementsByTagName('p')
const para=document.querySelectorAll('p')
// console.log(para)
// para[0].style.border='3px solid yellow'
// para[1].style.border='3px solid yellow'

for(let p of para){
    p.style.border='3px solid yellow';
}

// const spclPara=document.getElementsByClassName('spclPara')
const spclPara=document.querySelectorAll('.wspclPara')
console.log(spclPara)
for(let par of spclPara){
    par.style.backgroundColor='blue'
    par.style.color='yellow'
}
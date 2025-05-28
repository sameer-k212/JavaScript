let modebtn = document.querySelector('#mode');
let currentMode = "light";

modebtn.addEventListener('click',()=>{
    currentMode = currentMode === 'light' ? 'dark' : 'light';

    if(currentMode === 'light'){
        // document.querySelector('body').style.backgroundColor = 'black'; or
        document.querySelector('body').classList.add('dark');
        document.querySelector('body').classList.remove('light');
    }else{
        // document.querySelector('body').style.backgroundColor = 'white'; or
        document.querySelector('body').classList.add('light');
        document.querySelector('body').classList.remove('dark');

    }
    console.log(currentMode);
})



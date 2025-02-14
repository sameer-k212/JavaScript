let bgTimer = function(){

        document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.querySelector('#start').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log("bg Change started");
}
let setTimer;
document.querySelector('#start').addEventListener('click',function(){
    if(!setTimer)
    setTimer = setInterval(bgTimer,1000);
});
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(setTimer);
    console.log("bg Change stopped");
});
document.querySelector('#end').addEventListener('click',function(){
    clearInterval(setTimer);
    setTimer = null;
    document.body.style.backgroundColor = "#ffffff"
    document.querySelector('#start').style.backgroundColor = "#ffffff"
    console.log("bg Change ended");
});
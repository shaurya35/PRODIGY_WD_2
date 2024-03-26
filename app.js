let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let seconds = 0;
let tens = 0;

let interval;

let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");

start.addEventListener("click", () => {
    interval = setInterval(startTimer, 10);
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
});

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0'+ tens;
    }
    if(tens >= 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
}



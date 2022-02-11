// variables
const prompt = require('prompt-sync')();
let time;
let minutes;
let seconds;
let IntervalCountDown

// function countDown
function countDown(){
    time = time - 1
    minutes = parseInt(time / 60) 
    seconds = parseInt(time % 60)
    if(seconds < 10){
        seconds = (`0`+`${seconds}`)
    }
    console.log(`${minutes}:${seconds}`)
    if(time <= 0)(
        clearInterval(IntervalCountDown)
    )
}

// function firstTime
function firstTime(){
    minutes = parseInt(time / 60) 
    seconds = parseInt(time % 60)
    if(seconds < 10){
        seconds = (`0`+`${seconds}`)
    }
    console.log(`${minutes}:${seconds}`)
}

// function CounterCountDown
function CounterCountDown(){
    IntervalCountDown = setInterval(countDown, 1000);
}

// Counter
do{
time = prompt('Podaj w sekundach liczbe od ktorej chcesz zaczac odliczanie: ')
if(time >= 3600){
    console.log('\nLiczba musi być mniejsza niż jedna godzina. \n')
}else if(time <= 0){
    console.log('Podaj większą liczbę. ');
}
}while(time <= 0 || time >= 3600)


console.log('\nZaczynam odliczanie.')
time = parseInt(time)
setTimeout(firstTime, 1000)
setTimeout(CounterCountDown, 1000)
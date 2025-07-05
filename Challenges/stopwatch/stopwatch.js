const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const milliseconds = document.querySelector(".milliseconds");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

const timeDisplay = [milliseconds, seconds, minutes, hours];

/**
 * @my_algo
 * 1. START, TO START TIME.
 *      IF isRunning == False:
 *      a). Create a timestamp of startTime
 * 2. 
 */

function start() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    for (let each of timeDisplay){
        each.textContent = "00";
    }
}

function update() {
    const currenTime = Date.now();
    elapsedTime = currenTime - startTime; 
    // elapsedTime is in seconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);

    const times = [milliseconds, seconds, minutes, hours];

    // timeDisplay.map((item, index) => {
    //     item.textContent = times[index];
    // })
    timeDisplay.forEach((item, index) => {
        item.textContent = times[index];
    })
}

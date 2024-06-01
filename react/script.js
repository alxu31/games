const display = document.getElementById('display');
const flash = document.getElementById('flash');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let timerRand = null;
let startRand = 0;
let elapsedRand = 0;
let secondsRand = 0;
let checkInterval = null;

function startTest() {
    // Reset
    resetTest();
    // Wait random amount of time
    console.log('Start');
    const rand = Math.floor(Math.random()*15);
    if (rand < secondsRand) {
        // For some reason code breaks with start button spamming, so this conditional should fix
        resetRand();
        resetTest();
    }
    console.log(`rand: ${rand}`);

    startRand = Date.now() - elapsedRand;

    // Reset intervals (fixes time breaking if start spammed)
    if (timerRand !== null) {
        clearInterval(timerRand);
    }

    timerRand = setInterval(updateRand, 1000);

    if (checkInterval !== null) {
        clearInterval(checkInterval);
    }

    checkInterval = setInterval(function() {
        console.log(`time: ${secondsRand}`);
        if (secondsRand === rand){
            resetRand();
            // Flash box red, start timer
            console.log('random time over')
            flash.style.background = "red";
            if (!isRunning) {
                startTime = Date.now() - elapsedTime;
                timer = setInterval(updateTimer, 1);
                isRunning = true;
            }
        }
    }, 100);
}

function stopTest() {
    // Stop timer
    if (isRunning) {
        console.log('Stop');
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
    else {
        display.textContent = "Too Early!";
        resetRand();
    }
    // Reset timer
}

function updateTimer() {
    // Update timer
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let seconds = Math.floor(elapsedTime / 100 % 60 / 10);
    let milliseconds = Math.floor(elapsedTime % 1000);
    if (seconds === 5) {
        // After 5 sec, too slow
        console.log('Too Slow!');
        window.alert('Too Slow!');
        stopTest();
        resetTest();
    }

    else {
        seconds = String(seconds).padStart("0");
        milliseconds = String(milliseconds).padStart(3, "0");
        display.textContent = `${seconds}${milliseconds}`;
    }
}

function resetTest() {
    // Reset
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '0000';
    flash.style.background = "white";
}

function updateRand() {
    // Update random timer
    const currentRand = Date.now();
    elapsedRand = currentRand - startRand;

    secondsRand = Math.floor(elapsedRand / 1000 % 60);
}

function resetRand() {
    // Reset random rimer
    secondsRand = 0;
    clearInterval(timerRand);
    startRand = 0;
    elapsedRand = 0;
}
let num;
let response = document.getElementById('response');
let count = document.getElementById('count');
let rand;
let guesses;

// Starts on page load
document.addEventListener('DOMContentLoaded', start(), false);

function start() {
    // Resets everything
    response.textContent = 'Higher/Lower';
    count.textContent = '7 Guesses';
    guesses = 7;
    rand = Math.floor(Math.random() * 100 + 1);
    // console.log(`rand: ${rand}`); cheats lol
}

function guess() {
    // Takes num from input and compares it to the random number
    num = parseInt(document.getElementById('num').value, 10);
    console.log(num);
    if (num === rand) {
        window.alert(`You Win! You had ${guesses-1} guesses left`);
        console.log('won');
        start();
    }
    else {
        // Still has guesses (checked last iteration)
        guesses -= 1;
        count.textContent = `${guesses} Guesses`;

        // Higher lower response
        if (num > rand) {
            response.textContent = 'Lower';
        }
        else {
            response.textContent = 'Higher';
        }
        
        if (guesses === 0) {
            // Out of guesses
            setTimeout(function() {
                // Slight delay so page can update
                window.alert(`You Lost! The number was ${rand}`);
                console.log('lost');
                start();
            }, 200);
        }
    }
}





// To some degree hardcoded, but my js isn't good enough to do it with 2d arrays (shoulda stuck to python)
// Don't look at console lol
let temp;
let legal = [];

let b16 = document.getElementById('b16');

let change;
let empDIV;
let switchDIV;

let base;
let p1;
let p2;
let p3;
let p4;

let correct;
let moveCount;

let backCount;
let randTile;

let ignore = true;
document.addEventListener('DOMContentLoaded', startPuzzle(), false);

function startPuzzle() {
    // Backwords moves (I'm too lazy to randomly generate then check)
    // Change num for more mix
    backCount = Math.floor(Math.random() * 10000 + 1);
    for (let i = 0; i < backCount; i++) {
        // Ig randomly generate move, if legal, execute?
        randTile = `b${Math.floor((Math.random()*16)+1)}`;
        moveTile(randTile, ignore);
    }
    moveCount = 0;
}


function moveTile(tile, ig) {
    // Check if move is legal, then execute it if it is
    change = document.getElementById(tile);
    switchDIV = change.parentElement;
    
    // If tile is legal, return true, else false (stops moveTile function)
    checkMove();
    if (legal.includes(switchDIV)) {
        swapTile();
        if (!ig) {
            checkWin();
        }
    }

    // Updates legal move list
    checkMove();
    // Adds legals to class leg
    for (let i = 0; i < 4; i++) {
        try {
            legal[i].className = "leg";
        }
        catch(error) {
            continue;
        }
    }
    // Removes legal class from not legal
    for (let i = 1; i < 17; i++) {
        if (!legal.includes(document.getElementById(`s${i}`))) {
            document.getElementById(`s${i}`).className = "";
        }
    }
}

function swapTile() {
    // Swap empty tile and number clicked
    empDIV.appendChild(change);
    switchDIV.appendChild(b16);
    moveCount += 1;
}

function checkMove() {
    // Check if the move is valid
    // Clear legal, then add to all legal moves (and add legal class)
    empDIV = b16.parentElement;
    legal = [];
    // Possible legal DIVs
    base = parseInt(empDIV.id.replace(`s`,``),10);
    p1 = document.getElementById(`s${base+4}`);
    p2 = document.getElementById(`s${base-4}`);
    p3 = null;
    p4 = null;
    // If start column
    if (base % 4 === 1) {
        p3 = document.getElementById(`s${base+1}`);
    }
    // If end column
    else if (base % 4 === 0) {
        p4 = document.getElementById(`s${base-1}`);
    }
    // If second or third column
    else {
        p3 = document.getElementById(`s${base+1}`);
        p4 = document.getElementById(`s${base-1}`);
    }
    temp = [p1,p2,p3,p4];
    for (let i = 0; i < 4; i++) {
        try {
            legal.push(temp[i]);
        }
        catch(error) {
            continue;
        }
    }
}

function checkWin() {
    // Check if the user has won
    correct = 0;
    for (let i = 1; i < 17; i++) {
        if (document.getElementById(`b${i}`) === document.getElementById(`s${i}`).children[0]) {
            correct += 1;
        }
    }
    if (correct === 16) {
        // Slight Delay so tile actually moves
        setTimeout(function() {
            console.log(`You Won! Moves: ${moveCount}`);
            alert(`You Won! Moves: ${moveCount}`);
            startPuzzle();
        }, 200);
    }
}


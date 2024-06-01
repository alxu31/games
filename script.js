// Randomising colour of title
let spans = document.getElementsByClassName('rand');

let buttons = document.getElementsByTagName('button');

document.addEventListener('DOMContentLoaded', () => {newTitle(), newBgs()}, false);

let r, g, b, hsp;

function newTitle() {
    // Creates a new set of colours
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = createColour();
    }
}

function newBgs() {
    for (let i = 0; i < buttons.length; i++) {
        newColour = createColour();
        buttons[i].style.background = newColour;
        if (lightDark(newColour) === 0) {
            // Colour is light
            buttons[i].style.color = 'black';
            console.log('light');
        }
        else {
            // Colour is dark
            buttons[i].style.color = 'white';
            console.log('dark');
        }
    }
}

function createColour() {
    // Creates a random hex
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}



function lightDark(colour) {
    // Check whether the colour is closer to black or white
    // From https://gist.github.com/krabs-github/ec56e4f1c12cddf86ae9c551aa9d9e04
    colour = +("0x" + colour.slice(1).replace( 
        colour.length < 5 && /./g, '$&$&'
    )
            );

    r = colour >> 16;
    g = colour >> 8 & 255;
    b = colour & 255;
  
    // HSP equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  
    // Using the HSP value, determine whether the colour is light or dark
    if (hsp>127.5) {
  
      return 0;
    } 
    else {
  
      return 1;
    }
}



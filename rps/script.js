const options = ['👊','🤚','✌️'];

function play(input) {
    const player = document.getElementById('player');
    const computer = document.getElementById('computer');
    const winner = document.getElementById('winner');

    const rand = Math.floor(Math.random()*options.length);
    const played = options[input]
    const comp = options[rand];

    player.textContent = `Player: ${played}`;
    computer.textContent = `Computer: ${comp}`;
    if (rand == input) {
        winner.textContent = `Winner: Noone`;
    }
    else {
        // Rock
        if (input == 0) {
            if (rand == 1) {
                winner.textContent = `Winner: Computer`;
            }
            else {
                winner.textContent = `Winner: Player`;
            }
        }
        
        // Paper
        else if (input == 1) {
            if (rand == 2) {
                winner.textContent = `Winner: Computer`;
            }
            else {
                winner.textContent = `Winner: Player`;
            }
        }

        // Scissors
        else if (input == 2) {
            if (rand == 0) {
                winner.textContent = `Winner: Computer`;
            }
            else {
                winner.textContent = `Winner: Player`;
            }
        }
        
    }
}
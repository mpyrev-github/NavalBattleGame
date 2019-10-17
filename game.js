let userArea = document.getElementById('userArea');
let aiArea = document.getElementById('aiArea');
Create_Container(userArea,"grey");
Create_Container(aiArea, "lightseagreen");
function Create_Container(div, color) {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            let inner_Div = document.createElement('div');
            inner_Div.className='pos';
            inner_Div.id = 'num'+(i+10*j+1);
            inner_Div.style.padding = '20px';
            inner_Div.style.display = 'inline-block';
            inner_Div.style.background = color;
            inner_Div.style.border = 'medium outset silver';
            div.appendChild(inner_Div);
        }
    }
}

/* OLD GAME
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (Enter a number 0-6):");
    if (guess < 0 || guess > 6){
        alert ("Please, enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess ==location2 || guess ==location3){
            alert("HIT!");
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
                    "which means your shooting accuracy was " + (3/guesses);
alert(stats);
*/
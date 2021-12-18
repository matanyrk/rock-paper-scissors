let randomNumber = Math.floor(Math.random()*100);
let loseMessage = "Sorry, you lost! Computer receives 1 point";
let winMessage = "Congratulations, you won! You get 1 point";
let drawMessage = "It's a draw!";
let rockMessage = 'Computer chose Rock';
let paperMessage = 'Computer chose Paper';
let scissorsMessage = 'Computer chose Scissors';

const submitSelection = document.getElementById('.submitSelection');

function getInputValue() {
let lowerCase = document.getElementById('myInput').value;
let playerSelection = lowerCase.toLowerCase();
console.log(playerSelection);

}

function computerPlay (randomNumber) {
    if (randomNumber < 33) {
return (rock);
    }
    else if (randomNumber < 66){
        return (paper);
    }
    else return (scissors);
}
console.log(randomNumber);

function playerResults (playerSelection) {
    if (playerSelection="rock") {
        return (rock);
    } 
    else if (playerSelection="paper") {
        return (paper);
    }
    else if (playerSelection="scissors") {
        return (scissors);
    }

}
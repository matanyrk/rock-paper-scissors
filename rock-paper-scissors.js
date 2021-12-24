let randomNumber = Math.random();
let loseMessage = "Sorry, you lost! Computer receives 1 point";
let winMessage = "Congratulations, you won! You get 1 point";
let drawMessage = "It's a draw!";
let rockMessage = 'Computer chose Rock';
let paperMessage = 'Computer chose Paper';
let scissorsMessage = 'Computer chose Scissors';

const submitSelection = document.getElementById('.submitSelection');

function getInputValue(){
let lowerCase = document.getElementById('myInput').value;
let playerSelection = lowerCase.toLowerCase();
}
console.log(getInputValue());

let computerPlay = Math.random();
console.log(computerPlay);
if (computerPlay < 0.34) {
    computerPlay = "rock";
}
else if (computerPlay < 0.67) {
    computerPlay = "paper";
}
else if (computerPlay < 0.99) {
    computerPlay = "scissors";
}


console.log(computerPlay);

function playerResults (playerSelection) {
    if (playerSelection==="rock") {
        return "rock";
    } 
    else if (playerSelection==="paper") {
        return "paper";
    }
    else if (playerSelection==="scissors") {
        return "scissors";
    }
    else return ("Invalid input. Please try again");
}

console.log(playerResults());
function gamePlay (playerResults, computerPlay){
    if (playerResults === computerPlay) {
        return (drawMessage);
    } else if (playerResults === rock) {
        if (computerPlay === scissors) { 
            return "Rock beats scissors! You win!";
        }
        else return "Paper beats rock! You lose";
    }
    else if (playerResults === paper) {
        if (computerPlay === rock) {
            return "Paper beats rock! You win!";
        }
        else return "Scissors beats paper! You lose";
    }
    else if (playerResults === scissors) {
        if (computerPlay === paper) {
            return "Scissors beats paper! You win!";
        }
        else return "Rock beats scissors! You lose";
    }
}
console.log(gamePlay());




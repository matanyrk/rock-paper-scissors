const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;
let tieScore = 0;
let gameScore = pScore + cScore ;
let pRounds = 0;
let cRounds = 0;
options.forEach(option=>{
    option.addEventListener("click" , function(){
        
        
        let gameScore = pScore + cScore + tieScore;
        gameScore ++;
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
// computer choice
        const cInput = cOptions[Math.floor(Math.random()* 3 ) ];
        console.log(cInput);

        compareInputs(pInput, cInput);

// game logic
function compareInputs (pInput, cInput){

    const currentMatch = '${pInput} vs ${cInput}';
    // tie check
        if (pInput === cInput){
            alert ('It\'s a tie!');
            tieScore ++;
        }
    // rock win check
    else if (pInput === 'Rock') {
        if (cInput === 'Scissors') {
            alert (`You win! ${pInput} beats ${cInput}`)
            pScore ++;
        } else {
            alert (`You lost. ${cInput} beats ${pInput}`);
            cScore ++;
        }
    } 
    // paper win check
    else if (pInput === 'Paper'){
        if (cInput === 'Rock'){
            alert (`You win! ${pInput} beats ${cInput}`);
            pScore ++;
        } else {
            alert (`You lost. ${cInput} beats ${pInput}`);
            cScore ++;
        }
    }
    //scissors win check
    else if (pInput === 'Scissors'){
        if (cInput === 'Paper'){
            alert (`You win! ${pInput} beats ${cInput}`);
            pScore++;
        } else {
            alert (`You lost. ${cInput} beats ${pInput}`);
            cScore ++;
        }
    }
}

// reset score after player or cpu wins 5 games
if (pScore === 5) {
    alert ('Congratulations buddy! You won!');
    pScore = 0;
    cScore = 0;
    tieScore = 0;
    gameScore = 0;
    pRounds ++;
}

if (cScore === 5) {
    alert ('The CPU won! Try again');
    pScore = 0;
    cScore = 0;
    tieScore = 0;
    gameScore = 0;
    cRounds ++;
}
    
    

    document.querySelector("#gameScore").textContent = gameScore;
    localStorage.setItem('gameScore', gameScore);
    document.querySelector("#pScore").textContent = pScore;
    localStorage.setItem('pScore', pScore);
    document.querySelector("#cScore").textContent = cScore;
    localStorage.setItem('cScore', cScore);
    document.querySelector("#tieScore").textContent = tieScore;
    localStorage.setItem('tieScore', tieScore);
    document.querySelector("#pRounds").textContent = pRounds;
    localStorage.setItem('pRounds', pRounds);
    document.querySelector("#cRounds").textContent = cRounds;
    localStorage.setItem('cScore', cScore);

}
    )







})

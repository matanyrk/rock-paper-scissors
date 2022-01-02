const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;
let tieScore = 0;
let gameScore = pScore + cScore ;
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
            alert ('It\'s a tie');
            tieScore ++;
        }
    // rock win check
    else if (pInput === 'Rock') {
        if (cInput === 'Scissors') {
            alert ('You win!');
            pScore ++;
        } else {
            alert ('You lost');
            cScore ++;
        }
    } 
    // paper win check
    else if (pInput === 'Paper'){
        if (cInput === 'Rock'){
            alert ('You win!');
            pScore ++;
        } else {
            alert ('You lost');
            cScore ++;
        }
    }
    //scissors win check
    else if (pInput === 'Scissors'){
        if (cInput === 'Paper'){
            alert ('You win!');
            pScore++;
        } else {
            alert ('You lost');
            cScore ++;
        }
    }
    document.querySelector("#gameScore").textContent = gameScore;
    localStorage.setItem('gameScore', gameScore);
    document.querySelector("#pScore").textContent = pScore;
    localStorage.setItem('pScore', pScore);
    document.querySelector("#cScore").textContent = cScore;
    localStorage.setItem('cScore', cScore);
    document.querySelector("#tieScore").textContent = tieScore;
    localStorage.setItem('tieScore', tieScore);
    }
    console.log(cScore);
    console.log(pScore);
    console.log(gameScore);
    
    })
}

)






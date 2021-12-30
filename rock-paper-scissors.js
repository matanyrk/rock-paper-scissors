const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;
let gameScore = pScore + cScore ;
options.forEach(option=>{
    option.addEventListener("click" , function(){
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
// computer choice
        const cInput = cOptions[Math.floor(Math.random()* 3 ) ];
        console.log(cInput);

        compareInputs(pInput, cInput);

        


function compareInputs (pInput, cInput){
   

    const currentMatch = '${pInput} vs ${cInput}';
    // tie check
        if (pInput === cInput){
            alert ('${currentMatch} is a tie!');
            return;
        }
    // rock win check
    else if (pInput === 'Rock') {
        if (cInput === 'Scissors') {
            alert ('${currentMatch} = You win!');
            pScore ++;
        } else {
            alert ('${currentMatch} = You lost');
            cScore ++;
        }
    } 
    // paper win check
    else if (pInput === 'Paper'){
        if (cInput === 'Rock'){
            alert ('${currentMatch} = You win!');
            pScore ++;
        } else {
            alert ('${currentMatch} = You lost');
            cScore ++;
        }
    }
    //scissors win check
    else if (pInput === 'Scissors'){
        if (cInput === 'Paper'){
            alert ('${currentMatch} = You win!');
            pScore++;
        } else {
            alert ('${currentMatch} = You lost');
            cScore ++;
        }
    }
    }
    console.log(cScore);
    console.log(pScore);
    console.log(gameScore);
    
    })
}

)


co



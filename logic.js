function getComputerChoice() {
        
    let choiceArray = [
                    'Rock',
                    'Paper',
                    'Scissors'
                 ],
        computerChoice = choiceArray[Math.floor(Math.random()*3)];
        return computerChoice;
    }

function playRound() {
    
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();
    
    let win = "You won this round!",
            loss = "Oh no, you lost this round!",
            tie = "You tied this round!",
            playerArray = playerSelection.split(),
            computerArray = computerSelection.split(),
            result;

        if (playerSelection === "Rock" && computerSelection === "Paper" || 
            playerSelection === "Paper" && computerSelection === "Scissors" || 
            playerSelection === "Scissors" && computerSelection === "Rock" ){
                
            result = loss;
            
            } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" || 
            playerSelection === "Scissors" && computerSelection === "Paper"){
                
            result = win;
            
            } else if (playerArray.length == computerArray.length){
            result = tie;       
            }
    const container = document.querySelector('.container')
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('results');
    resultDiv.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}\n 
    ${result}`;
    container.appendChild(resultDiv);
    return result; 
    }
        
const btns = document.querySelectorAll('button'); 

btns.forEach(button => 

    button.addEventListener('click',playRound))




function game() {
        
    const resultsArray = [];
     
           
        for (i=0;i<5;i++){
            
            const results = playRound();
          
            resultsArray.push(results);
            console.log(results); 
            }
        
    const winsArray = resultsArray.filter((word)=> word.length <= 19);
    const lossArray = resultsArray.filter((word)=> word.length > 20);
        
        if (winsArray.length > lossArray.length) {
            console.log('Congratultions You Won The Game!');
            } else if (winsArray.length < lossArray.length ){
            console.log('Looks like the Computer takes this Day');
            } else {
            console.log('A valiant effort with no victors but more importantly with no losers');
            }

    }
 

//game(); 


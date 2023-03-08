function getPlayerChoice (e) {
    let value = this.id; 
    const container = document.querySelector('.container');
    div = document.createElement('div');
    div.classList.add('player');
    div.textContent = `You chose ${value}`;
    container.appendChild(div);
}  
        
const btns = document.querySelectorAll('button'); 

btns.forEach(button => 

    button.addEventListener('click',getPlayerChoice))

function getComputerChoice() {
        
    let choiceArray = [
                    'Rock',
                    'Paper',
                    'Scissors'
                 ],
        computerChoice = choiceArray[Math.floor(Math.random()*3)];
        console.log(computerChoice);
        return computerChoice;
    }

function playRound() {
    
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
    let win = "You won this round!",
            loss = "Uh oh, you lost this round!",
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
            return result;
       
    }

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


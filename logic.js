function getComputerChoice() {
        
    let choiceArray = [
                    'Rock',
                    'Paper',
                    'Scissors'
                 ],
        computerChoice = choiceArray[Math.floor(Math.random()*3)];
        return computerChoice;
    }

    let winCount = 0;
    let lossCount = 0;
    let tieCount = 0;
    
function playRound(e) {
    
    let playerSelection = e.target.value;
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    
    let win = "You won this round!",
            loss = "Oh no, you lost this round!",
            tie = "You tied this round!",
            playerArray = playerSelection.split(),
            computerArray = computerSelection.split(),
            result;
            const winRound= document.querySelector('#win');
            const lossRound = document.querySelector('#loss');
            const tieRound = document.querySelector('#tie');

        if (playerSelection === "Rock" && computerSelection === "Paper" || 
            playerSelection === "Paper" && computerSelection === "Scissors" || 
            playerSelection === "Scissors" && computerSelection === "Rock" ){
                
            result = loss; 
            lossCount++;
            lossRound.innerHTML = lossCount;
            
            } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" || 
            playerSelection === "Scissors" && computerSelection === "Paper"){
                
            result = win;
            winCount++;
            winRound.innerHTML = winCount;
            console.log(winCount);
            
            } else if (playerArray.length == computerArray.length){
            result = tie;   
            tieCount++;
            tieRound.innerHTML = tieCount;
            }    
            
     
    
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('results');
    resultDiv.innerText = `You chose ${playerSelection}, and we chose ${computerSelection}\n 
    ${result}`;
    container.appendChild(resultDiv);
    console.log(result);    
} 
    

const container = document.querySelector('.container')
const btns = document.querySelectorAll('button'); 

btns.forEach(button => 

    button.addEventListener('click',playRound))

let counter = 0;

function limitRound(){
    
    if (counter < 4){
        counter ++;
    }else {
    for(i = 0; i < btns.length; i++){
       
        btns[i].disabled = true;
    }
    }
}
    console.log(counter);


btns.forEach(button => 

        button.addEventListener('click',limitRound))

function hideResult(){

    let allResults = document.querySelectorAll('.results');
    let first = allResults[0];
    if(allResults.length > 1){
    container.removeChild(first);}
}

btns.forEach(button => 

    button.addEventListener('click',hideResult))



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
            console.log('Congratulations You Won The Game!');
            } else if (winsArray.length < lossArray.length ){
            console.log('Looks like the Computer takes this Day');
            } else {
            console.log('A valiant effort with no victors but more importantly with no losers');
            }
        
    }
 
   

//game(); 


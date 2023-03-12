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
            lossCount++;
            lossRound.innerHTML = lossCount;
            
            } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" || 
            playerSelection === "Scissors" && computerSelection === "Paper"){
                
            result = win;
            winCount++;
            winRound.innerHTML = winCount;

            } else if (playerArray.length == computerArray.length){
            result = tie;   
            tieCount++;
            tieRound.innerHTML = tieCount;
            }    
            
    resultDiv.innerText = `${playerSelection} versus ${computerSelection}\n 
    ${result}`;
    container.appendChild(resultDiv);
    console.log(result); 
    console.log(winCount) ; console.log(tieCount); console.log(lossCount)
    return winCount, lossCount, tieCount;   
} 
  
const winRound= document.querySelector('#win');
const lossRound = document.querySelector('#loss');
const tieRound = document.querySelector('#tie');
const resultDiv = document.createElement('div');
resultDiv.classList.add('results');
const allResults = document.querySelectorAll('.results')
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
        setTimeout(() => { resultDiv.style.display = 'none';
    }, 1.0 * 1000);
    } 
    } 
    }
 
btns.forEach(button => 

        button.addEventListener('click',limitRound))

function hideResult(){

    let first = allResults[0];
    if (allResults.length > 1){
        container.removeChild(first);
    }
} 

btns.forEach(button => 

    button.addEventListener('click',hideResult))

let resultCounter = 0;
const finalDiv = document.querySelector('.finalResult');

function finalResult () {

    if (winCount > lossCount){
        finalDiv.innerText = 'Congratulations, you have bested me and the robot race...'
    } else if (winCount < lossCount){
        finalDiv.innerText = 'Today we bathe in glory for beating our maker'
    } else {
        finalDiv.innerText = 'No Victors here... no resolution, arguably the worst outcome'
    }

    if (resultCounter < 4){
        resultCounter ++;
        finalDiv.style.display = 'none'; 
    } else {
        finalDiv.style.display = 'flex'; 
    }
console.log(finalDiv)
}

btns.forEach(button => 

    button.addEventListener('click',finalResult))
 
   



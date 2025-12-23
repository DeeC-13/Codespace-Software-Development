
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('whoWon');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let whoWon;
  
const choices = document.querySelectorAll("button");

choices.forEach(choices => choices.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerChoiceDisplay.innerHTML = playerChoice
  getcomputerChoice()
  game()
} ))

const getcomputerChoice = () => { 
  const choices = ['0', '1', '2']
  const num = choices[Math.floor(Math.random() *3)];
    if
        (num === '0'){
        computerChoice = 'door1'
        }
    else if 
        (num === '1'){
        computerChoice = 'door2'
        }
    else {
        (num === '2') 
        computerChoice = 'door3'
        }    
    computerChoiceDisplay.innerHTML = computerChoice
}

const game = () => {

    if (  
        (playerChoice != computerChoice)) {    
        whoWon = "You Lose!" 
    } 
        
    else{         
        whoWon = "You Found the Treasure!"
    }  
        resultDisplay.innerHTML = whoWon
  }  





   
  
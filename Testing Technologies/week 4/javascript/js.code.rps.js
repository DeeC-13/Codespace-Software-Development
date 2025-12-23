const head = document.querySelector('h1');
head.style.backgroundColor = 'blue';

const body = document.querySelector('h2');
body.style.backgroundColor = 'blue';

const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('whoWon');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const roundDisplay = document.getElementById('round');
const endStatementDisplay = document.getElementById('theEnd');

const rock = document.getElementById('rock');
rock.setAttribute('style', 'color: black');
rock.style.backgroundColor = 'blue';
rock.style.fontSize = 'larger';

const paper = document.getElementById('paper');
paper.setAttribute('style', 'color: black');
paper.style.backgroundColor = 'blue';
paper.style.fontSize = 'larger';

const scissors = document.getElementById('scissors');
scissors.setAttribute('style', 'color: black');
scissors.style.backgroundColor = 'blue';
scissors.style.fontSize = 'larger';

let computerChoice;
let playerChoice;
let whoWon;
let theEnd;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let totalRounds = 5;

  
alert('Welcome to My Game');  

const choices = document.querySelectorAll("button");

choices.forEach(choices => choices.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerChoiceDisplay.innerHTML = playerChoice
  getcomputerChoice()
  game()
  scoreUp()
  countRound()
  endGame()
} ))

function getcomputerChoice() { 
  const choices = ['rock', 'paper', 'scissors'];

  const num = choices[Math.floor(Math.random() *3)];
  if
   (num === 'rock'){
   computerChoice = 'rock'
  }
  else if 
    (num === 'paper'){
    computerChoice = 'paper'
  }
  else {
    (num === 'scissors') 
    computerChoice = 'scissors'
  }    
  
    computerChoiceDisplay.innerHTML = computerChoice
}

function game() {

if ( 
   (playerChoice === 'paper' && computerChoice === 'rock') ||
          
   (playerChoice === 'rock' && computerChoice === 'scissors') ||
             
   (playerChoice === 'scissors' && computerChoice === 'paper'))     
    {
     whoWon = "You Win!" 
    } 
        
    else if (
            (playerChoice === 'scissors' && computerChoice === 'rock') ||
             
            (playerChoice === 'paper' && computerChoice === 'scissors') ||
                     
            (playerChoice === 'rock' && computerChoice === 'paper') ) 
            {
             whoWon = "You Lose!" 
            }    
                
      else { 
            whoWon = "It's a draw!"
           }  
       
          resultDisplay.innerHTML = whoWon

  }  

function scoreUp() {

if (whoWon.includes("You Lose!")) {
    computerScore +=1;       
    console.log(computerScore);
    computerScoreDisplay.textContent = computerScore;    

  } else if (whoWon.includes("You Win")) {
             playerScore +=1;
             console.log(playerScore);
             playerScoreDisplay.textContent = playerScore;

    } else { (whoWon.includes("It's a Draw")) 
      }  
   
      computerScoreDisplay.innerHTML = computerScore
      playerScoreDisplay.innerHTML = playerScore   
}

function countRound() {   

if (round < totalRounds){
    round++;
    roundDisplay.textContent = `Round: ${round} of ${totalRounds}`;
    } 
  
  else {
    if (round === 5)
      endGame();
  }   
  
}  

function endGame() {

  if(round === 5) {
document.querySelectorAll('button').forEach(btn => btn.disabled = true);
  

let theEnd = '';

if (playerScore > computerScore) {
    theEnd = 'You Won the Game!'

  } else if (playerScore < computerScore) {
             theEnd = 'Better Luck Next Time!'

    } else {
            theEnd = 'A Draw It Be!'
    }

  endStatementDisplay.textContent = theEnd
}  
}

   
  
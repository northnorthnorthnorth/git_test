const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock'));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper'));
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => playRound('scissors'));

const roundResult = document.querySelector('#round-result');
const gameScore = document.querySelector('#game-score');
const newGame = document.querySelector('#start-game');
newGame.addEventListener('click', () => startGame())


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(choices[choice]);
    return choices[choice];
}

function playRound(choice) {
    let roundWinner = ''
    let computerSelection = getComputerChoice();
    if (choice === 'rock') {
        if(computerSelection === 'scissors') {
            roundWinner = 'player'
        }
        else if (computerSelection === 'paper'){
            roundWinner = 'computer'
        }
    } else if (choice === 'scissors') {
        if(computerSelection === 'paper') {
            roundWinner = 'player'
        }
        else if (computerSelection === 'rock') {
            roundWinner = 'computer'
        }
    } else {
        if(computerSelection === 'rock') {
            roundWinner = 'player'
        }
        else if (computerSelection === 'scissors') {
            roundWinner = 'computer'
        }
    }
    if (roundWinner === 'player') {
        playerScore++;
        roundResult.textContent='You win the round!'
    } else if (roundWinner === 'computer') {
        computerScore++;
        roundResult.textContent='You lose the round...'
    } else {
        roundResult.textContent='Draw. Nobody gets a point'       
    }
    gameScore.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`
    if (playerScore >= 5 || computerScore >= 5) {
        endGame()
    }
}

function endGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    if (playerScore >= 5) {
        gameScore.textContent = 'You win the game! you did ittt'
    } else if (computerScore >= 5) {
        gameScore.textContent = 'The computer wins the game... you lost'
    }
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    gameScore.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`
    roundResult.textContent='Make a choice..'
}

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn(); checkScore();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    scoreText.textContent = `${playerScore} Player vs Computer ${computerScore}`;

}))

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner (){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "You Win!"  : "You Lose!";
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? "You Win!" : "You Lose!"
    }
}
function checkScore (){
    if(player == computer){
        computerScore +=0;
        playerScore +=0;
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? playerScore +=1  : computerScore +=1;
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? playerScore +=1 : computerScore +=1
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? playerScore +=1 : computerScore +=1
    }
}
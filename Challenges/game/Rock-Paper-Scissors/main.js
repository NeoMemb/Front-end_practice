const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sciss = document.querySelector("#scissors");
const playerChoice = document.querySelector(".player");
const computerChoice = document.querySelector(".computer");
const result = document.querySelector(".result > h1.status");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

const computerOpt = ["Paper📃", "Scissors✂", "Rock🥌"];
const tie = `IT'S A TIE`;
const win = `You Won!!!`;
const lose = `You lose, Try again`;

let playerScr = 0;
let computerScr = 0;
let player;
let computer;

playerScore.textContent = playerScr;
computerScore.textContent = computerScr;

rock.addEventListener("click", ()=> {
    player = computerOpt[2];
    playerChoice.textContent = player;
    computer = computerOpt[Math.floor(Math.random() * 3)];
    computerChoice.textContent = computer;
    decide();
})
paper.addEventListener("click", ()=> {
    player = computerOpt[0];
    playerChoice.textContent = player;
    computer = computerOpt[Math.floor(Math.random() * 3)];
    computerChoice.textContent = computer;
    decide();
})
sciss.addEventListener("click", ()=> {
    player = computerOpt[1];
    playerChoice.textContent = player;
    computer = computerOpt[Math.floor(Math.random() * 3)];
    computerChoice.textContent = computer;
    decide();
})

function decide() {
    if (player == computer) {
        result.textContent = tie;
    }
    else{
        switch(player){
            case computerOpt[0]:
                result.textContent = (computer === computerOpt[2]) ? (win) : (lose);
                
                break;
            case computerOpt[2]:
                result.textContent = (computer === computerOpt[1]) ? (win) : (lose);
                break;
            case computerOpt[1]:
                result.textContent = (computer === computerOpt[0]) ? (win) : (lose);
                break;
        }
    }
    (result.textContent === win) ? (playerScr++) : (
        (result.textContent === lose) ? (computerScr++) : (tie)
    );
    playerScore.textContent = playerScr;
    computerScore.textContent = computerScr;
}


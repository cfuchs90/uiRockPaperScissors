function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomInt = Math.round(Math.random()* 2);

  return choices[randomInt].toLowerCase();
}

function playerSelection(choice) {

  choice = choice.toLowerCase();


  if(choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return null;
  }
  }


function playGame(playerChoice, computerChoice) {
   if (playerChoice === "rock" && computerChoice === "paper") {
     return "Computer wins";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "Computer wins";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "Computer wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Player wins";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Player wins";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Player wins";
  } else {
    return "draw";
  }
}


const allButtons = document.querySelectorAll("button");

// Score Elements
const scoreHeading = document.querySelector("#score");
const numGamesSpan = document.querySelector("#numGames");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const drawScore = document.querySelector("#draws");


// Final Winner Elements
const finalWinnerBox = document.querySelector(".finalWinnerBox");
const finalWinner = document.querySelector("#fWinner");

// Win Counters
let numGames = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;


allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
	let computerChoice = computerPlay();
	let playerChoice = playerSelection(e.target.value);
	let currentWinner = playGame(playerChoice, computerChoice);


	if(currentWinner === "Player wins") {
	    ++playerWins;
	} else if(currentWinner === "Computer wins") {
	    ++computerWins;
	} else {
	    ++draws;
	}

	playerScore.textContent = playerWins;
	computerScore.textContent = computerWins;
	drawScore.textContent = draws;


	scoreHeading.textContent = currentWinner;
	numGames++;
	numGamesSpan.textContent = numGames;

	if(numGames === 5) {
	    for(btn of allButtons) {
		btn.setAttribute("disabled", "disabled");
	    }
	    finalWinnerBox.style.visibility = "visible";

	    if(playerWins < computerWins) {
		finalWinner.textContent = "COMPUTER WINS";
	    } else if (playerWins > computerWins) {
		finalWinner.textContent = "PLAYER WINS";
	    } else {
		finalWinner.textContent = "DRAW!";
	    }
	}

    });


});

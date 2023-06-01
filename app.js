//Text
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const overallScoreText = document.querySelector("#overallScoreText");
const updatedPlayerText = document.querySelector("#updatedPlayerText");
const updatedComputerText = document.querySelector("#updatedComputerText");
const scoreContainer = document.querySelector(".scoreContainer");
const overallWinner = document.querySelector("#overallWinner");

// grab the HTML buttons
const choiceButtons = document.querySelectorAll("button.choice");

const resetButton = document.querySelector("button#reset");

// initialise
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// create Event Listeners that define both player and computer selections, as well as plays both rounds
choiceButtons.forEach((button) =>
	button.addEventListener("click", () => {
		playerSelection = button.textContent;
		computerSelection = getComputerChoice();
		playerChoice.textContent = `Player chooses ${playerSelection}`;
		computerChoice.textContent = `Computer chooses ${computerSelection}`;
		overallScoreText.textContent = playRound(
			playerSelection,
			computerSelection
		);
		updateScore(overallScoreText.textContent);
	})
);

resetButton.addEventListener("click", resetGame);

// Create randomized computer selection
function getComputerChoice() {
	let compNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	if (compNum === 1) {
		return "Rock";
	} else if (compNum === 2) {
		return "Paper";
	} else if (compNum === 3) {
		return "Scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === "Rock" && computerSelection === "Rock") ||
		(playerSelection === "Paper" && computerSelection === "Paper") ||
		(playerSelection === "Scissors" && computerSelection === "Scissors")
	) {
		return "It's a draw!";
	} else if (playerSelection === "Rock" && computerSelection === "Paper") {
		return "You lose! Paper beats Rock!";
	} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
		return "You win! Rock beats Scissors";
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return "You win! Paper beats Rock";
	} else if (
		playerSelection === "Paper" &&
		computerSelection === "Scissors"
	) {
		return "You lose! Scissors beats Paper!";
	} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
		return "You lose! Rock beats Scissors!";
	} else if (
		playerSelection === "Scissors" &&
		computerSelection === "Paper"
	) {
		return "You win! Scissors beats Paper";
	}
}

function updateScore(result) {
	if (result.includes("win")) {
		playerScore++;
		updatedPlayerText.textContent = `Player Score: ${playerScore}`;
		updatedComputerText.textContent = `Computer Score: ${computerScore}`;
	} else if (result.includes("lose")) {
		computerScore++;
		updatedPlayerText.textContent = `Player Score: ${playerScore}`;
		updatedComputerText.textContent = `Computer Score: ${computerScore}`;
	} else if (result.includes("draw")) {
		updatedPlayerText.textContent = `Player Score: ${playerScore}`;
		updatedComputerText.textContent = `Computer Score: ${computerScore}`;
	}

	if (playerScore === 5) {
		/* 		playerScore.textContent = `Player Score: ${playerScore}`;
		computerScore.textContent = `Computer Score: ${computerScore}`; */
		overallWinner.textContent = "Congrats, you win!";
		updatedPlayerText.remove();
		updatedComputerText.remove();
	} else if (computerScore === 5) {
		overallWinner.textContent = "Aww shucks, you lose!";
		updatedPlayerText.remove();
		updatedComputerText.remove();
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	scoreContainer.appendChild(updatedPlayerText);
	scoreContainer.appendChild(updatedComputerText);
	overallScoreText.remove();
	overallWinner.remove();

	updatedPlayerText.textContent = "Player Score: 0";
	updatedComputerText.textContent = "Computer Score: 0";
}

/* function game() {
	for (let count = 0; count < 5; count++) {
		let playerSelection = getPlayerSelection();
		let computerSelection = getComputerChoice();
		let roundResult = playRound(playerSelection, computerSelection);
		console.log(`Round ${count + 1}: ${roundResult}`);
		if (roundResult.includes("win")) {
			playerScore++;
		} else if (roundResult.includes("lose")) {
			computerScore++;
		}
		console.log(`Player Score: ${playerScore}`);
		console.log(`Computer Score: ${computerScore}`);
	}

	if (playerScore > computerScore) {
		console.log(
			`Final Score - Player: ${playerScore}, Computer: ${computerScore} \nCongratulations, you win!`
		);
	} else if (playerScore < computerScore) {
		console.log(
			`Final Score - Computer: ${computerScore}, Player: ${playerScore} \nAw shucks, you lose!`
		);
	} else {
		console.log(
			`Final Score - Player: ${playerScore}, Computer: ${computerScore} \nAh, annoyingly it is a tie!`
		);
	}
}

game();
 */
// Unused

/* const rock = document.createElement("button");
const body = document.getElementsByTagName("body")[0];

body.appendChild(rock);
rock.setAttribute("id", "rock");

const paper = document.createElement("button");
rock.setAttribute("id", "paper");

const scissors = document.createElement("button");
rock.setAttribute("id", "scissors"); */

/* const buttons = document.querySelectorAll("button");
 */

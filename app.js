// grab containers
const individualScoreContainer = document.querySelector(
	"#individualScoreContainer"
);
const scoreContainer = document.querySelector(".scoreContainer");
const lineBreak = document.querySelector("#lineBreak");

// grab the HTML buttons
const choiceButtons = document.querySelectorAll("button.choice");

// create elements
const playerChoice = document.createElement("h1");
playerChoice.setAttribute("id", "playerChoice");
playerChoice.classList.toggle("individualScoreText");

const computerChoice = document.createElement("h1");
computerChoice.setAttribute("id", "computerChoice");
computerChoice.classList.add("individualScoreText");

const roundWinnerText = document.createElement("h1");
roundWinnerText.setAttribute("id", "roundWinnerText");

const updatedPlayerText = document.createElement("h1");
updatedPlayerText.setAttribute("id", "updatedPlayerText");

const updatedComputerText = document.createElement("h1");
updatedComputerText.setAttribute("id", "updatedComputerText");

const overallWinner = document.createElement("h1");
overallWinner.setAttribute("id", "overallWinner");

const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset");
resetButton.textContent = "Reset";

// initialise
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// create Event Listeners that define both player and computer selections, as well as plays both rounds
choiceButtons.forEach((button) =>
	button.addEventListener("click", () => {
		if (!gameOver) {
			playerSelection = button.textContent;
			computerSelection = getComputerChoice();

			individualScoreContainer.appendChild(playerChoice);
			playerChoice.textContent = `Player chooses ${playerSelection}`;

			individualScoreContainer.appendChild(computerChoice);
			computerChoice.textContent = `Computer chooses ${computerSelection}`;

			individualScoreContainer.appendChild(roundWinnerText);
			roundWinnerText.textContent = playRound(
				playerSelection,
				computerSelection
			);
			scoreContainer.appendChild(updatedPlayerText);
			scoreContainer.appendChild(updatedComputerText);
			updateScore(roundWinnerText.textContent);
		}
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
		gameOver = true;
		lineBreak.after(overallWinner);
		overallWinner.textContent = "Congrats, you win!";
		overallWinner.after(resetButton);
		updatedPlayerText.remove();
		updatedComputerText.remove();
		playerChoice.remove();
		computerChoice.remove();
	} else if (computerScore === 5) {
		gameOver = true;
		lineBreak.after(overallWinner);
		overallWinner.textContent = "Aww shucks, you lose!";
		overallWinner.after(resetButton);
		updatedPlayerText.remove();
		updatedComputerText.remove();
		playerChoice.remove();
		computerChoice.remove();
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	gameOver = false;
	roundWinnerText.remove();
	overallWinner.remove();
	updatedPlayerText.remove();
	updatedComputerText.remove();
	scoreContainer.appendChild(updatedPlayerText);
	scoreContainer.appendChild(updatedComputerText);
	updatedPlayerText.remove();
	updatedComputerText.remove();
	resetButton.remove();

	/* updatedPlayerText.textContent = "Player Score: 0";
	updatedComputerText.textContent = "Computer Score: 0"; */
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

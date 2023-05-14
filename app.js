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

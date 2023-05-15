function getPlayerSelection() {
	let selection = prompt(
		"Enter your choice of weapon",
		"Rock, Paper or Scissors"
	);
	selection =
		selection.substring(0, 1).toUpperCase() +
		selection.slice(1).toLowerCase();
	if (selection === "Rock" || "Paper" || "Scissors") {
		return selection;
	} else {
		console.log(
			"Invalid input, please select from either Rock, Paper or Scissors" &&
				prompt("Enter your choice of weapon", "Rock, Paper or Scissors")
		);
	}
}

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

function game() {
	let playerScore = 0;
	let computerScore = 0;
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

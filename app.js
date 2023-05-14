function getComputerChoice() {
	let compNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	if (compNum === 1) {
		return "rock";
	} else if (compNum === 2) {
		return "paper";
	} else if (compNum === 3) {
		return "scissors";
	}
}

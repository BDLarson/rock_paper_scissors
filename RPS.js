var loop = true;
while(loop == true) {
    // Prompt the user for input.
    var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
    // Randomly create a computer choice.
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } console.log("The Computer chooses: " + computerChoice);

    var compare = function(user, computer) {
        if (user == computer) {
            return "The result is a tie!";
        } else if (user === "rock") {
            if (computer === "scissors") {
                return "Rock beats Scissors, you win!";
            } else {
                return "Paper beats Rock, you lose!";
            }
        } else if (user === "paper") {
            if (computer === "rock") {
                return "Paper beats Rock, you win!";
            } else {
                return "Scissors beats Paper, you lose!";
            }
        } else if (user === "scissors") {
            if (computer === "paper") {
                return "Scissors beats Paper, you win!";
            } else {
                return "Rock beats Scissors, you lose!";
            }
        } else {
            return "That is not a valid choice!";
        }
    }

    window.alert(compare(userChoice, computerChoice));
    if (confirm('Would you like to play again?')) {
        loop = true;
    } else {
        loop = false;
    }
}

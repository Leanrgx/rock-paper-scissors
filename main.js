const options = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return computerChoice = options[Math.floor(Math.random() * options.length)];
}

function getUserChoice (){
    let userChoice = prompt("Rock, Paper, or Scissors?", "");
    let lowCase = userChoice.toLowerCase();
    return realUserChoice = lowCase.charAt(0).toUpperCase() + lowCase.slice(1); 
}

function playRound (){
    alert("You chose " + getUserChoice());
    alert("The computer chose " + getComputerChoice());
    if (realUserChoice === "Rock" && computerChoice === "Paper"
    || realUserChoice === "Paper" && computerChoice === "Scissors"
    || realUserChoice === "Scissors" && computerChoice === "Rock"){
        alert("You lost!");
        computerScore++
        alert ("Our current score is " + userScore + " to " + computerScore);
    } else if (realUserChoice === "Rock" && computerChoice === "Scissors"
    || realUserChoice === "Paper" && computerChoice === "Rock"
    || realUserChoice === "Scissors" && computerChoice === "Paper"){
        alert("You won!");
        userScore++
        alert ("Our current score is " + userScore + " to " + computerScore);
    } else if (realUserChoice === computerChoice) {
        alert("We tied! Let's try again");
        playRound();
    } else {
        alert ("You didn't chose one of the options!");
        playRound();
    }
}

for (i = 0; i < 5; i++){
    playRound();
    if (userScore === 3){
        alert("You have won 3 out of 5 games. Good job!");
        confirm("Do you want to play again?") ? playRound () : alert ("Okay, it was fun, goodbye!");
        break;
    } else if (computerScore === 3){
        alert("You have lost 3 out of 5 games. Better luck next time!");
        confirm("Do you want to play again?") ? playRound () : alert ("Okay, it was fun, goodbye!");
        break;
    }
}



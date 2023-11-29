//Get computer choice

let options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    return computerChoice = options[Math.floor(Math.random() * options.length)];
}

//get user choice

function getUserChoice (){
    let userChoice = prompt("Rock, Paper, or Scissors?", "");
    let lowCase = userChoice.toLowerCase();
    return realUserChoice = lowCase.charAt(0).toUpperCase() + lowCase.slice(1); 
}

//compare user choice to computer choice
// if user choice beats computer choice
    //user wins
    // else if computer beats user
    // game over

function playRound (){
    alert("You chose " + getUserChoice());
    alert("The computer chose " + getComputerChoice());
    if (realUserChoice === "Rock" && computerChoice === "Paper"
    || realUserChoice === "Paper" && computerChoice === "Scissors"
    || realUserChoice === "Scissors" && computerChoice === "Rock"){
        confirm("You lost! Do you want to try again?") ? playRound() : alert("Okay, goodbye");
    } else if (realUserChoice === "Rock" && computerChoice === "Scissors"
    || realUserChoice === "Paper" && computerChoice === "Rock"
    || realUserChoice === "Scissors" && computerChoice === "Paper"){
        confirm("You won! Do you want to try again?") ? playRound() : alert("Okay, goodbye");
    } else if (realUserChoice === computerChoice) {
        confirm("We tied! Do you want to try again?") ? playRound() : alert("Okay, goodbye");
    } else {
        alert ("You didn't chose one of the options!")
    }
}

playRound();

// start game again


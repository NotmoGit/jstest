

function getComputerChoice () {
    choices = ["Rock","Paper", "Scissors"]
    computerChoice = choices.at(Math.floor(Math.random()*3))
    return computerChoice
}
function getPlayerChoice () {
    playerChoice = prompt("Choose: Rock, Paper or Scissors?")
    choiceLowerCase = playerChoice.toLowerCase()
    choiceCap = choiceLowerCase.slice(0,1).toUpperCase()
    choiceSlice = choiceLowerCase.slice(1)
    choiceOutput = choiceCap + choiceSlice
    allowed = ["Rock","Paper", "Scissors"]
    if (allowed.includes(choiceOutput)) {
        return choiceOutput
    } else {
        return getPlayerChoice()
    }
}

function resolveGame (compChoice,playerChoice) {
    if (compChoice == playerChoice) {
        return "Game is a draw!"
    } else if (compChoice == "Rock" && playerChoice == "Paper"){
        return "Computer Wins"
    } else if (compChoice == "Rock" && playerChoice == "Scissors"){
        return "Computer Wins"
    } else if (compChoice == "Scissors" && playerChoice == "Paper"){
        return "Computer Wins"
    } else {
        return "You Win!"
    }
}

function game (rounds) {
    let playerScore = 0
    let compScore = 0
    for (let i = 1; i <= rounds; i++) {
        const finalPlayerChoice = getPlayerChoice()
    const finalCompChoice = getComputerChoice()
    result = resolveGame(finalCompChoice,finalPlayerChoice)
        if (result == "Computer Wins") {
            compScore++
        } else if (result == "You Win"){
            playerScore++
        }

    console.log("Round " + i + ": Computer said " + finalCompChoice + ", you said " + finalPlayerChoice + " so: " + result)
    }
    console.log("Final Score was " + playerScore + ":" + compScore + ". Please play again")
}






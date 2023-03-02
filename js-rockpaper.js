

function getComputerChoice () {
    choices = ["Rock","Paper", "Scissors"]
    computerChoice = choices.at(Math.floor(Math.random()*3))
    return computerChoice
}

function resolveGame (playerChoice) {
    
    compChoice = getComputerChoice()
    
    if (compChoice == playerChoice) {
        result = "Game is a draw!"
    } else if (compChoice == "Rock" && playerChoice == "Paper"){
        result = "Computer Wins"   
    } else if (compChoice == "Rock" && playerChoice == "Scissors"){
        result = "Computer Wins"  
    } else if (compChoice == "Scissors" && playerChoice == "Paper"){
        result = "Computer Wins"
    } else {
        result = "You Win!"
    }
    return result
    
    
}

function finalScore(player,computer){
    if (player > computer) {
        finalResult = "You Win"
    } else {
        finalResult = "Computer Wins"
    }
    return finalResult

}

const buttons = document.querySelectorAll("button")
const resultDiv = document.querySelector('#results')
const scoreDiv = document.querySelector('#score')
const roundDiv = document.querySelector('#rounds')
let round = 0
let playerScore = 0
let compScore = 0

score = "Player Score = " + playerScore + ", Computer Score = " + compScore

buttons.forEach((button => {
    button.addEventListener('click', () => {
        playerButton = button.innerHTML
        if (round <= 4) {
            resolveGame(playerButton)
            
            if (result == "You Win!") {
                playerScore++
            } else if (result == "Game is a draw!") {
                playerScore++
                compScore++
            } else {
                compScore++
            }
            score = "Player Score = " + playerScore + ", Computer Score = " + compScore
            resultDiv.textContent = result
            scoreDiv.textContent = score
            round++
            roundDiv.textContent = round
        } else {
            finalScore(playerScore,compScore)
            resultDiv.textContent = 
            " Your score was " + playerScore + ", Computer score was " + compScore + "  - therefore " + finalResult
            round = 0
            playerScore = 0
            compScore = 0
            scoreDiv.textContent = ""
            roundDiv.textContent = ""
        }
    })
}))






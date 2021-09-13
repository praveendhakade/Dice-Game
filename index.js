// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true //can create an object to store both player turns

const messageEl = document.getElementById("message")
const player1ScoreEl = document.getElementById("player1Scoreboard")
const dice1El = document.getElementById("player1Dice")

const player2ScoreEl = document.getElementById("player2Scoreboard")
const dice2El = document.getElementById("player2Dice")

const rollBtnEl = document.getElementById("rollBtn")
const resetBtnEl = document.getElementById("resetBtn")

function changeDisplayButton(){
    rollBtnEl.style.display = "none"
    resetBtnEl.style.display = "block"
}

rollBtnEl.addEventListener("click", function () {
    const ranNum = Math.floor((Math.random() * 6) + 1)
    //console.log(ranNum)

    if (player1Turn) {                                     //if (player1Turn){
        player1Score += ranNum
        player1ScoreEl.textContent = player1Score
        dice1El.textContent = ranNum
        dice1El.classList.remove("active")
        dice2El.classList.add("active")
        messageEl.textContent = `Player 2 Turn`
        //console.log(`Player 1 rolled ${ranNum}`)           // player1Turn = false}
    } else                                                 // else {
    {                                                     // player1Turn = true}
        player2Score += ranNum
        player2ScoreEl.textContent = player2Score

        dice2El.textContent = ranNum
        dice2El.classList.remove("active")
        dice1El.classList.add("active")
        messageEl.textContent = `Player 1 Turn`
        //console.log(`Player 2 rolled ${ranNum}`)
    }

    player1Turn = !player1Turn                             // ! invert the value

    if (player1Score >= 21 ){
        changeDisplayButton()
        messageEl.textContent = `Player 1 has won! 😎`
    } else if (player2Score >= 21){
        changeDisplayButton()
        messageEl.textContent = `Player 2 has won! 😎`
    }
})

resetBtnEl.addEventListener("click", function(){
    reset()
})

function reset(){
    messageEl.textContent = `Player 1 Turn`
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1ScoreEl.textContent = 0
    player2ScoreEl.textContent = 0
    dice1El.textContent = '-'
    dice2El.textContent = '-'
    resetBtnEl.style.display = "none"
    rollBtnEl.style.display = "block"
    dice2El.classList.remove("active")
    dice1El.classList.add("active")
}
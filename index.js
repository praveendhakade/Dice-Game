// Create variables for the game state
let player1Score = 0
let player2Score = 0
let extra1 = 0
let extra2 = 0
let count1 = 0
let count2 = 0
let gameWon = 0
let player1Turn = true //can create an object to store both player turns

const messageEl = document.getElementById("message")
const player1ScoreEl = document.getElementById("player1Scoreboard")
const dice1El = document.getElementById("player1Dice")

const player2ScoreEl = document.getElementById("player2Scoreboard")
const dice2El = document.getElementById("player2Dice")

const rollBtnEl = document.getElementById("rollBtn")
const resetBtnEl = document.getElementById("resetBtn")

const count1El = document.getElementById("player1-win-count")
const count2El = document.getElementById('player2-win-count')

function changeDisplayButton() {
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

    if (player1Turn && ranNum === 6) {
        messageEl.textContent = `Player 1 get a second Turn 😁`
        extra1 += ranNum
        dice1El.textContent = ranNum
        dice1El.classList.add("active")
        dice2El.classList.remove("active")
        player1ScoreEl.textContent = player1Score + extra1
    }
    else if (ranNum === 6) {
        messageEl.textContent = `Player 2 get a second Turn 😁`
        extra2 += ranNum
        dice2El.textContent = ranNum
        dice2El.classList.add("active")
        dice1El.classList.remove("active")
        player2ScoreEl.textContent = player2Score + extra2
    }

    player1Turn = !player1Turn                             // ! invert the value

    if (player1Score >= 21) {
        changeDisplayButton()
        messageEl.textContent = `Player 1 has won! 😎`
    } else if (player2Score >= 21) {
        changeDisplayButton()
        messageEl.textContent = `Player 2 has won! 😎`
    }
})

resetBtnEl.addEventListener("click", function () {
    reset()
    counter()
})

function reset() {
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

function counter (){
    if( gameWon){
        count1 += 1
        count1El.textContent = count1
    } else {
        count2El += 1
        count2El.textContent = count2
    }
}
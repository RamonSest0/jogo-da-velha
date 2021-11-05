document.addEventListener('DOMContentLoaded', () => {

    let squars = document.querySelectorAll(".square")

    squars.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event) {

    let square = event.target
    let position = square.id

    if (handleMove(position)) {

        if (playerOneInput.value != '' && playerTwoInput.value != '') {
            if (playerTime == 0) {
                playerTime = playerOneInput.value
                score1++
            }
            else {
                playerTime = playerTwoInput.value
                score2++
            }
        }

        if (playerTime == 0) {
            score1++
        }
        else {
            score2++
        }
        setTimeout(() => {
            alert('O jogo acabou, o jogador ' + playerTime + ' venceu!')

        }, 10)
    }
    updateSquare(position)

}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

// quadro de jogadores

let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

let playerOneInput = document.getElementById('playerOneInput')
let playerTwoInput = document.getElementById('playerTwoInput')

// pontuação

let score1 = 0
let score2 = 0

let scoreOne = document.getElementById('scoreOne')
let scoreTwo = document.getElementById('scoreTwo')

function changePlayer1() {
    player1.innerHTML = playerOneInput.value
}

function changePlayer2() {
    player2.innerHTML = playerTwoInput.value
}

function reset() {

    let squars = document.querySelectorAll(".square")

    squars.forEach((square) => {
        square.innerHTML = `<div class=''></div>`
    })
    board = ["", "", "", "", "", "", "", "", "",]
    gameOver = false
    playerTime = 0
    scoreOne.innerHTML = 'Pontuação: ' + score1
    scoreTwo.innerHTML = 'Pontuação: ' + score2
}


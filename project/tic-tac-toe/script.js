const boxes = Array.from(document.getElementsByClassName('box'))
const X_btn = document.getElementById("X_btn")
const O_btn = document.getElementById("O_btn")
const winnerElement = document.getElementById("winnerElement")
// console.log(boxes);
// console.log(X_btn, O_btn);

let playerSymbol = null;
let computerSymbol = null
let winner = null

X_btn.onclick = function (e) {
    playerSymbol = 'X'
    computerSymbol = "O"
    e.target.style.backgroundColor = 'green'
    e.target.style.color = 'white'
}

O_btn.onclick = function (e) {
    playerSymbol = 'O'
    computerSymbol = 'X'
    e.target.style.backgroundColor = 'green'
    e.target.style.color = 'white'
}

boxes.forEach((box, index) => {
    box.addEventListener("click", play)
})

function play(e) {
    if (!playerSymbol) {
        alert("choose a symbol")
        return
    }
    const currentBox = e.target
    playerMove(currentBox)
    checkWinner()
    computerMove()
    checkWinner()
}

const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

function playerMove(currentBox) {
    currentBox.textContent = playerSymbol
}

function computerMove() {
    // console.log('computer move');
    const isBoxAvailable = boxes.findIndex((element) => {
        if (element.textContent === "") return true
    })
    if (isBoxAvailable === -1) return

    const randomIndex = Math.floor(Math.random() * 9)
    // console.log(randomIndex);
    const boxValue = boxes[randomIndex].textContent
    // console.log(boxValue);
    if (boxValue === '') {
        boxes[randomIndex].textContent = computerSymbol
        return
    } else {
        computerMove() // recursion
    }

}

function checkWinner() {

    const boxesArray = boxes.map((box, index) => {
        return box.textContent
    })
    console.log(boxesArray);

    winningCombos.forEach((combo, index) => {
        if (boxesArray[combo[0]] === "X" && boxesArray[combo[1]] === "X" && boxesArray[combo[2]] === "X") {
            winner = "X"
            winnerElement.textContent = "Player X is winner"
            return
        } else if (boxesArray[combo[0]] === "O" && boxesArray[combo[1]] === "O" && boxesArray[combo[2]] === "O") {
            winner = "O"
            winnerElement.textContent = "Player O is winner"
            return
        }
    })
}


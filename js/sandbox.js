let gameBoard = document.getElementById("appContainer");
console.log(gameBoard);
gameBoard.className = "row d-flex justify-content-center";

let row = document.createElement("div");
gameBoard.appendChild(row);
row.className = "row"

let cell0 = document.createElement("button");
row.appendChild(cell0);
cell0.innerText = "";
cell0.className = "cell col-4 text-center border border-3";

let cell1 = document.createElement("button");
row.appendChild(cell1);
cell1.innerText = "";
cell1.className = "cell col-4 text-center border border-4";

let cell2 = document.createElement("button");
row.appendChild(cell2);
cell2.innerText = "";
cell2.className = "cell col-4 text-center border border-4";

let cell3 = document.createElement("button");
row.appendChild(cell3);
cell3.innerText = "";
cell3.className = "cell col-4 text-center border border-4";

let cell4 = document.createElement("button");
row.appendChild(cell4);
cell4.innerText = "";
cell4.className = "cell col-4 text-center border border-4";

let cell5 = document.createElement("button");
row.appendChild(cell5);
cell5.innerText = "";
cell5.className = "cell col-4 text-center border border-4";

let cell6 = document.createElement("button");
row.appendChild(cell6);
cell6.innerText = "";
cell6.className = "cell col-4 text-center border border-4";

let cell7 = document.createElement("button");
row.appendChild(cell7);
cell7.innerText = "";
cell7.className = "cell col-4 text-center border border-4";

let cell8 = document.createElement("button");
row.appendChild(cell8);
cell8.innerText = "";
cell8.className = "cell col-4 text-center border border-4";

let restartBtn = document.createElement("button");
appContainer.appendChild(restartBtn);
restartBtn.innerText = "Restart Game"
restartBtn.className = "restartBtn col-4 text-center border border-4 m-4 p-3";

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let gameState = {
    turnNumber: 0,
    player: 1,
    boardState: [],
    activeStatus: true
}

gameState.boardState = document.querySelectorAll(".cell")
console.log(gameState.boardState);

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        let tileOne = gameState.boardState[winConditions[i][0]].innerText;
        let tileTwo = gameState.boardState[winConditions[i][1]].innerText
        let tileThree = gameState.boardState[winConditions[i][2]].innerText
        if (
            tileOne && 
            tileTwo == tileOne &&
            tileThree == tileOne
         ) {
            endGame();
        }
    }
}

function endGame() {
    gameState.activeStatus = false;
    if (!gameState.activeStatus) {
        for (let i = 0; i < gameState.boardState.length; i++) {
             gameState.boardState[i].disabled = true;
        }
     }
    if (gameState.player == 1) {
        //alert("Player X wins");
        console.log("Player X wins!");
    } else {
        //alert("Player O wins");
        console.log("Player O wins");
    }

}

function makeMove() {
    for (let i = 0; i < gameState.boardState.length; i++) {
        gameState.boardState[i].addEventListener('click', function () {
            checkTurn();
            if (gameState.player == 1) {
                gameState.boardState[i].innerText = "X";
                gameState.turnNumber++
            } else {
                gameState.boardState[i].innerText = "O";
                gameState.turnNumber++
            }
            console.log(gameState.turnNumber);
            console.log(gameState.boardState);
            checkWin();
        }, { once: true });
        checkWin();
    }
}
makeMove();

function checkTurn() {
    if (gameState.turnNumber % 2 == 0) {
        gameState.player = 1;
    } else {
        gameState.player = 2;
    }

}

function restartGame() {
    
}

restartGameBtn.addEventListener("click", restartGame);










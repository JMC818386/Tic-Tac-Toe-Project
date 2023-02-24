
//------------------------Initialize variables/ Render board------------------------//

//appContainer contains entire game in one div
let gameBoard = document.getElementById("appContainer");
console.log(gameBoard);
gameBoard.className = "row d-flex justify-content-center";

let row = document.createElement("div");
gameBoard.appendChild(row);
row.className = "row"

//cell0 variable (top left)
let cell0 = document.createElement("button");
row.appendChild(cell0);
cell0.innerText = "";
cell0.className = "cell col-4 text-center border border-3";

//cell1 variable (top center)
let cell1 = document.createElement("button");
row.appendChild(cell1);
cell1.innerText = "";
cell1.className = "cell col-4 text-center border border-4";

//cell2 variable (top right)
let cell2 = document.createElement("button");
row.appendChild(cell2);
cell2.innerText = "";
cell2.className = "cell col-4 text-center border border-4";

//cell3 variable (middle left)
let cell3 = document.createElement("button");
row.appendChild(cell3);
cell3.innerText = "";
cell3.className = "cell col-4 text-center border border-4";

//cell4 variable (middle center)
let cell4 = document.createElement("button");
row.appendChild(cell4);
cell4.innerText = "";
cell4.className = "cell col-4 text-center border border-4";

//cell5 variable (middle right)
let cell5 = document.createElement("button");
row.appendChild(cell5);
cell5.innerText = "";
cell5.className = "cell col-4 text-center border border-4";

//cell6 variable (bottom left)
let cell6 = document.createElement("button");
row.appendChild(cell6);
cell6.innerText = "";
cell6.className = "cell col-4 text-center border border-4";

//cell7 variable (bottom center)
let cell7 = document.createElement("button");
row.appendChild(cell7);
cell7.innerText = "";
cell7.className = "cell col-4 text-center border border-4";

//cell8 variable (bottom right)
let cell8 = document.createElement("button");
row.appendChild(cell8);
cell8.innerText = "";
cell8.className = "cell col-4 text-center border border-4";

//restartBtn should call initializeBoard()
//Should only appear once endGame() has been called
let restartBtn = document.createElement("button");
appContainer.appendChild(restartBtn);
restartBtn.innerText = "Restart Game"
restartBtn.className = "restartBtn col-4 text-center border border-4 m-4 p-3";


//------------------------winConditions object------------------------//
//winConditions establishes certain box groups that constitute a win
//An object containing array of arrays
//Sits within checkWin() function
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

/* let options = ["", "", "", "", "", "", "", ""] */
//------------------------------------------------------------------//


//------------------------Game State------------------------//
//Creates object named gameState
let gameState = {
    //Sets turnNubmer to 0
    turnNumber: 0,
    player: 1,
    boardState: [],
    activeStatus: true
}

//------------------------------------------------------------------//
//Targets cell classes
gameState.boardState = document.querySelectorAll(".cell")
console.log(gameState.boardState);



//------------------------checkWin() function------------------------//
//checkWin() function to determine if either player has met any win condition
//Calls winConditions to see if player has won
//Should run on every move
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
/*         let markCount = 0;
        for (let j = 0; j < winConditions[i].length; j++) {
            console.log(gameState.boardState[winConditions[i][j]]);
            markCount += 1;
            console.log(markCount);
            if (gameState.boardState)
            if (gameState.boardState[i][j]?.innerText == true) {
                markCount++
                console.log(markCount);
            }
           
            if (markCount == 3) {
                endGame();
            }
        }
        markCount = 0; */
    }
}
console.log(checkWin);


//------------------------endGame() function------------------------//
//Displays the winner of the game
//Removes eventListeners from all tiles
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
//-------------------------------------------------------------------//


//------------------------makeMove() function------------------------//
//makeMove() adds the current player to the square they clicked
//Should initiate checkWin() on every move
//Should initiate switchPlayer()
//

//Creates makeMove function
function makeMove() {
    //Loops over 
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
        //Figure out how to remove eventListener from square that was just clicked
        checkWin();
    }
    
}
makeMove();
console.log(gameState.boardState);

//------------------------checkTurn() function------------------------//
//Visual indicator to show which player's turn it is
function checkTurn() {
    if (gameState.turnNumber % 2 == 0) {
        gameState.player = 1;
    } else {
        gameState.player = 2;
    }

}

//-------------------------------------------------------------------//



//------------------------restartGame function------------------------//
//Should call init() to reset board to on load state
function restartGame() {
    
}
//-------------------------------------------------------------------//

//------------------------click event for restartGame------------------------//
//Should call init() to reset board to on load state
restartGameBtn.addEventListener("click", restartGame);
//---------------------------------------------------------------------------//









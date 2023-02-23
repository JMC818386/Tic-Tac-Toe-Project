//Build a tic-tac-toe game


//------------------------Initialize variables------------------------//
//Visual indicator to show which player's turn it is

//appContainer contains entire game in one div
let gameBoard = document.getElementById("appContainer");
console.log(gameBoard);
gameBoard.className = "col-12";

//cell0 variable (top left) creates empty div
let cell0 = document.createElement("h1");
gameBoard.appendChild(cell0);
cell0.innerText = "X"
cell0.className = "cell col-4 d-flex justify-content-center align-items-center border border-3";

//cell1 variable (top center)
let cell1 = document.createElement("h1");
gameBoard.appendChild(cell1);
cell1.innerText = "X";
cell1.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell2 variable (top right)
let cell2 = document.createElement("h1");
gameBoard.appendChild(cell2);
cell2.innerText = "X"
cell2.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell3 variable (middle left)
let cell3 = document.createElement("h1");
gameBoard.appendChild(cell3);
cell3.innerText = "X"
cell3.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell4 variable (middle center)
let cell4 = document.createElement("h1");
gameBoard.appendChild(cell4);
cell4.innerText = "X"
cell4.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell5 variable (middle right)
let cell5 = document.createElement("h1");
gameBoard.appendChild(cell5);
cell5.innerText = "X"
cell5.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell6 variable (bottom left)
let cell6 = document.createElement("h1");
gameBoard.appendChild(cell6);
cell6.innerText = "X"
cell6.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell7 variable (bottom center)
let cell7 = document.createElement("h1");
gameBoard.appendChild(cell7);
cell7.innerText = "X"
cell7.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//cell8 variable (bottom right)
let cell8 = document.createElement("h1");
gameBoard.appendChild(cell8);
cell8.innerText = "X"
cell8.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";

//-------------------------------------------------------------------//

let resetBtn = document.createElement("h1");
gameBoard.appendChild(cell8);
cell8.innerText = "X"
cell8.className = "cell col-4 d-flex justify-content-center align-items-center border border-4";



//------------------------init() function------------------------//
//init() function to initialize game board
//Render game board with empty squares
//Each square should have listeners for click event
//Restart button will appear once either player wins or game draws
//Restart button will call init() to return game to empty squares
function initializeBoard() {

}
//--------------------------------------------------------------//


//------------------------Game State------------------------//
let gameState = 
//------------------------------------------------------------------//


//------------------------checkWin() function------------------------//
//checkWin() function to determine if either player has met any win condition
//Calls winConditions to see if player has won
//Should run on every move
function checkWin() {

}
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
//------------------------------------------------------------------//


//------------------------endGame() function------------------------//
//Displays the winner of the game
//Removes eventListeners from all tiles
function endGame() {

}
//-------------------------------------------------------------------//


//------------------------makeMove() function------------------------//
//makeMove() adds the current player to the square they clicked
//Should initiate checkWin() on every move
//Should initiate switchPlayer()
function makeMove() {


//------------------------switchPlayer() function------------------------//
//Visual indicator to show which player's turn it is
    function switchPlayer() {

    }
}
//-------------------------------------------------------------------//



//------------------------restartGame function------------------------//
//Should call init() to reset board to on load state
function restartGame() {

}
//-------------------------------------------------------------------//


//------------------------click events for each square------------------------//
cell0.addEventListener("click", makeMove);
cell1.addEventListener("click", makeMove);
cell2.addEventListener("click", makeMove);
cell3.addEventListener("click", makeMove);
cell4.addEventListener("click", makeMove);
cell5.addEventListener("click", makeMove);
cell6.addEventListener("click", makeMove);
cell7.addEventListener("click", makeMove);
cell8.addEventListener("click", makeMove);
//Should call init() to reset board to on load state
restartGameBtn.addEventListener("click", restartGame);
//---------------------------------------------------------------------------//









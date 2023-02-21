# **Tic-Tac-Toe Project**

## **Questions**
- Should the “Restart Game” button be visible before the  first box is clicked?
- Should each game tile be represented as an index in an array?
- How do I make a tile that has been clicked unclickable for the remainder of the game?
- How do I switch between player turns? (state?)


## **Concept**
- Build a tic-tac-toe game using JavaScript, HTML and Bootstrap.

## **Objectives/Requirements**
- Use only one single `<div id=”app”></div>` in index.HTML
- Use Javascript to:
- Dynamically render elements
- Keep track of board status
- Display win conditions
- Manage state
- Final design should be as close to the provided wireframe as possible
- A visual indication of which players turn it is
- A “Restart Game” button that does not refresh the page
- During the game:
    - Each game tile should only be clickable once
    - Game continues until one of the players places three of their symbols in a line (horizontal, vertical, diagonal)
        - OR
    - There are no remaining open game tiles
- On each players turn:
    - That player places their symbol on an unoccupied space by clicking inside the game tile
- Once game has ended:
    - No game tile should be clickable
    - UI should display winner if applicable
        - OR
    - UI should display draw/cat if there is no winner

## **User Story**
- Player 1 and 2 open the page (assume both players are using same display and input device)
- **On page load:**
    - Indicator that it is Players X’s turn (playerIndicator)
		- Indicator displays “Player X’s Turn”
	- Prompt displaying instructions (`<h2>`)
		- (“Player X: click a box to place an X and begin the game”)
- **Game begins:**
	- Player 1 clicks a game tile <eventListener>
		- An “X” appears in tile that was clicked

    - Indicator displays “Player O’s Turn”
	- Player 2 clicks an open game tile
		- An “O” appears in tile that was clicked
	- Indicator displays “Player X’s Turn”
- Continue alternating player turns until:
	- Either player 1 or 2 have placed 3 of their symbols in a straight line
	- (horizontal, vertical, diagonal)
        - OR
	- All game tiles have been clicked


## **HTML/CSS**
**Atoms**
- Individual tiles [array?]

-       `<div class=”container”>`  
    -       `<div class=”row”></div>`  
        - 		    `<div class=”col-4”></div>`

## **Organisms**
- Tiles (9 total | 3x3)
- Restart Button
- Board

## **Variables**
- State
- gameTiles = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
- boardState = [ ] (Nine squares)
- currentPlayer
- restartBtn

## **Functions**
- init()
- checkWin()
- switchPlayer()
	- If currentPlayer == ‘X’
		- currentPlayer = ‘O’
		- Else
			- currentPlayer = ‘X’
- makeMove()
	- Adds the current player to the tile checked
	- checkWin()
		- If win the do endGame()
		- Else
			- Switch currentPlayer in state
			- Remove event listener from tile that was clicked
- endGame()
	- Display winner of the game
	- Remove event listeners from all tiles
	- Show restart game btn
	
- restartGame()
	- Display empty board
	- Resets state to initial values
	- All tiles empty
	- All tiles clickable
	- Player X’s turn

- init()
	- Display empty board
	- Each tile displayed has an event listener (click)







//Start Program  
START

        INIT	
        SET all squares empty and unclicked
        SET state to playerX

        DISPLAY empty board
        DISPLAY prompt for playerX to click a square

        INPUT playerX clicks a square

        IF playerX clicks an open square
            THEN render “X” to square that was clicked
        ENDIF

        SET state to playerO

        INPUT playerO clicks an open square

        IF playerO clicks a square
            THEN render “O” to square that was clicked
        ENDIF
            
        IF playerX connects 3 squares in straight line
            THEN end game
        DISPLAY playerX wins
        ELSEIF playerO connects 3 squares in straight line
            THEN end game
            DISPLAY playerO wins
        ENDIF

        IF all squares are clicked and neither playerX or playerO have connected 3 squares in straight line
            THEN end game
            DISPLAY draw
        ENDIF

        IF either player wins or the game is a draw
            THEN DISPLAY reset button
        ENDIF

    END
//End Program

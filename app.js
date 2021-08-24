class Tile {
    constructor(playerMark='—') {
        this.playerMark = playerMark;
    }
}

class Gameboard {
    
    tilesArray = [
        [new Tile(), new Tile(), new Tile()],
        [new Tile(), new Tile(), new Tile()],
        [new Tile(), new Tile(), new Tile()]
    ];

    playerMark = 'X'; // X starts the game

    constructor() {}

    createGameboard() {
        console.table(this.tilesArray);
    }

    addPlayerMark(playerMark, row, col) {
        this.tilesArray[row][col].playerMark = playerMark;
    }

    checkForWin(playerMark, row, col) {

        let horizontal = this.tilesArray[row].every( tileCol => tileCol.playerMark === playerMark );
        let vertical = this.tilesArray.every( tileRow => tileRow[col].playerMark === playerMark );
        let diagonalDown = Array.from( [this.tilesArray[0][0], this.tilesArray[1][1], this.tilesArray[2][2]] );
        let diagonalUp = Array.from( [this.tilesArray[2][0], this.tilesArray[1][1], this.tilesArray[0][2]] )
        diagonalDown = diagonalDown.every( tile => tile.playerMark === playerMark);
        diagonalUp = diagonalUp.every( tile => tile.playerMark === playerMark);

        let winConditions = [horizontal, vertical, diagonalDown, diagonalUp];
        return winConditions.some( condition => condition === true );

    }

    checkForTie() {
        let allTiles = this.tilesArray.flat();
        return allTiles.every( tile => tile.playerMark !== '—' );
    }

    changePlayer() {
        if (this.playerMark === 'X') {
            this.playerMark = 'O';
        } else if (this.playerMark === 'O') {
            this.playerMark = 'X';
        };
    }
    
}

////////////////////////////////////////////////////////////
// THE GAME
////////////////////////////////////////////////////////////

function gameCycle() {

    // Player marks tile
    let row = parseInt( prompt(`${thisGame.playerMark} Choose your row`) );
    let col = parseInt( prompt(`${thisGame.playerMark} Choose your column`) );
    thisGame.addPlayerMark(thisGame.playerMark, row, col);

    // Check for win condition
        // First checks for winning arrangement
        // Then checks for a tie
    // If either are true, announces winner or tie and ends the game
    // If both are false, continues the game

    if ( thisGame.checkForWin(thisGame.playerMark, row, col) === true) {
        console.log(`${thisGame.playerMark} wins!`);
        return; // Ends the game
    } else if ( thisGame.checkForTie(thisGame.playerMark) === true ) {
        console.log('Tie! No winner!');
        return; // Ends the game
    } else {
        // Else change player and continue game cycle
        thisGame.changePlayer();
        gameCycle();
    }
}

////////////////////////////////////////////////////////////
// CREATE AND START THE GAME
////////////////////////////////////////////////////////////

// Create new board
let thisGame = new Gameboard;
thisGame.createGameboard();
gameCycle();

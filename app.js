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

    playerMark = 'X';

    constructor() {}

    createGameboard() {
        console.table(this.tilesArray);
    }

    addPlayerMark(playerMark, row, col) {
        this.tilesArray[row][col].playerMark = playerMark;
    }

    checkForWin(playerMark, row, col) {
        if (this.tilesArray[row][0].playerMark === playerMark && this.tilesArray[row][1].playerMark === playerMark && this.tilesArray[row][2].playerMark === playerMark) {
            return true;
        } else if (this.tilesArray[0][col].playerMark === playerMark && this.tilesArray[1][col].playerMark === playerMark && this.tilesArray[2][col].playerMark === playerMark) {
            return true;
        } else if (this.tilesArray[0][0].playerMark === playerMark && this.tilesArray[1][1].playerMark === playerMark && this.tilesArray[2][2].playerMark === playerMark) {
            return true;
        } else if (this.tilesArray[2][0].playerMark === playerMark && this.tilesArray[1][1].playerMark === playerMark && this.tilesArray[0][2].playerMark === playerMark) {
            return true;
        }
    }

    checkForTie() {
        if (
            this.tilesArray[0][0].playerMark !== '—' && this.tilesArray[0][1].playerMark !== '—' && this.tilesArray[0][2].playerMark !== '—' &&
            this.tilesArray[1][0].playerMark !== '—' && this.tilesArray[1][1].playerMark !== '—' && this.tilesArray[1][2].playerMark !== '—' && 
            this.tilesArray[2][0].playerMark !== '—' && this.tilesArray[2][1].playerMark !== '—' && this.tilesArray[2][2].playerMark !== '—'
        ) {
            return true;
        }
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
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// FUNCTIONAL MECHANICS

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
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// THE GAME

// Create new board
let thisGame = new Gameboard;
thisGame.createGameboard();

// X starts the game
// let playerMark = 'X';

gameCycle();

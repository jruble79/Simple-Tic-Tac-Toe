class Tile {
    constructor(playerMark='—') {
        this.playerMark = playerMark;
    }
}

let tilesArray = [
    [new Tile(), new Tile(), new Tile()],
    [new Tile(), new Tile(), new Tile()],
    [new Tile(), new Tile(), new Tile()]
];

class Gameboard {
    constructor(){}
    get gameboard() {
        return this.createGameboard();
    }
    createGameboard() {
        return console.table(tilesArray);
    }
    addPlayerMark(playerMark, row, col) {
        return tilesArray[row][col].playerMark = playerMark;
    }
    
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// FUNCTIONAL MECHANICS

function gameCycle() {

    // Player marks tile
    let row = parseInt( prompt(`${playerMark} Choose your row`) );
    let col = parseInt( prompt(`${playerMark} Choose your column`) );
    thisGame.addPlayerMark(playerMark, row, col);

    // Check for win condition
        // First checks for winning arrangement
        // Then checks for a tie
    // If either are true, announces winner or tie and ends the game
    // If both are false, continues the game

    if ( checkForWin(row, col) === true) {
        console.log(`${playerMark} wins!`);
        return; // Ends the game
    } else if ( checkForTie() === true ) {
        console.log('Tie! No winner!');
        return; // Ends the game
    } else {
        // Else change player and continue game cycle
        changePlayer();
        gameCycle();
    }
}

function checkForWin(row, col) {
    
    if (tilesArray[row][0].playerMark === playerMark && tilesArray[row][1].playerMark === playerMark && tilesArray[row][2].playerMark === playerMark) {
        return true;
    } else if (tilesArray[0][col].playerMark === playerMark && tilesArray[1][col].playerMark === playerMark && tilesArray[2][col].playerMark === playerMark) {
        return true;
    } else if (tilesArray[0][0].playerMark === playerMark && tilesArray[1][1].playerMark === playerMark && tilesArray[2][2].playerMark === playerMark) {
        return true;
    } else if (tilesArray[2][0].playerMark === playerMark && tilesArray[1][1].playerMark === playerMark && tilesArray[0][2].playerMark === playerMark) {
        return true;
    }

}

function checkForTie() {
    if (
        tilesArray[0][0].playerMark !== '—' && tilesArray[0][1].playerMark !== '—' && tilesArray[0][2].playerMark !== '—' &&
        tilesArray[1][0].playerMark !== '—' && tilesArray[1][1].playerMark !== '—' && tilesArray[1][2].playerMark !== '—' && 
        tilesArray[2][0].playerMark !== '—' && tilesArray[2][1].playerMark !== '—' && tilesArray[2][2].playerMark !== '—'
    ) {
        return true;
    }
}

function changePlayer() {
    if (playerMark === 'X') {
        playerMark = 'O';
    } else if (playerMark === 'O') {
        playerMark = 'X';
    };
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// THE GAME

// Create new board
let thisGame = new Gameboard;
thisGame.gameboard;

// X starts the game
let playerMark = 'X';

gameCycle();

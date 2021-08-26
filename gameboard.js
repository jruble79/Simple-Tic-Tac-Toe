
////////////////////////////////////////////////////////////
// THE GAME PIECES
////////////////////////////////////////////////////////////

class Tile {
    constructor(playerMark = '—') {
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
        if ( this.tilesArray[row][col].playerMark !== '—' ) {
            alert('This tile has already been claimed');
            endgameCheck();
        } else {
            this.tilesArray[row][col].playerMark = playerMark;
        }
    }

    checkForWin(playerMark, row, col) {

        let horizontal = this.tilesArray[row].every( tileCol => tileCol.playerMark === playerMark );
        let vertical = this.tilesArray.every( tileRow => tileRow[col].playerMark === playerMark );
        let diagonalDown = Array.from( [this.tilesArray[0][0], this.tilesArray[1][1], this.tilesArray[2][2]] );
        let diagonalUp = Array.from( [this.tilesArray[2][0], this.tilesArray[1][1], this.tilesArray[0][2]] )
        diagonalDown = diagonalDown.every( tile => tile.playerMark === playerMark);
        diagonalUp = diagonalUp.every( tile => tile.playerMark === playerMark);

        let winConditions = [horizontal, vertical, diagonalDown, diagonalUp];
        return winConditions.some( condition => condition === true ); // Returns Boolean
    }

    checkForTie() {
        let allTiles = this.tilesArray.flat();
        return allTiles.every( tile => tile.playerMark !== '—' ); // Returns Boolean
    }

    changePlayer() {
        this.playerMark === 'X' ? this.playerMark = 'O' : this.playerMark = 'X';
    }
}


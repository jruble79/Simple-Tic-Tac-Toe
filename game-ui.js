
////////////////////////////////////////////////////////////
// THE GAME EXPERIENCE
////////////////////////////////////////////////////////////

import { Gameboard } from './gameboard.js';
import { endgameCheck, markTile } from './game-cycle.js';

// Create new board
let thisGame = new Gameboard;

function runGame(e) {
    let row = parseInt(e.target.dataset.row);
    let col = parseInt(e.target.dataset.col);

    if ( markTile(thisGame, row, col) === false ) {
        return; // Tile already marked. Choose another tile.
    } else {
        e.target.textContent = thisGame.playerMark;
        if ( endgameCheck(row, col, thisGame) === true ) {
            document.querySelector('#board').removeEventListener('click', runGame);
        }
    }
}

// Apply playerMark to DOM and run game cycle
document.querySelector('#board').addEventListener('click', runGame);

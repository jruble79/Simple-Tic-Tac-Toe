
////////////////////////////////////////////////////////////
// THE GAME EXPERIENCE
////////////////////////////////////////////////////////////

import { Gameboard } from './gameboard.js';
import { markTile } from './game-cycle.js';

// Create new board
let thisGame = new Gameboard;

function getTileLocation(e) {
    let row = parseInt(e.target.dataset.row);
    let col = parseInt(e.target.dataset.col);
    markTile(thisGame, row, col);
}

function displayPlayerMark(e) {
    e.target.textContent = thisGame.playerMark;
}

// Apply playerMark to DOM
document.querySelector('#board').addEventListener('click', displayPlayerMark);
document.querySelector('#board').addEventListener('click', getTileLocation);

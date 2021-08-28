
////////////////////////////////////////////////////////////
// THE GAME EXPERIENCE
////////////////////////////////////////////////////////////

import { Gameboard } from './gameboard.js';
import { endgameCheck, markTile } from './game-cycle.js';

// Create new board
let thisGame = new Gameboard;
setTimeout(revealGrid, 25);

function runGame(e) {
    let row = parseInt(e.target.dataset.row);
    let col = parseInt(e.target.dataset.col);

    if ( markTile(thisGame, row, col) === false ) {
        return; // Tile already marked. Choose another tile.
    } else {
        addFlapTile(e, row, col);
        setTimeout( changePlayerCue, 500 );
        if ( endgameCheck(row, col, thisGame) === true ) {
            document.querySelector('#board').removeEventListener('click', runGame);
            setTimeout( announceEndgame, 500 );
        }
    }
}

function revealGrid() {
    const horizontals = Array.from(document.getElementsByClassName('hl'));
    const verticals = Array.from(document.getElementsByClassName('vl'));

    horizontals.forEach(line => line.classList.add('hopen'));
    verticals.forEach(line => line.classList.add('vopen'));
}

function addFlapTile(e, row, col) {

    e.target.innerHTML = `
    <div id="${row}${col}" class="scene">
        <div class="tile top">
            <div class="tile__face front">${thisGame.playerMark}</div>
            <div class="tile__face back"></div>
        </div>
        <div class="tile bottom flap">
            <div class="tile__face front shift">
                <div>${thisGame.playerMark}</div>
            </div>
            <div class="tile__face back"></div>
        </div>
    </div>
    `;

    setTimeout( flapThatTile, 50, row, col );
}

function flapThatTile(row, col) {
    let thisTile = document.getElementById(`${row}${col}`);
    let flapper = thisTile.querySelector('.bottom');
    let shader = flapper.querySelector('.back');

    flapper.classList.remove('flap');
    shader.classList.add('bflap');

    let frontTiles = Array.from( thisTile.getElementsByClassName('front') );
    frontTiles.forEach(frontTile => frontTile.classList.add('fflap'));
}

function changePlayerCue() {
    document.querySelector('h1').innerText = `Turn: ${thisGame.playerMark}`;
}

function announceEndgame() {
    document.querySelector('h1').innerText = `${thisGame.playerMark} WINS!`;
}

// Apply playerMark to DOM and run game cycle
document.querySelector('#board').addEventListener('click', runGame);

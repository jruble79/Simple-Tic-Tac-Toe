
////////////////////////////////////////////////////////////
// THE GAME EXPERIENCE
////////////////////////////////////////////////////////////

import { Tile, Gameboard } from './gameboard.js';
import { markTile, endgameCheck } from './game-cycle.js';

// Create new board
let thisGame = new Gameboard;
markTile(thisGame);
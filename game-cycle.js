
////////////////////////////////////////////////////////////
// THE GAME FUNCTIONS
////////////////////////////////////////////////////////////

function markTile(thisGame, row, col) {
    // Player marks tile
    if ( thisGame.addPlayerMark(thisGame.playerMark, row, col) === false ) {
        return false;
    };
}

function endgameCheck(row, col, thisGame) {
    // Check for endgame condition
        // First checks for winning arrangement
        // Then checks for a tie
    // If either are true, announces winner or tie and ends the game
    // If both are false, continues the game

    if ( thisGame.checkForWin( thisGame.playerMark, row, col) === true ) {
        console.log(`${thisGame.playerMark} wins!`);
        return true; // Ends the game
    } else if ( thisGame.checkForTie(thisGame.playerMark) === true ) {
        console.log('Tie! No winner!');
        return true; // Ends the game
    } else {
        // Else change player and continue game cycle
        thisGame.changePlayer();
    }
}

export { markTile, endgameCheck };
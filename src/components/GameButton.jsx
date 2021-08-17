import React from "react";

const GameButton = ({
    handleStartGame,
    handleResetGame,
    isGameStarted,
    isGameWon,
}) => {
    // If game is not started, set game button to START GAME
    if (!isGameStarted) {
        return (
            <button className="button" onClick={handleStartGame}>
                START GAME
            </button>
        );
        // If game is won, set game button offer player to play again
    } else if (isGameWon) {
        return (
            <>
                <div>YOU WIN!</div>
                <button className="button" onClick={handleResetGame}>
                    PLAY AGAIN
                </button>
            </>
        );
    } else {
        // Game in progress, set game button to RESET GAME should the player wish to restart game during play
        return (
            <button className="button" onClick={handleResetGame}>
                RESET GAME
            </button>
        );
    }
};

export default GameButton;

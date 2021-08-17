import React from "react";

const StartButton = ({
    handleStartGame,
    isGameStarted,
    handleResetGame,
    isGameWon,
}) => {
    if (!isGameStarted) {
        return (
            <button className="button" onClick={handleStartGame}>
                START GAME
            </button>
        );
    } else if (isGameWon) {
        return (
            <>
                <div>YOU WIN!</div>
                <button className="button" onClick={handleResetGame}>
                    PLAY AGAIN
                    {/* {isGameWon ? alert("You win!") : null}
                {!isGameWon ? "RESET GAME" : "PLAY AGAIN"} */}
                </button>
            </>
        );
    } else {
        return (
            <button className="button" onClick={handleResetGame}>
                RESET GAME
                {/* {isGameWon ? alert("You win!") : null}
                {!isGameWon ? "RESET GAME" : "PLAY AGAIN"} */}
            </button>
        );
    }
};

export default StartButton;

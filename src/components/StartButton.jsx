import React from "react";

const StartButton = ({ handleStartGame, isGameStarted, handleResetGame }) => {
    if (!isGameStarted) {
        return (
            <button className="button" onClick={handleStartGame}>
                START GAME
            </button>
        );
    } else {
        return (
            <button className="button" onClick={handleResetGame}>
                RESET GAME
            </button>
        );
    }
};

export default StartButton;

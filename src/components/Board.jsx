import React from "react";
import Tile from "./Tile";
import "../App.css";
import StartButton from "./StartButton";

const Board = ({
    gameBoard,
    handleTileClick,
    handleStartGame,
    handleResetGame,
    isGameStarted,
    isGameWon,
}) => {
    const arrayOfTiles = gameBoard.map((tile, index) => {
        return (
            <Tile key={index + 1} tile={tile} handleTileClick={handleTileClick} />
        );
    });

    return (
        <>
            <h3>Game Board Size: 4x4</h3>
            <StartButton
                handleStartGame={handleStartGame}
                handleResetGame={handleResetGame}
                isGameStarted={isGameStarted}
                isGameWon={isGameWon}
            />
            <div className="board-container">{arrayOfTiles}</div>
        </>
    );
};

export default Board;

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
    const arrayOfTiles = gameBoard.map((index) => {
        return index !== gameBoard.length ? (
            <Tile key={index} tile={index} handleTileClick={handleTileClick} />
        ) : (
            <Tile key={index} tile={" "} handleTileClick={handleTileClick} />
        );
    });

    return (
        <>
            <h3>Game Board Size: 4x4</h3>
            <StartButton
                handleStartGame={handleStartGame}
                isGameStarted={isGameStarted}
                handleResetGame={handleResetGame}
                isGameWon={isGameWon}
            />
            <div className="board-container">{arrayOfTiles}</div>
        </>
    );
};

export default Board;

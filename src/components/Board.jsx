import React from "react";
import Tile from "./Tile";
import GameButton from "./GameButton";

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
            <GameButton
                className="game-button"
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

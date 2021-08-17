import React, { useState } from "react";

import Board from "../components/Board";

import { swapArrayElements } from "../services/swapArrayElements";
import { shuffleArray } from "../services/shuffleArray";
import { compareArrays } from "../services/compareArrays";

const GameContainer = () => {
    const winningBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " "];

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);
    const [gameBoard, setGameBoard] = useState([...winningBoard]);
    const [tileSpace, setTileSpace] = useState();

    // Handle Start of Game Setup
    const handleStartGame = () => {
        setIsGameStarted(true);
        setIsGameWon(false);
        const shuffledBoard = shuffleArray([...winningBoard]);
        setGameBoard(shuffledBoard);
        setTileSpace(shuffledBoard.indexOf(" ") + 1);
    };

    // Handle resetting the game either during game or after a win
    const handleResetGame = () => {
        // Reset after game won and playing another game
        !isGameWon &&
        !confirm("Click OK to reset game or Cancel to continue with current game")
            ? null // If game is still in progress and confirm to reset was a cancel
            : (setIsGameStarted(false), setGameBoard([...winningBoard])); // otherwise game was won or clicked ok to reset game
    };

    // Handle tile clicked
    const handleTileClick = (tileNumberClicked) => {
        if (!isGameStarted || isGameWon) return;

        tileNumberClicked = gameBoard.indexOf(tileNumberClicked) + 1;
        setTileSpace(gameBoard.indexOf(" ") + 1);

        // Check if tile clicked has the space tile next to it defined as a space before, space after, space above or space below
        if (
            (tileNumberClicked + 1 === tileSpace &&
                tileNumberClicked % 4 !== 0) ||
            (tileNumberClicked - 1 === tileSpace && tileSpace % 4 !== 0) ||
            tileNumberClicked + 4 === tileSpace ||
            tileNumberClicked - 4 === tileSpace
        ) {
            // if it is a valid click move then swap space tile with the tile number clicked and update the tilespace location
            setGameBoard(
                swapArrayElements(gameBoard, tileSpace - 1, tileNumberClicked - 1)
            );
            setTileSpace(tileNumberClicked);
        }

        // Check if game won by comparing current game board status with winning board
        if (compareArrays(winningBoard, gameBoard)) {
            setIsGameWon(true);
        }
    };

    return (
        <div className="game-container">
            <h1>Slider Puzzle Game</h1>

            <Board
                gameBoard={gameBoard}
                handleTileClick={handleTileClick}
                handleStartGame={handleStartGame}
                handleResetGame={handleResetGame}
                isGameStarted={isGameStarted}
                isGameWon={isGameWon}
            />
        </div>
    );
};

export default GameContainer;

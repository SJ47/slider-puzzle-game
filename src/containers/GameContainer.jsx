import React, { useState } from "react";
import Board from "../components/Board";

const GameContainer = () => {
    // State and variables
    const [winningBoard, setWinningBoard] = useState([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        " ",
    ]);

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [gameBoard, setGameBoard] = useState([...winningBoard]);
    const [tileSpace, setTileSpace] = useState(gameBoard.indexOf(" ") + 1);
    const [isGameWon, setIsGameWon] = useState(false);

    // Functions
    function shuffleArray(array) {
        // return array; // TODO: Remove line
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const handleStartGame = () => {
        setIsGameStarted(true);
        setIsGameWon(false);
        const prevGameBoard = gameBoard.slice();
        setGameBoard(shuffleArray(prevGameBoard));
        setTileSpace(gameBoard.indexOf(" ") + 1);
    };

    const handleResetGame = () => {
        // Reset after game won and playing another game
        if (isGameWon) {
            setIsGameStarted(false);
            setGameBoard([...winningBoard]);
        }
        // Reset game during play and confirm with user to reset
        else {
            if (
                confirm(
                    "Click OK to reset game or Cancel to continue with current game"
                )
            ) {
                setIsGameStarted(false);
                setGameBoard([...winningBoard]);
            }
        }
    };

    const swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };

    const gameWon = (a, b) => {
        return (
            Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])
        );
    };

    const handleTileClick = (tileNumberClicked) => {
        if (!isGameStarted || isGameWon) return;
        tileNumberClicked = gameBoard.indexOf(tileNumberClicked) + 1; //4

        console.log("Gameboard: ", gameBoard);
        console.log("Tile space is: ", tileSpace);
        console.log("Tile number clicked is: ", tileNumberClicked);
        // Check if tile clicked has the space tile next to it defined as a space before, space after, space above or space below
        if (
            (tileNumberClicked + 1 === tileSpace &&
                tileNumberClicked % 4 !== 0) ||
            (tileNumberClicked - 1 === tileSpace && tileSpace % 4 !== 0) ||
            tileNumberClicked + 4 === tileSpace ||
            tileNumberClicked - 4 === tileSpace
        ) {
            // const prevTileSpace = tileSpace - 1;
            // setTileSpace(prevTileSpace - 1);
            setGameBoard(
                swapArrayElements(
                    gameBoard,
                    tileSpace - 1,
                    tileNumberClicked - 1
                )
            );

            setTileSpace(tileNumberClicked);
        }
        // Check if game won
        // if (gameWon(winningBoard, gameBoard)) {
        //     setIsGameWon(true);
        //     // alert("Congratulations!  You Won!!");
        //     // Set a flag here so game cannot continue or button to start another game
        // }
    };

    // setTileSpace(gameBoard.indexOf(" ") + 1);
    return (
        <div className="game-container">
            <h1>Slider Puzzle Game</h1>

            <Board
                gameBoard={gameBoard}
                handleTileClick={handleTileClick}
                handleStartGame={handleStartGame}
                isGameStarted={isGameStarted}
                handleResetGame={handleResetGame}
                isGameWon={isGameWon}
            />
        </div>
    );
};

export default GameContainer;

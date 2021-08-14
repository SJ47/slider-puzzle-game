import React, { useState } from "react";
import Board from "../components/Board";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const GameContainer = () => {
    // const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // 4 x 4 board for 15 tiles and 1 blank

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

    const [gameBoard, setGameBoard] = useState([...winningBoard]);

    // const [tileSpace, setTileSpace] = useState(gameBoard.indexOf(16) + 1);
    const [tileSpace, setTileSpace] = useState(gameBoard.indexOf(" ") + 1);
    console.log("Current tile space is: ", tileSpace);
    // const gameBoardSize = gameBoard.length;

    // Functions

    const swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        console.log("Swapped array: ", arr);
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
        tileNumberClicked = gameBoard.indexOf(tileNumberClicked) + 1;

        console.log("Tile clicked", tileNumberClicked);
        console.log("gameBoard", gameBoard);
        console.log("Tile space: ", tileSpace);

        // Check if tile clicked has the space tile next to it defined as a space before, space after, space above or space below
        if (
            (tileNumberClicked + 1 === tileSpace &&
                tileNumberClicked % 4 !== 0) ||
            (tileNumberClicked - 1 === tileSpace && tileSpace % 4 !== 0) ||
            tileNumberClicked + 4 === tileSpace ||
            tileNumberClicked - 4 === tileSpace
        ) {
            console.log("Valid move");

            setGameBoard(
                swapArrayElements(
                    gameBoard,
                    tileSpace - 1,
                    tileNumberClicked - 1
                )
            );

            setTileSpace(tileNumberClicked); // 12
        } else {
            console.log("WRONG MOVE!! ");
        }
        console.log("gameBoard", gameBoard);
        console.log("winningBoard", winningBoard);
        console.log(
            "tilespace ",
            tileSpace,
            " : tile number clicked",
            tileNumberClicked
        );

        // Check if game won
        if (gameWon(winningBoard, gameBoard)) {
            alert("Game won!");
            // Set a flag here so game cannot continue or button to start another game
        }
    };

    return (
        <div>
            <h1>Slider Puzzle Game</h1>
            <Board gameBoard={gameBoard} handleTileClick={handleTileClick} />
        </div>
    );
};

export default GameContainer;

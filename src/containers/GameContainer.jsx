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

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }

    // State and variables

    const [winningBoard, setWinningBoard] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ]);

    const [gameBoard, setGameBoard] = useState(winningBoard);

    const [tileSpace, setTileSpace] = useState(gameBoard.indexOf(16) + 1);
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

    const handleTileClick = (tileNumberClicked) => {
        tileNumberClicked = gameBoard.indexOf(tileNumberClicked) + 1;

        console.log("Tile clicked", tileNumberClicked);
        console.log("gameBoard", gameBoard);
        console.log("Tile space: ", tileSpace);

        // Check if tile clicked has the space tile next to it defined as a space before, space after, space above or space below
        if (
            tileNumberClicked + 1 === tileSpace ||
            tileNumberClicked - 1 === tileSpace ||
            tileNumberClicked + 4 === tileSpace ||
            tileNumberClicked - 4 === tileSpace
        ) {
            console.log(
                "Valid move: ",
                gameBoard,
                " : ",
                tileSpace,
                " : ",
                tileNumberClicked
            );
            setGameBoard(
                swapArrayElements(
                    gameBoard,
                    tileSpace - 1,
                    tileNumberClicked - 1
                )
            );
            // const tempTileSpace = tileSpace; // 16
            // const tempTileNumberClicked = tileNumberClicked;
            setTileSpace(tileNumberClicked); // 12
            // gameBoard[tileNumberClicked - 1] = tempTileSpace;
            // gameBoard[tileNumberClicked - 4] = tempTileNumberClicked;
        } else {
            console.log("WRONG MOVE!! ");
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

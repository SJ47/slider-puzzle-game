import React from "react";
import Tile from "./Tile";
import "../App.css";

const Board = ({ handleTileClick }) => {
    // const gameBoardSize = new Array(16); // 4 x 4 board for 15 tiles and 1 blank

    const gameBoardSize = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]; // 4 x 4 board for 15 tiles and 1 blank

    const arrayOfTiles = gameBoardSize.map((tile, index) => {
        return index + 1 !== gameBoardSize.length ? (
            <Tile
                key={index}
                tile={index + 1}
                handleTileClick={handleTileClick}
            />
        ) : (
            <Tile key={index} tile="-" handleTileClick={handleTileClick} />
        );
    });

    console.log(arrayOfTiles);

    return (
        <>
            <h2>Game Board 4x4</h2>
            <div className="board-container">{arrayOfTiles}</div>
        </>
    );
};

export default Board;

import React, { useEffect } from "react";
import Tile from "./Tile";
import "../App.css";

const Board = ({ gameBoard, handleTileClick }) => {
    const arrayOfTiles = gameBoard.map((index) => {
        return index !== gameBoard.length ? (
            <Tile key={index} tile={index} handleTileClick={handleTileClick} />
        ) : (
            <Tile key={index} tile={" "} handleTileClick={handleTileClick} />
        );
    });

    console.log("Mamma", arrayOfTiles);

    return (
        <>
            <h2>Game Board 4x4</h2>
            <div className="board-container">{arrayOfTiles}</div>
        </>
    );
};

export default Board;

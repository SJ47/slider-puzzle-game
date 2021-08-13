import React from "react";
import Board from "../components/Board";

const GameContainer = () => {
    const handleTileClick = (tileNumberClicked) => {
        console.log("Tile clicked", tileNumberClicked);
    };

    return (
        <div>
            <h1>Slider Puzzle Game</h1>
            <Board handleTileClick={handleTileClick} />
        </div>
    );
};

export default GameContainer;

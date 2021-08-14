import React from "react";

const Tile = ({ tile, handleTileClick }) => {
    return (
        <div
            className="tile"
            onClick={(e) => handleTileClick(parseInt(e.target.textContent))}
        >
            {tile}
        </div>
    );
};

export default Tile;

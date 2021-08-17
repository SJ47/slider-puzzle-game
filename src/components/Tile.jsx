import React from "react";

const Tile = ({ tile, handleTileClick }) => {
    return (
        <div className="tile" onClick={() => handleTileClick(tile)}>
            {tile}
        </div>
    );
};

export default Tile;

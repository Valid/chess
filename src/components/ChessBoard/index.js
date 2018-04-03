import React from 'react';
import Tile from '../Tile';

const ChessBoard = () => {
  // The standard chessboard is 8x8, so we start by creating an blank array with 64 tiles
  const BOARD_SIZE = 8;
  const gameScaffolding = [...Array(BOARD_SIZE * BOARD_SIZE)];
  return (
    <div className="chessboard">
      {gameScaffolding.map((tile, index) => {
        // Store the [x, y] coords for each tile
        const coords = [Math.floor(index / BOARD_SIZE), index % BOARD_SIZE];
        return <Tile coords={coords} key={coords} />;
      })}
    </div>
  );
};

export default ChessBoard;

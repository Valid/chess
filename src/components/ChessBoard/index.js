import React, { Component } from 'react';
import isEqual from 'lodash.isequal';
import { shape, arrayOf, oneOfType, string, number, func } from 'prop-types';
import Tile from '../Tile';

class ChessBoard extends Component {
  render() {
    const { active, pieces, selectTile } = this.props;
    const BOARD_SIZE = 8;
    // The standard chessboard is 8 x 8, so we start by creating an blank array with 64 tiles
    const gameScaffolding = [...Array(BOARD_SIZE * BOARD_SIZE)];
    return (
      <div className="chessboard">
        {gameScaffolding.map((tile, index) => {
          // Store the [x, y] coords for each tile
          const coords = [Math.floor(index / BOARD_SIZE), index % BOARD_SIZE];
          // Cross-references passed piece locations to determine where to place them
          const piece = Object.entries(pieces).find((pieceCoords) => isEqual(pieceCoords[1], coords));
          // Check if piece is active (for custom styling)
          const isActive = piece && active && isEqual(piece, active);
          return <Tile coords={coords} key={coords} piece={piece} active={isActive} selectTile={selectTile} />;
        })}
      </div>
    );
  }
}

ChessBoard.defaultProps = {
  active: null,
  pieces: {},
};

ChessBoard.propTypes = {
  active: arrayOf(oneOfType([string.isRequired, arrayOf(number.isRequired)])),
  pieces: shape({}),
  selectTile: func.isRequired,
};

export default ChessBoard;

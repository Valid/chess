import React, { Component } from 'react';
import isEqual from 'lodash.isequal';
import styled from 'styled-components';
import { shape, arrayOf, oneOfType, string, number, func } from 'prop-types';
import Tile from '../Tile';
import { isValidMove } from '../Piece';

// My little easter egg!
const SHOW_HINTS = false;

// The standard chessboard is 8 x 8
const BOARD_SIZE = 8;

class ChessBoard extends Component {
  render() {
    const { active, pieces, fail, succeed, selectTile } = this.props;
    // We start by creating a blank array with 64 tiles
    const gameScaffolding = [...Array(BOARD_SIZE * BOARD_SIZE)];

    return (
      <StyledChessBoard>
        {gameScaffolding.map((tile, index) => {
          // Store the [x, y] coords for each tile
          const coords = [Math.floor(index / BOARD_SIZE), index % BOARD_SIZE];
          // Cross-references passed piece locations to determine where to place them
          const piece = Object.entries(pieces).find((pieceCoords) => isEqual(pieceCoords[1], coords));
          // Check if piece is active (for custom styling)
          const isActive = piece && active && isEqual(piece, active);
          const dark = coords[0] % 2 !== coords[1] % 2;
          return (
            <Tile
              dark={dark}
              coords={coords}
              key={coords}
              piece={piece}
              active={isActive ? active : null}
              validSpace={!!active && isValidMove(active, coords)}
              showHints={SHOW_HINTS && !!active}
              fail={isEqual(fail, coords)}
              succeed={isEqual(succeed, coords)}
              selectTile={selectTile}
            />
          );
        })}
      </StyledChessBoard>
    );
  }
}

// Define chessboard styles
const StyledChessBoard = styled.div`
  border: 0.5rem solid #fff;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(${BOARD_SIZE}, 1fr);
  grid-template-rows: repeat(${BOARD_SIZE}, 1fr);
  margin: auto;
  max-width: 40rem;
  width: 100%;
`;

ChessBoard.defaultProps = {
  fail: null,
  succeed: null,
  active: null,
  pieces: {},
};

ChessBoard.propTypes = {
  fail: arrayOf(number),
  succeed: arrayOf(number),
  active: arrayOf(oneOfType([string.isRequired, arrayOf(number.isRequired)])),
  pieces: shape({}),
  selectTile: func.isRequired,
};

export default ChessBoard;

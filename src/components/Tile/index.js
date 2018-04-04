import React from 'react';
import { func, bool, arrayOf, string, number, oneOfType } from 'prop-types';
import ClassNames from 'classnames';
import Piece from '../Piece';
import './Tile.css';

const Tile = ({ dark, validSpace, coords, piece, active, showHints, fail, succeed, selectTile }) => {
  const thisPiece = piece || null;

  // This colorizes the gameboard when a piece is selected
  return (
    <div
      className={ClassNames({
        chessboard__tile: true,
        'chessboard__tile--dark': dark,
        'chessboard__tile--active': !!active,
        'chessboard__tile--valid': showHints && validSpace,
        'chessboard__tile--invalid': showHints && !validSpace,
        'chessboard__tile--fail': fail,
        'chessboard__tile--succeed': succeed,
      })}
      onClick={() => selectTile(thisPiece, coords)}
    >
      {piece && <Piece type={piece[0]} />}
    </div>
  );
};

export default Tile;

Tile.defaultProps = {
  dark: false,
  validSpace: false,
  piece: null,
  active: null,
  fail: false,
  succeed: false,
  showHints: false,
};

Tile.propTypes = {
  dark: bool,
  validSpace: bool,
  coords: arrayOf(number.isRequired).isRequired,
  piece: arrayOf(oneOfType([string.isRequired, arrayOf(number.isRequired)])),
  active: arrayOf(oneOfType([string.isRequired, arrayOf(number.isRequired)])),
  showHints: bool,
  fail: bool,
  succeed: bool,
  selectTile: func.isRequired,
};

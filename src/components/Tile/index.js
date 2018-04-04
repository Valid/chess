import React from 'react';
import { func, bool, arrayOf, string, number, oneOfType } from 'prop-types';
import ClassNames from 'classnames';
import Piece from '../Piece';
import './Tile.css';

const Tile = ({ coords, piece, active, selectTile }) => {
  const thisPiece = piece || null;
  return (
    <div
      className={ClassNames({
        chessboard__tile: true,
        'chessboard__tile--active': active,
      })}
      onClick={() => selectTile(thisPiece, coords)}
    >
      {piece && <Piece type={piece[0]} />}
    </div>
  );
};

export default Tile;

Tile.defaultProps = {
  piece: null,
  active: false,
};

Tile.propTypes = {
  coords: arrayOf(number.isRequired).isRequired,
  piece: arrayOf(oneOfType([string.isRequired, arrayOf(number.isRequired)])),
  active: bool,
  selectTile: func.isRequired,
};

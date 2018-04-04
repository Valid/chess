import React from 'react';
import { string } from 'prop-types';
import Knight from './Knight';
import Bishop from './Bishop';

import './Piece.css';

export const isValidMove = (piece, endCoords) => {
  // It would be neat to have these in the individual piece components
  // ...but there's something to be said for not over-optimizing unless necessary.

  const type = piece[0];
  const startCoords = piece[1];

  switch (type) {
    case 'knight': {
      // The knight must move one tile in one axis and 2 squares in the other
      const xDelta = Math.abs(startCoords[0] - endCoords[0]);
      const yDelta = Math.abs(startCoords[1] - endCoords[1]);

      const positionDelta = [xDelta, yDelta];

      // Ensure that the delta includes both a single tile and 2 tiles
      return positionDelta.includes(1) && positionDelta.includes(2);
    }
    case 'bishop': {
      // The bishop must move only diagonally
      const xDelta = Math.abs(startCoords[0] - endCoords[0]);
      const yDelta = Math.abs(startCoords[1] - endCoords[1]);

      // The deltas will be identical if movement is diagonal (one down + one right, etc.)
      return xDelta === yDelta;
    }
    default:
      return null;
  }
};

const RenderPiece = (type) => {
  switch (type.type) {
    case 'knight':
      return <Knight />;
    case 'bishop':
      return <Bishop />;
    default:
      return null;
  }
};

const Piece = ({ type }) => (
  <div className="chessboard__piece">
    <RenderPiece type={type} />
  </div>
);

Piece.propTypes = {
  type: string.isRequired,
};

export default Piece;

import React, { Component } from 'react';
import isEqual from 'lodash.isequal';
import ChessBoard from '../components/ChessBoard';
import { isValidMove } from '../components/Piece';

class ChessBoardContainer extends Component {
  constructor(props) {
    super(props);

    // Here you can modify the start position for each piece
    this.state = {
      pieces: {
        knight: [0, 1],
        bishop: [0, 5],
      },
      active: null,
      fail: null,
      succeed: null,
    };

    this.selectTile = this.selectTile.bind(this);
  }
  selectTile(piece, coords) {
    const { active, pieces } = this.state;

    // If same piece, deselect
    if (isEqual(piece, active)) {
      this.setState({ active: null });
      return;
    }
    if (active) {
      // Check if move is valid
      if (!isValidMove(active, coords)) {
        this.setState({ fail: coords });
        return;
      }

      // Check if space is occupied by another piece
      if (Object.entries(pieces).find((pieceCoords) => isEqual(pieceCoords[1], coords))) {
        this.setState({ fail: coords });
        return;
      }

      // All checks done, move that piece!
      this.setState((prevState) => ({
        pieces: {
          // This carries forward existing pieces
          ...prevState.pieces,
          // Then updates the current piece with new coords
          [active[0]]: coords,
        },
        succeed: coords,
        fail: null,
      }));
    }

    // If the user clicked on a new piece, mark it as active and clear success/fail
    this.setState({
      active: piece,
      succeed: null,
      fail: null,
    });
  }
  render() {
    return <ChessBoard {...this.state} selectTile={this.selectTile} />;
  }
}

export default ChessBoardContainer;

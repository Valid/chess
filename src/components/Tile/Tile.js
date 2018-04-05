import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { func, bool, arrayOf, string, number, oneOfType } from 'prop-types';
import Piece from '../Piece';

const Tile = ({ dark, validSpace, coords, piece, active, showHints, fail, succeed, selectTile }) => {
  const thisPiece = piece || null;

  // This colorizes the gameboard when a piece is selected
  return (
    <StyledTile
      dark={dark}
      active={!!active}
      valid={showHints && validSpace}
      invalid={showHints && !validSpace}
      fail={fail}
      succeed={succeed}
      onClick={() => selectTile(thisPiece, coords)}
    >
      {piece && <Piece type={piece[0]} />}
    </StyledTile>
  );
};

export default Tile;

// Define animations for successful/unsuccessful piece moves
const failIndicator = keyframes`
  from {
    background-color: rgba(255, 0, 0, 0.5);
  }
  to {
    background-color: rgba(255, 0, 0, 0);
  }
`;

const successIndicator = keyframes`
  from {
    background-color: rgba(199, 174, 135, 1);
  }
  to {
    background-color: rgba(199, 174, 135, 0);
  }
`;

// Define Tile styles
const StyledTile = styled.div`
  background-color: #f8f3ea;
  box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  position: relative;
  transition: box-shadow 250ms ease;
  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
  &:before {
    background-color: rgba(0, 0, 0, 0);
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    transition: background-color 250ms ease;
    width: 100%;
  }
  ${(props) => !props.active && css`
      &:hover {
        box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, 0.1);
      }
    `};
  ${(props) => props.dark && 'background-color: #ecdfcb'};
  ${(props) => props.active && css`
    background-color: #c7ae87;
    box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, 0.5);
    `};
  ${(props) => props.valid && css`
      &:before {
        background-color: rgba(0, 255, 0, 0.15);
      }
    `};
  ${(props) => props.invalid && css`
      &:before {
        background-color: rgba(255, 0, 0, 0.15);
      }
    `};
  ${(props) => props.fail && css`
      &:before {
        animation: ${failIndicator} 1s ease 1;
      }
    `};
  ${(props) => props.succeed && css`
      &:before {
        animation: ${successIndicator} 1s ease 1;
      }
    `};
`;

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

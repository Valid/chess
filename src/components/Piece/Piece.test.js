/* global describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import Piece, { isValidMove } from './Piece';

describe('ChessBoard Tile', () => {
  it('renders without crashing', () => {
    const output = mount(<Piece type="test" />);
    expect(output).toBeDefined();
  });

  it('renders without crashing', () => {
    const output = mount(<Piece type="knight" />);
    expect(output.find('Knight')).toBeDefined();
  });
});

describe('isValidMove', () => {
  it('returns null when unhandled type is passed', () => {
    const shouldBeNull = isValidMove(['test', [0, 0], [0, 0]]);
    expect(shouldBeNull).toBeFalsy();
  });
});

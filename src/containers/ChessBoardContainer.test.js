/* global describe, it, expect, beforeAll */
import React from 'react';
import { shallow } from 'enzyme';
import ChessBoardContainer from './ChessBoardContainer';

describe('ChessBoardContainer', () => {
  let output;
  let selectTile;
  beforeAll(() => {
    output = shallow(<ChessBoardContainer />);

    output.setState({
      pieces: {
        knight: [0, 1],
        bishop: [0, 2],
      },
    });

    ({ selectTile } = output.instance());
  });
  it('Renders without crashing', () => {
    expect(output).toBeDefined();
  });

  it('renders one chessboard', () => {
    expect(output.find('ChessBoard')).toHaveLength(1);
  });

  it('contains chess pieces', () => {
    expect(output.state().pieces).toBeDefined();
  });

  it('sets knight as active when selected', () => {
    selectTile(['knight', [0, 1]], [0, 1]);
    expect(output.state().active).toEqual(['knight', [0, 1]]);
  });

  it('does not allow invalid moves for knight', () => {
    selectTile(null, [0, 2]);
    expect(output.state().active).toEqual(['knight', [0, 1]]);
  });

  it('allows valid moves for knight', () => {
    selectTile(null, [2, 0]);
    expect(output.state().pieces.knight).toEqual([2, 0]);
  });

  it('sets bishop as active when selected', () => {
    selectTile(['bishop', [0, 2]], [0, 2]);
    expect(output.state().active).toEqual(['bishop', [0, 2]]);
  });

  it('does not allow invalid moves for bishop', () => {
    selectTile(null, [1, 0]);
    expect(output.state().active).toEqual(['bishop', [0, 2]]);
  });

  it('allows valid moves for bishop', () => {
    selectTile(null, [1, 1]);
    expect(output.state().pieces.bishop).toEqual([1, 1]);
  });

  it('resets bishop as active when selected again', () => {
    selectTile(['bishop', [1, 1]], [1, 1]);
    expect(output.state().active).toEqual(['bishop', [1, 1]]);
  });

  it('does not allow bishop to occupy same space as knight', () => {
    selectTile(null, [2, 0]);
    expect(output.state().pieces.bishop).toEqual([1, 1]);
  });

  it('delects bishop when selected again', () => {
    selectTile(['bishop', [1, 1]], [1, 1]);
    expect(output.state().active).toEqual(null);
  });
});

/* global describe, it, expect */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ChessBoard from './ChessBoard';

const KNIGHT = { knight: [0, 0] };
const ACTIVE = ['knight', [0, 0]];

describe('ChessBoard', () => {
  it('renders without crashing', () => {
    const output = shallow(<ChessBoard selectTile={() => {}} />);
    expect(output).toBeDefined();
  });
  it('should have some tiles', () => {
    const output = shallow(<ChessBoard selectTile={() => {}} />);
    expect(output.find('Tile').length).toBeGreaterThan(0);
  });

  it('should have not have any pieces unless they are passed', () => {
    const output = shallow(<ChessBoard selectTile={() => {}} />);
    expect(output.find('Piece')).toHaveLength(0);
  });
  it('should have 1 piece when passed', () => {
    const output = mount(<ChessBoard selectTile={() => {}} pieces={KNIGHT} />);
    expect(output.find('Piece')).toHaveLength(1);
  });
  it('should mark tile as active when passed', () => {
    const output = mount(<ChessBoard selectTile={() => {}} pieces={KNIGHT} active={ACTIVE} />);
    expect(output.find('Tile').first().props().active).toBeDefined();
  });
});

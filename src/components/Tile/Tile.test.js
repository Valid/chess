/* global describe, it, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

const COORDS = [0, 0];

describe('ChessBoard Tile', () => {
  it('renders without crashing', () => {
    const output = shallow(<Tile coords={COORDS} selectTile={() => {}} />);
    expect(output).toBeDefined();
  });
  it('should call passed onClick event when clicked', () => {
    const mockCallBack = jest.fn();

    const output = shallow(<Tile coords={COORDS} selectTile={mockCallBack} />);
    output.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

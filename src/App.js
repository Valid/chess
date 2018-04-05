import React from 'react';
import styled from 'styled-components';
import ChessboardContainer from './containers/ChessBoardContainer';

const App = () => (
  <StyledGame>
    <ChessboardContainer />
  </StyledGame>
);

// Define game styles
const StyledGame = styled.div`
  background-color: #85ded7;
  display: flex;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    background-color: #414c52;
    display: block;
    height: 50%;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
`;

export default App;

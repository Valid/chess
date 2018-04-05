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
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  &:after {
    background-color: #414c52;
    bottom: 0;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

export default App;

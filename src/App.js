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
  background-color: #d0dcdb;
  display: flex;
  min-height: 100vh;
`;

export default App;

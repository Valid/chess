import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

export default ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div')
);

// Define Global styles
injectGlobal`
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
`;

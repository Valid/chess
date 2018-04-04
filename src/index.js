import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Define Global styles
injectGlobal`
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
`;

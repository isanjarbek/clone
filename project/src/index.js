import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
`

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'pink',
  },
  // media: {
  //   phone: "(max-width: 425px)",
  //   tablet: "(max-width: 768px) and (min-width: 425px)",
  // }
}
ReactDOM.render(
  <React.StrictMode>
    <>
      <Global />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

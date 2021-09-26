import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ReactFavicon from 'react-favicon';

import reportWebVitals from './reportWebVitals';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import media from './assets/media';

ReactDOM.render(
  <React.StrictMode>
    <ReactFavicon url={ media.favIcon } />
    <GlobalStyle />
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

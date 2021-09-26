import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    font-weight: 400;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Fresca', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

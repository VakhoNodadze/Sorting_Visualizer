import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';


import './styled/fonts.scss';
import GlobalStyle from './styled/global';
import { themes, defaultTheme } from './styled/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes[defaultTheme]}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

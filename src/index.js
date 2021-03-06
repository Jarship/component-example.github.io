import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import * as serviceWorker from './serviceWorker';
import theme, { globalStyles } from './theme';

ReactDOM.render(
  <>
    <Global
        styles={css`
        ${globalStyles}
        `}
      />
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

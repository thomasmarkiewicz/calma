import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { AppTheme } from './Theme';
import { Home } from '../views/Home';
import { Scaffold } from '../components/Scaffold';

export const App = () => (
  <>
    <Global styles={css`
      body {
        background-color: #fcfcfc;
      }
    `}/>
    <ThemeProvider theme={AppTheme}>
      <Scaffold>
        <Home />
      </Scaffold>
    </ThemeProvider>
  </>
)


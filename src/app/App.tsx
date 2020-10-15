import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { AppTheme } from './Theme';
import { Home } from '../views/Home';
import { Scaffold } from '../components/Scaffold';

export const App = () => (
  <ThemeProvider theme={AppTheme}>
    <Scaffold>
      <Home />
    </Scaffold>
  </ThemeProvider>
)

